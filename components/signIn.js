'use client'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Icon,
    Text,
    Image,
    useColorModeValue,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    HStack,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    useToast,
    Select,
    InputLeftAddon,
    FormErrorMessage,
    MenuList,
    MenuButton,
    MenuItem,
    Menu,
    Divider,
} from '@chakra-ui/react';
import { Bree_Serif, DM_Sans, Roboto_Slab } from "next/font/google";
import { useEffect, useRef, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { useRouter } from 'next/navigation'
import PageSeo from '@/Seo/pageSeo';
import baseURL from '@/services/baseUrl';
import { pinID } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';
import { signIn } from 'next-auth/react';
import { AsYouType, getCountries, getCountryCallingCode, isValidPhoneNumber, validatePhoneNumberLength } from 'libphonenumber-js'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const roboto = Roboto_Slab({ weight: '400', subsets: ['latin'] })

const robotoItalic = DM_Sans({ weight: '400', style: 'italic', subsets: ['latin'] })


const countryList = getCountries()











export const Signin = () => {
    const toast = useToast()
    const router = useRouter()
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = () => setShow(!show)
    const { register, handleSubmit } = useForm();
    const [loadingState, setLoadingState] = useState(false);
    const [qrImage, setQrimage] = useState('');





    const submitSignin = async () => {
        setLoadingState(true)

        setLoadingState(false)
    }


    return (


        <Box
            m="0px"
            borderRadius={'2px'}
            w={{ base: "27.93rem", md: "37.93rem" }}
            h="35.37rem"
            bg={'#F9FAFC'}
            border={'1px solid rgba(0, 0, 0, 0.14);'}
            py={'4.5rem'} px={'4.8rem'}>


            <Stack >
                <Box mb="1.6rem">
                    <FormControl id="email" >
                        <FormLabel className={roboto.className}>Email Address</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                h="100%"
                                pointerEvents='none'

                            >

                                <Icon>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.2" clipPath="url(#clip0_79_265)">
                                            <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_79_265">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </Icon>
                            </InputLeftElement>
                            <Input h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="email" placeholder='Enter your email' value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                        </InputGroup>

                    </FormControl>
                </Box>

                <Box
                >
                    <FormControl id="password" >
                        <FormLabel className={roboto.className}>Password</FormLabel>

                        <InputGroup mb="2.6rem">
                            <InputLeftElement
                                h="100%"
                                pointerEvents='none'
                            >

                                <Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.2" clipPath="url(#clip0_79_274)">
                                            <path d="M18 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H6V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8ZM11 15.732V18H13V15.732C13.3813 15.5119 13.6793 15.1721 13.8478 14.7653C14.0162 14.3586 14.0458 13.9076 13.9319 13.4823C13.8179 13.057 13.5668 12.6813 13.2175 12.4132C12.8682 12.1452 12.4403 11.9999 12 11.9999C11.5597 11.9999 11.1318 12.1452 10.7825 12.4132C10.4332 12.6813 10.1821 13.057 10.0681 13.4823C9.9542 13.9076 9.98376 14.3586 10.1522 14.7653C10.3207 15.1721 10.6187 15.5119 11 15.732ZM16 8V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8H16Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_79_274">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Icon>
                            </InputLeftElement>

                            <Input h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}
                                type={show ? 'text' : 'password'} placeholder='Enter your password' value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <InputRightElement h="100%" mx="1rem">
                                {show ?
                                    <Icon _hover={{
                                        cursor: 'pointer'
                                    }} as={RiEyeFill} fontSize="1.5rem" color="#9A9C9D" onClick={handleClick} /> : <Icon _hover={{
                                        cursor: 'pointer'
                                    }} as={RiEyeCloseFill} fontSize="1.5rem" color="#9A9C9D" onClick={handleClick} />}
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </Box>

                <Button
                    onClick={submitSignin}
                    isDisabled={!email || !password}
                    isLoading={loadingState}
                    loadingText='Please wait..'
                    borderRadius={'0.125rem'}
                    h="4rem"
                    bg={'#000000'}
                    color={'white'}
                    _hover={{
                        bg: 'black.400',
                    }}>
                    <Text
                        fontSize="1.5rem" className={roboto.className} >
                        Sign in
                    </Text>

                </Button>

                <Stack

                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'center'}>
                    <Link mt="2rem" className={robotoItalic.className} color={'#000000'}>Forgot password?</Link>
                </Stack>
            </Stack>

        </Box>
    )
}