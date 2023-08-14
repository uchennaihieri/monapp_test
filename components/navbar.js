import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Img,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Badge,
    Spacer,
} from '@chakra-ui/react';
import { DM_Sans } from "next/font/google"

import Image from 'next/image';
import { RiMenu3Line } from 'react-icons/ri';
import { useRouter } from 'next/navigation';

const dmsans = DM_Sans({ weight: ['500', '700'], subsets: ['latin'] })

export default function Navbar() {

    const router = useRouter()
    const goHome = () => {
        router.push('/')
    }


    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex className={dmsans.className}
            // mt={{ base: '1.5rem', md: '1.25rem' }}
            justify='center'
            flexDirection={['column', 'row']}

        >
            <Flex
                color={useColorModeValue('gray.600', 'white')}
                pt={{ base: '2.875rem', md: '4.08vh' }}
                w={['100%', '72.813vw']}
                px={['1rem', 'auto']}
                align={'center'}>


                <Flex justify={{ base: 'start', md: 'start' }} onClick={goHome} _hover={{
                    cursor: "pointer"
                }} position="relative"
                >
                    <Img src="/logo.png" width={{ base: '8.625rem', md: "14.4275rem" }} height={{ base: '1.569rem', md: "2.625rem" }} />

                    {/* <Badge position="absolute" left="-10px" top="-15px" colorScheme='green'>BETA</Badge> */}
                </Flex>


                <Spacer />

                <Flex display={{ base: 'none', md: 'flex' }}   >
                    <DesktopNav />
                </Flex>

                <Spacer />

                <Flex display={{ base: 'none', md: 'flex' }}   >
                    <ActionNav />
                </Flex>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    justify="end"
                    display={{ base: 'flex', md: 'none' }}
                    marginRight="1.25rem"
                    _hover={{
                        cursor: 'pointer'
                    }}
                >
                    {/* <CloseIcon color="white" w={5} h={5} onClick={onToggle} /> */}

                    {
                        isOpen ? "" : <RiMenu3Line color="white" w={5} h={5} onClick={onToggle} />
                    }

                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>

        </Flex>
    );
}


const ActionNav = () => {
    const linkColor = useColorModeValue('white', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.400', 'white');

    return (

        <Stack direction={'row'} gap={{ md: '2.62rem', '2xl': '2.62rem' }} >
            {NAV_ITEMS.slice(3).map((navItem) => (
                <Box key={navItem.label} align={'center'} role="group" position={'relative'}>

                    <Link

                        href={navItem.href ?? '#'}
                        fontSize={'1rem'}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                        }}>
                        {navItem.label}
                    </Link>

                    <Img position={'absolute'} w={'0em'} _groupHover={{ width: "100%" }} src="line.svg" height="0.6em" transition={'width .5s ease-in-out'} />
                </Box>
            ))}

        </Stack>


    );
};

const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.400', 'white');

    return (

        <Stack direction={'row'} align={'center'} gap={{ md: '1.75rem', '2xl': '1.75rem' }} >
            {NAV_ITEMS.slice(0, 3).map((navItem) => (
                <Box key={navItem.label} align={'center'} role="group" position={'relative'} >

                    <Link
                        href={navItem.href ?? '#'}
                        fontSize={'1rem'}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                        }}>
                        {navItem.label}
                    </Link>

                    <Img position={'absolute'} w={'0em'} _groupHover={{ width: "100%" }} src="line.svg" height="0.6em" transition={'width .5s ease-in-out'} />
                </Box>
            ))}
        </Stack>

    );
};

const MobileNav = () => {
    return (
        <Stack
            bg="#000000"
            p={4}
            // bgColor={'green'}
            // mt={'20rem'}

            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}

                    color="white" _hover={{
                        color: "gray.200",
                    }}>
                    {label}
                </Text>
                {children && (<></>
                    // <Icon
                    //     as={ChevronDownIcon}
                    //     transition={'all .25s ease-in-out'}
                    //     transform={isOpen ? 'rotate(180deg)' : ''}
                    //     w={6}
                    //     h={6}
                    // />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};



const NAV_ITEMS = [
    {
        label: 'Pricing',
        href: '/pricing'

    },
    {
        label: 'Support',
        href: '/support'

    },
    {
        label: 'Become a broker',
        href: '/broker'
    },
    {
        label: 'Sign in',
        href: '/auth'
    },
    {
        label: 'Get Started',
        href: '/auth'
    }

];