'use client'
import React, { ReactNode, useState } from 'react';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
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
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
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
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { DM_Sans, Rubik, } from "next/font/google";
import { BsChevronDown, BsDot } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import NewDash from '../layout';
import { activePage } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';
import BillingSetting from '@/components/billingSetting';
import NotificationSetting from '@/components/notificationSetting';
import ProfileSetting from '@/components/profileSetting';
import ProfileIcon from '@/components/Icons/profileIcon';
import NotificationIcon from '@/components/Icons/notificationIcon';
import BillingIcon from '@/components/Icons/billingIcon';
import SecuritySetting from '@/components/securitySetting';
import SecurityIcon from '@/components/Icons/securityIcon';



const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })
const dmsansbold = DM_Sans({ weight: '500', subsets: ['latin'] })
const rubik = Rubik({ weight: ['300', '400'], subsets: ['latin'] })

function Setting() {

    const [currentPage, setCurrentPage] = useRecoilState(activePage)

    return (

        <div>


            <Box ml={{ base: 0, md: '8rem' }} display={{ base: 'none', md: 'flex' }} mt='18px' px='10px'>

                <Box dropShadow='lg' w='100%' minH='221px' my='26px' >
                    <Flex flexDir="row">

                        <Box h='654px' w='264px' border='0.6px solid #CFD0D3' borderRadius='8px' bg='#FFFFFF' py='22px'  >
                            <Box px='22px' borderLeft={currentPage === 'profile' && "1.2px solid #000000"}  // Example styling for left border
                                borderRight={currentPage === 'profile' && "1.2px solid #000000"} _hover={{ cursor: 'pointer' }} onClick={() => {
                                    setCurrentPage('profile'); // Update the current page when a link is clicked
                                }}>

                                <Flex direction={'row'} justify='space-between' width={'100%'} h='70px' bg='none' py='18px' align='start' >
                                    <HStack spacing='8px' align='start' >

                                        <ProfileIcon boxSize={8} color={currentPage === 'profile' ? "#000000" : 'rgba(0, 0, 0, 0.4)'} />

                                        <Box textAlign={'left'} >  <Text fontSize={'14px'} mb='4px' lineHeight='18.23px' className={dmsansbold.className} color={currentPage === 'profile' ? "#000000" : 'rgba(0, 0, 0, 0.4)'} fontStyle="normal" fontWeight={500}>Your Profile</Text>
                                            <Text fontSize={'10px'} lineHeight='13px' className={dmsans.className} fontStyle="normal" fontWeight={400} color={currentPage === 'profile' ? "#000000" : 'rgba(0, 0, 0, 0.4)'} >your personal information</Text>
                                        </Box>

                                    </HStack>

                                </Flex>
                                <Divider />
                            </Box>

                            <Box px='22px' borderLeft={currentPage === 'notification' && "1.2px solid #000000"}  // Example styling for left border
                                borderRight={currentPage === 'notification' && "1.2px solid #000000"} _hover={{ cursor: 'pointer' }} onClick={() => {
                                    setCurrentPage('notification'); // Update the current page when a link is clicked
                                }}>

                                <Flex direction={'row'} justify='space-between' width={'100%'} h='70px' bg='none' py='18px' align='start' >
                                    <HStack spacing='8px' align='start'>
                                        <NotificationIcon boxSize={8} color={currentPage === 'notification' ? "#000000" : 'rgba(0, 0, 0, 0.4)'} />
                                        <Box textAlign={'left'} >  <Text fontSize={'14px'} mb='4px' lineHeight='18.23px' className={dmsansbold.className} color={currentPage === 'notification' ? "#000000" : 'rgba(0, 0, 0, 0.4)'} fontStyle="normal" fontWeight={500}>Notifications</Text>
                                            <Text fontSize={'10px'} lineHeight='13px' className={dmsans.className} fontStyle="normal" fontWeight={400} color={currentPage === 'notification' ? "#000000" : 'rgba(0, 0, 0, 0.4)'}>your personal information</Text>
                                        </Box>


                                    </HStack>



                                </Flex>
                                <Divider />
                            </Box>


                            <Box px='22px' borderLeft={currentPage === 'billing' && "1.2px solid #000000"}  // Example styling for left border
                                borderRight={currentPage === 'billing' && "1.2px solid #000000"} _hover={{ cursor: 'pointer' }} onClick={() => {
                                    setCurrentPage('billing'); // Update the current page when a link is clicked
                                }}>

                                <Flex direction={'row'} justify='space-between' width={'100%'} h='70px' bg='none' py='18px' align='start' >
                                    <HStack spacing='8px' align='start'>
                                        <BillingIcon boxSize={8} color={currentPage === 'billing' ? "#000000" : 'rgba(0, 0, 0, 0.4)'} />
                                        <Box textAlign={'left'} >  <Text fontSize={'14px'} mb='4px' lineHeight='18.23px' className={dmsansbold.className} color={currentPage === 'billing' ? "#000000" : 'rgba(0, 0, 0, 0.4)'} fontStyle="normal" fontWeight={500}>Billing</Text>
                                            <Text fontSize={'10px'} lineHeight='13px' className={dmsans.className} fontStyle="normal" fontWeight={400} color={currentPage === 'billing' ? "#000000" : 'rgba(0, 0, 0, 0.4)'} >your personal information</Text>
                                        </Box>


                                    </HStack>



                                </Flex>
                                <Divider />
                            </Box>


                            <Box px='22px' borderLeft={currentPage === 'security' && "1.2px solid #000000"}  // Example styling for left border
                                borderRight={currentPage === 'security' && "1.2px solid #000000"} _hover={{ cursor: 'pointer' }} onClick={() => {
                                    setCurrentPage('security'); // Update the current page when a link is clicked


                                }}>

                                <Flex direction={'row'} justify='space-between' width={'100%'} h='70px' bg='none' py='18px' align='start' >
                                    <HStack spacing='8px' align='start'>
                                        <SecurityIcon boxSize={8} color={currentPage === 'security' ? "#000000" : 'rgba(0, 0, 0, 0.4)'} />
                                        <Box textAlign={'left'} >  <Text fontSize={'14px'} mb='4px' lineHeight='18.23px' className={dmsansbold.className} color={currentPage === 'security' ? "#000000" : 'rgba(0, 0, 0, 0.4)'} fontStyle="normal" fontWeight={500}>Security</Text>
                                            <Text fontSize={'10px'} lineHeight='13px' className={dmsans.className} fontStyle="normal" fontWeight={400} color={currentPage === 'security' ? "#000000" : 'rgba(0, 0, 0, 0.4)'}>your personal information</Text>
                                        </Box>


                                    </HStack>



                                </Flex>

                            </Box>

                        </Box>

                        <Box ml='28px' >
                            {/* Render the children based on the selected page */}
                            {currentPage === 'profile' && <ProfileSetting />}
                            {currentPage === 'notification' && <NotificationSetting />}
                            {currentPage === 'billing' && <BillingSetting />}
                            {currentPage === 'security' && <SecuritySetting />}
                        </Box>

                    </Flex>

                </Box>

            </Box>



            {/* Mobile View */}
            <Box display={{ base: 'flex', md: 'none' }} >
                <Tabs isFitted width='100%' variant='colorful' colorScheme='blackAlpha.900' >
                    <TabList mb='1em'>
                        <Tab >
                            <HStack align='center' >

                                <ProfileIcon boxSize={4} />
                                <Box textAlign={'left'} >  <Text fontSize={'0.625em'} mb='0.25em' lineHeight='1.139em' className={dmsansbold.className} fontStyle="normal" fontWeight={600}>Your Profile</Text>
                                </Box>

                            </HStack>

                        </Tab>
                        <Tab>
                            <HStack align='center' >
                                <ProfileIcon boxSize={4} />
                                <Box textAlign={'left'} >  <Text fontSize={'0.625em'} mb='0.25em' lineHeight='1.139em' className={dmsansbold.className} fontStyle="normal" fontWeight={600}>Notifications</Text>
                                </Box>
                            </HStack>
                        </Tab>
                        <Tab>
                            <HStack align='center' >
                                <ProfileIcon boxSize={4} />
                                <Box textAlign={'left'} >  <Text fontSize={'0.625em'} mb='0.25em' lineHeight='1.139em' className={dmsansbold.className} fontStyle="normal" fontWeight={600}>Billing</Text>
                                </Box>
                            </HStack>
                        </Tab>
                        <Tab>
                            <HStack align='center' >
                                <ProfileIcon boxSize={4} />
                                <Box textAlign={'left'} >  <Text fontSize={'0.625em'} mb='0.25em' lineHeight='1.139em' className={dmsansbold.className} fontStyle="normal" fontWeight={600}>Security</Text>
                                </Box>
                            </HStack>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ProfileSetting />
                        </TabPanel>

                        <TabPanel>
                            <NotificationSetting />
                        </TabPanel>
                        <TabPanel>
                            <BillingSetting />
                        </TabPanel>
                        <TabPanel>
                            <SecuritySetting />
                        </TabPanel>

                    </TabPanels>
                </Tabs>

            </Box>


















        </div>

    )
}

export default Setting