'use client'
import React, { ReactNode, useEffect, useState } from 'react';
import useSWR from 'swr'
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon, ButtonGroup,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Image,
    InputGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    InputLeftElement,
    Input,
    Spacer,
    Button,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Heading,
    Divider,
    Alert,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';
import { ReactText } from 'react';
import { DM_Sans, Rubik, } from "next/font/google";
import { BsChevronDown, BsDot } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import MyChart from '@/components/myChart';
import { activePage, personState } from '@/recoil/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import Link from 'next/link';
import Loading from '@/components/loading';
import baseURL from '../../services/baseUrl';

import { useRouter } from 'next/navigation';
import DashboardIcon from '@/components/Icons/dashboardIcon';
import MyCardsIcon from '@/components/Icons/myCardsIcon';
import TransactionIcon from '@/components/Icons/transactionIcon';
import MerchantsIcon from '@/components/Icons/merchantsIcon';
import settingIcon from '@/components/Icons/settingIcon';
import LogoutIcon from '@/components/Icons/logoutIcon';
import { auth, signOut, db, onAuthStateChanged } from '@/services/firebase';
import axios from 'axios';


const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })
const dmsansbold = DM_Sans({ weight: '500', subsets: ['latin'] })
const rubik = Rubik({ weight: ['300', '400'], subsets: ['latin'] })

const LinkItems = [
    { name: 'Dashboard', icon: DashboardIcon, pathname: '/Dashboard' },
    { name: 'My Cards', icon: MyCardsIcon, pathname: '/my_cards' },
    { name: 'Transaction', icon: TransactionIcon, pathname: '/transactions' },
    { name: 'Merchants', icon: MerchantsIcon, pathname: '/merchants' },
    { name: 'Setting', icon: settingIcon, pathname: '/settings' },
    { name: 'Logout', icon: LogoutIcon, pathname: '#' },
];







export default function NewDash({
    children,
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentPage, setCurrentPage] = useRecoilState(activePage)
    const [fetchData, setFetchData] = useState(false);
    const [person, setPerson] = useRecoilState(personState)
    const router = useRouter()
    const [loggedUser, setLoggedUser] = useState(undefined);
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error, isLoading } = useSWR(fetchData ? `${baseURL}/api/user/${loggedUser?.uid}` : null, fetcher)




    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedUser(user)
                setFetchData(true)
            } else {
                router.push('/auth')
            }
        });
    }, [loggedUser]);


    const updatePerson = () => {
        setPerson(data)
    }



    if (loggedUser == undefined || isLoading) {
        return <Loading />;
    }


    if (error) {
        return <p>Error: {error.message}</p>;
    }


    if (!data.verified) {
        router.push('/verifyUser')
        return <Loading />;
    }

    if (data.verified == "submitted") {
        router.push('/confirmOtp')
        return <Loading />;
    }


    updatePerson()

    return (
        <Box minH="100vh" bg={'#FCFCFC'}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: '17.25rem', '2xl': '26rem' }} p="4">

                {children}
            </Box>
        </Box>
    );
}



const SidebarContent = ({ onClose, ...rest }) => {



    return (
        <Box
            transition="3s ease"
            bg={'#FFFFFF'}
            borderRight="1px"
            borderRightColor={'#EEF1F6'}
            w={{ base: 'full', md: '19.16%' }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex mt='51px' mb="47px" alignItems="center" mx="4rem" justifyContent="space-between">
                <Image src={'/footerlogo.png'} width={{ base: '158px' }} height={'auto'} />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Text mx="4rem" mb="10px" fontSize={'12px'} color={'#A5B3CD'} textTransform="uppercase">Manage</Text>
            {LinkItems.map((link) => (

                <NavItem key={link.name} name={link.name} to={link.pathname} icon={link.icon}>
                    {link.name}
                </NavItem>

            ))}

        </Box>
    );
};


const NavItem = ({ icon, to, name, children, ...rest }) => {

    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { firstName, lastName } = useRecoilValue(personState)
    const checkClick = (name) => {

        if (name === 'Logout') {

            onOpen()
        } else null
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            router.push('/auth')
        }).catch((error) => {
            console.log({ error })
        });
    }


    return (

        <>
            <Modal size='3xl' isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount={false}>
                <ModalOverlay />
                <ModalContent h='355px'>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDirection='column' align='center' justify='center' pt='38px' pb='65px' textAlign='center'>
                            <Text mb='26px' fontSize='18px' className={dmsans.className}>Hey, {firstName + ' ' + lastName}.! </Text>
                            <Text mb='75px' maxW='301px' fontSize='28px' fontWeight={'500'} className={dmsans.className}>Are you sure you want to logout?</Text>
                            <ButtonGroup gap={{ base: '1.125em', md: '18px' }} flexWrap='wrap' justifyContent='center'>
                                <Button variant='solid' colorScheme='blackAlpha' w={{ base: '100%', md: '12.625em' }} h='54px' borderRadius={'2px'} bg='rgba(0, 0, 0, 1)' ><Text fontSize={'16px'} color='#FFFFFF' fontWeight={700} lineHeight='21px' className={dmsans.className} onClick={handleLogout}>Yes, log out</Text></Button>
                                <Button variant='outline' colorScheme='blackAlpha' w={{ base: '100%', md: '12.625em' }} h='54px' borderRadius={'2px'} onClick={onClose}  ><Text fontSize={'16px'} color='#000000' fontWeight={700} lineHeight='21px' className={dmsans.className} > No, Cancel</Text></Button>

                            </ButtonGroup>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Link
                href={`${to}`}
                onClick={() => checkClick(name)}
                passHref style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <Flex
                    align="center"
                    p="4"
                    ml="12"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    color={router.pathname === to ? '#000000' : '#A5B3CD'}
                    fontWeight={router.pathname === to ? 'bold' : 'normal'}
                    className={dmsans.className}
                    fontSize={'18px'}
                    _hover={{
                        color: '#000000',
                        fontWeight: 'semibold'
                    }}
                    {...rest}>
                    {icon && (
                        <Icon
                            mr="17.5px"
                            fontSize="16px"
                            color={router.pathname === to ? '#000000' : '#A5B3CD'}
                            _groupHover={{
                                color: '#000000',
                            }}
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            </Link>
        </>
    );
};


const MobileNav = ({ onOpen, ...rest }) => {

    const router = useRouter();
    const routeNames = {
        '/Dashboard': 'Dashboard',
        '/my_cards': 'My Cards',
        '/transactions': 'Transaction',
        '/merchants': 'Merchants',
        '/settings': 'Settings',
    };

    const currentRoute = router.pathname;
    const title = routeNames[currentRoute];
    const { firstName, lastName } = useRecoilValue(personState)


    return (
        <>
            <Flex
                ml={{ base: 0, md: '6.375rem', '2xl': '13.375rem' }}
                px={{ base: 4, md: '3.1875rem' }}
                height={{ base: '20', md: '8.8rem' }}
                alignItems="center"
                bg={'#FCFCFC'}
                // borderBottomWidth="1px"
                // borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                justifyContent={{ base: 'space-between', md: 'flex-end' }}
                {...rest}>
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onOpen}
                    variant="outline"
                    aria-label="open menu"
                    icon={<FiMenu />}
                />


                <Image display={{ base: 'flex', md: 'none' }} src={'/footerlogo.png'} width={{ base: '9.8rem' }} height={'auto'} />
                <HStack display={{ base: 'none', md: 'flex' }} w='100%' ml="17.25rem" mr="2.375rem" >
                    <Box display={{}}>
                        <Text fontSize={'32px'} fontWeight={500} >{title}</Text>
                        <Text fontSize={'14px'} fontWeight={500} >Hi, {firstName ? firstName + " " + lastName : 'User'}</Text>
                    </Box>
                    <Spacer />

                    <InputGroup align="center" w="35.125rem" h="3.75rem"  >
                        {/* <InputLeftElement
                            h="3.75rem"
                            pointerEvents='none'

                        ><SearchIcon w="14.91px" h="15.06px" color="#A5B3CD" /></InputLeftElement> */}
                        <Input type="search"
                            borderRadius="8px" w="35.125rem" h="3.75rem" variant='outline' _placeholder={{ opacity: 1, color: "#A5B3CD", fontSize: '1rem' }} placeholder='Search a transaction' bg="#FFFFFF" />
                    </InputGroup>

                </HStack>
                <HStack spacing={{ base: '.75rem', md: '1.39rem' }}>
                    <IconButton
                        borderRadius={'100%'}
                        size="lg"
                        variant="outline"
                        aria-label="open menu"

                        icon={<FiBell />}
                    />

                    <Box
                        style={{
                            filter: "drop-shadow(0px 14px 54px rgba(0, 0, 0, 0.06))",
                        }}
                    >
                        <Avatar
                            display={{ base: 'none', md: 'flex' }}
                            size={'lg'}
                            name={firstName + " " + lastName}
                            src={''}
                        />


                    </Box>
                </HStack>

            </Flex >
            <Box display={{ md: 'none' }}
                ml={{ base: 0, md: '6.375rem' }}
                px={{ base: 4, md: '3.1875rem' }}
                height={{ base: '20', md: '8.8rem' }}
            >
                <Text fontSize={'22px'} fontWeight={500} >{title}</Text>
                <Text fontSize={'14px'} fontWeight={400} >Hi {firstName ? firstName : 'User'}</Text>
            </Box>
        </>
    );
};