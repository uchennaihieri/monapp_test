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
} from '@chakra-ui/react';
import { Bree_Serif, DM_Sans, Roboto_Slab } from "next/font/google";
import { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'
import { auth, createUserWithEmailAndPassword, db, doc, serverTimestamp, setDoc, signInWithEmailAndPassword } from '@/services/firebase';
import PageSeo from '@/Seo/pageSeo';
import { collection, getDocs, query, where } from 'firebase/firestore';
import baseURL from '@/services/baseUrl';
import { pinID } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const roboto = Roboto_Slab({ weight: '400', subsets: ['latin'] })

const robotoItalic = DM_Sans({ weight: '400', style: 'italic', subsets: ['latin'] })





const locations = [
    {
        state: "Abia",
        city: "umuahia",
        address: "umuahia",
        postalCode: "440001"

    },
    {
        state: "Adamawa",
        city: "yola",
        address: "yola",
        postalCode: "640001"

    },
    {
        state: "Akwa_Ibom",
        city: "uyo",
        address: "uyo",
        postalCode: "520001"

    },
    {
        state: "Anambra",
        city: "awka",
        address: "awka",
        postalCode: "420001"

    },
    {
        state: "Bauchi",
        city: "bauchi",
        address: "bauchi",
        postalCode: "740001"

    },
    {
        state: "Bayelsa",
        city: "yenagoa",
        address: "yenagoa",
        postalCode: "561001"

    },
    {
        state: "Benue",
        city: "makurdi",
        address: "makurdi",
        postalCode: "970001"

    },
    {
        state: "Borno",
        city: "maiduguri",
        address: "maiduguri",
        postalCode: "600001"

    },
    {
        state: "Cross_River",
        city: "calabar",
        address: "calabar",
        postalCode: "540001"

    },
    {
        state: "Delta",
        city: "asaba",
        address: "asaba",
        postalCode: "320001"

    },
    {
        state: "Ebonyi",
        city: "abakaliki",
        address: "abakaliki",
        postalCode: "840001"

    },
    {
        state: "Edo",
        city: "benin_city",
        address: "benin_city",
        postalCode: "300001"

    },
    {
        state: "Ekiti",
        city: "ado_ekiti",
        address: "ado_ekiti",
        postalCode: "360001"

    },
    {
        state: "Enugu",
        city: "enugu",
        address: "enugu",
        postalCode: "400001"

    },
    {
        state: "FCT",
        city: "abuja",
        address: "abuja",
        postalCode: "900001"

    },
    {
        state: "Gombe",
        city: "gombe",
        address: "gombe",
        postalCode: "760001"

    },
    {
        state: "Imo",
        city: "owerri",
        address: "owerri",
        postalCode: "460001"

    },
    {
        state: "Jigawa",
        city: "dutse",
        address: "dutse",
        postalCode: "720001"

    },
    {
        state: "Kaduna",
        city: "kaduna",
        address: "kaduna",
        postalCode: "700001"

    },
    {
        state: "Kano",
        city: "kano",
        address: "kano",
        postalCode: "800001"

    },
    {
        state: "Katsina",
        city: "katsina",
        address: "katsina",
        postalCode: "820001"

    },
    {
        state: "Kebbi",
        city: "birnin_kebbi",
        address: "birnin_kebbi",
        postalCode: "860001"

    },
    {
        state: "Kogi",
        city: "lokoja",
        address: "lokoja",
        postalCode: "260001"

    },
    {
        state: "Kwara",
        city: "ilorin",
        address: "ilorin",
        postalCode: "240001"

    },

    {
        state: "Lagos",
        city: "ikeja",
        address: "ikeja",
        postalCode: "100001"

    },
    {
        state: "Nasarawa",
        city: "lafia",
        address: "lafia",
        postalCode: "962001"

    },
    {
        state: "Niger",
        city: "minna",
        address: "minna",
        postalCode: "920001"

    },
    {
        state: "Ogun",
        city: "abeokuta",
        address: "abeokuta",
        postalCode: "110001"

    },
    {
        state: "Ondo",
        city: "akure",
        address: "akure",
        postalCode: "340001"

    },
    {
        state: "Osun",
        city: "oshogbo",
        address: "oshogbo",
        postalCode: "230001"

    },
    {
        state: "Oyo",
        city: "ibadan",
        address: "ibadan",
        postalCode: "200001"

    },
    {
        state: "Plateau",
        city: "jos",
        address: "jos",
        postalCode: "930001"

    },
    {
        state: "Rivers",
        city: "port_harcourt",
        address: "port_harcourt",
        postalCode: "500001"

    },
    {
        state: "Sokoto",
        city: "sokoto",
        address: "sokoto",
        postalCode: "840001"

    },
    {
        state: "Taraba",
        city: "jalingo",
        address: "jalingo",
        postalCode: "660001"

    },
    {
        state: "Yobe",
        city: "damaturu",
        address: "damaturu",
        postalCode: "320001"

    },
    {
        state: "Zamfara",
        city: "gusau",
        address: "gusau",
        postalCode: "860001"

    },
]


const Auth = () => {

    const [page, setPage] = useState(0)
    const { register, handleSubmit } = useForm();


    const router = useRouter()



    const goSupport = () => {
        router.push('/broker')
    }


    const goHome = () => {
        router.push('/')
    }



    const handleTabsChange = (index) => {
        setPage(index)
    }


    return (

        <>
            {/* <PageSeo title="Login/Signup  - Monapp" description="" /> */}



            <Tabs index={page} onChange={handleTabsChange} isFitted m="0" mb="2.92rem" p="0">
                <TabList>
                    <Tab color={'rgba(0, 0, 0, 0.4)'} borderBottomColor='transparent' _selected={{ color: '#000000', borderBottomColor: '#000000' }}><Text fontWeight={400}
                        lineHeight={'3.125rem'} letterSpacing={'-0.5px'}
                        className={bree.className} fontSize={'1.125rem'}>Sign in</Text></Tab>
                    <Tab color={'rgba(0, 0, 0, 0.4)'} borderBottomColor='transparent' _selected={{ color: '#000000', borderBottomColor: '#000000' }}><Text fontWeight={400}
                        lineHeight={'3.125rem'} letterSpacing={'-0.5px'}
                        className={bree.className} fontSize={'1.125rem'}>Sign up</Text></Tab>
                </TabList>

                <TabPanels m="0" p="0">
                    <TabPanel m="0" p="0">
                        <Signin />
                    </TabPanel>
                    <TabPanel m="0" p="0">
                        <Signup />
                    </TabPanel>
                </TabPanels>
            </Tabs>




        </>
    );
}






export const Signin = () => {
    const toast = useToast()
    const router = useRouter()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const { register, handleSubmit } = useForm();
    const [loadingState, setLoadingState] = useState(false);




    const onSubmit = (data) => {
        setLoadingState(true)

        signInWithEmailAndPassword(auth, data.email, data.pwd)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.push('/Dashboard')
                setLoadingState(false)
            })
            .catch((error) => {

                if (error.code == 'auth/wrong-password') {
                    toast({
                        title: 'Sign in failed',
                        description: 'Incorrect password',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        position: 'top',
                    })
                }

                if (error.code == 'auth/user-not-found') {
                    toast({
                        title: 'Sign in failed',
                        description: 'User does not exist',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        position: 'top',
                    })
                }


                if (error.code == 'auth/invalid-email') {
                    toast({
                        title: 'Sign in failed',
                        description: 'Invalid email input',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        position: 'top',
                    })
                }

                // ..
                setLoadingState(false)
            });
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                                <Input h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="email" placeholder='Enter your email' {...register("email")} />

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
                                    type={show ? 'text' : 'password'} placeholder='Enter your password' {...register("pwd")} />
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
                        type='submit'
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
            </form>
        </Box>
    )
}






export const Signup = () => {
    const router = useRouter()
    const [loadingState, setLoadingState] = useState(false);
    const [tokenPin, setTokenPin] = useRecoilState(pinID);
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [location, setLocation] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [tag, setTag] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [selectedOption, setSelectedOption] = useState(null);
    const [isFirstNameValid, setIsFirstNameValid] = useState(null);
    const [isLastNameValid, setIsLastNameValid] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(null);
    const [isTagValid, setIsTagValid] = useState(null);
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const [tagError, setTagError] = useState('')

    const toast = useToast()
    const verifyUser = () => {
        router.push('/verifyUser')
    }



    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const selectedObject = locations.find((option) => option.state === selectedValue);
        setSelectedOption(selectedObject);
        setCity(selectedObject.city)
        setAddress(selectedObject.address)
        setPostalCode(selectedObject.postalCode)
        setLocation(selectedObject.state)
    };



    const checkFirstNameValidity = () => {
        if (firstName.trim().length >= 2) {
            setIsFirstNameValid(true)
            setFirstNameError('')
        } else {
            setIsFirstNameValid(false)
            setFirstNameError('Name should be atleast two characters long')
        }
    }


    const checkLastNameValidity = () => {
        if (lastName.trim().length >= 2) {
            setIsLastNameValid(true)
            setLastNameError('')
        } else {
            setIsLastNameValid(false)
            setLastNameError('Name should be atleast two characters long')
        }
    }

    const checkEmailValidity = async () => {

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        const emailTest = emailRegex.test(email);

        if (emailTest === true) {
            //check if the email is not taken
            const q = query(collection(db, "users"), where("email", "==", `${email}`));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                setIsEmailValid(true)
                setEmailError('')
            } else {
                setIsEmailValid(false)
                setEmailError('Email is already taken')

            }

        } else {
            setIsEmailValid(false)
            setEmailError('Please use a correct email format')
        }
    }

    const checkPhoneNumberValidity = async () => {

        const phoneNumberRegex = /^(070|080|081|090|091)\d{8}$/;
        const phoneNumberTest = phoneNumberRegex.test(phoneNumber);

        if (phoneNumberTest === true) {
            const q = query(collection(db, "users"), where("phoneNumber", "==", `${phoneNumber}`));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                setIsPhoneNumberValid(true)
                setPhoneNumberError('')
            } else {
                setIsPhoneNumberValid(false)
                setPhoneNumberError('Phone Number has already been used')

            }

        } else {
            setIsPhoneNumberValid(false)
            setPhoneNumberError('Please use the correct format: 07012345678')
        }
    }


    const checkTagValidity = async () => {



        if (tag.trim().length >= 2) {
            const q = query(collection(db, "cards"), where("tag", "==", `${tag}`));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                setIsTagValid(true)
                setTagError('')
            } else {
                setIsTagValid(false)
                setTagError('Tag is being used already')

            }

        } else {
            setIsTagValid(false)
            setTagError('Tag should have atleast two characters')
        }
    }




    const handleSubmit = async () => {
        setLoadingState(true)
        const q = query(collection(db, "users"), where("phoneNumber", "==", `${data.phoneNumber}`));


        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {


            await fetch(`${baseURL}/api/user/register`, {

                // Adding method type
                method: "POST",

                // Adding body or contents to send
                body: JSON.stringify({

                    "firstName": firstName.toLowerCase(),
                    "lastName": lastName.toLowerCase(),
                    "email": email,
                    "password": pwd,
                    "tag": tag,
                    "phoneNumber": phoneNumber,
                    "city": city,
                    "state": location,
                    "address": address,
                    "postalCode": postalCode
                }),

                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return response.json();
            }).then(async function (res) {
                console.log(res)
                if (res.error == true) {
                    toast({
                        title: 'user creation failed',
                        description: res.message,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        position: 'top',
                    })
                    setLoadingState(false)
                } else {

                    signInWithEmailAndPassword(auth, email, pwd)

                    await fetch(`${baseURL}/api/verifyBvn`, {

                        // Adding method type
                        method: "POST",

                        // Adding body or contents to send
                        body: JSON.stringify({
                            "phoneNumber": phoneNumber
                        }),

                        // Adding headers to the request
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    }).then(function (res) {
                        return res.json();
                    })
                        // Converting to JSON
                        .then(async function (data) {
                            setLoadingState(false)
                            setTokenPin(data.pinId)
                            router.push('/confirmOtp')
                        })
                        .catch(function (error) {
                            setLoadingState(false)
                            console.log(error);
                        })
                }


            }).catch((error) => {
                setLoadingState(false)
                console.log({ error })
            });

            // createUserWithEmailAndPassword(auth, data.email, data.pwd)
            //     .then(async (userCredential) => {
            //         // Signed in 


            //         const user = userCredential.user;
            //         console.log(user)

            //         await setDoc(doc(db, "users", `${user.uid}`), {
            //             userID: `${user.uid}`,
            //             firstName: `${data.firstName}`,
            //             lastName: `${data.lastName}`,
            //             email: `${data.email}`,
            //             phoneNumber: `${data.phoneNumber}`,
            //             createdAt: serverTimestamp()
            //         })
            //         verifyUser()
            //         setLoadingState(false)
            //     })
            //     .catch((error) => {
            //         const errorCode = error.code;
            //         const errorMessage = error.message;

            //         console.log(errorCode)
            //         console.log(errorMessage)
            //         // ..
            //         setLoadingState(false)
            //     });
        } else {
            setLoadingState(false)
            toast({
                title: 'Signup failed',
                description: 'User already exists',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top',
            })
        }


    }

    console.log(firstNameError)

    return (

        <Box
            m="0px"
            borderRadius={'2px'}
            w={{ base: "27.93rem", md: "37.93rem" }}
            h="auto"
            bg={'#F9FAFC'}
            border={'1px solid rgba(0, 0, 0, 0.14);'}
            py={'4.5rem'} px={'4.8rem'}>
            <form>
                <Stack >
                    <Box mb="1.6rem">
                        <FormControl isInvalid={!isFirstNameValid} id="first_name" >
                            <FormLabel className={roboto.className}>First Name</FormLabel>

                            <Input value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} onBlur={checkFirstNameValidity} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder='Legal first name' />
                            <FormErrorMessage ><div>{firstNameError}</div></FormErrorMessage>
                        </FormControl>
                    </Box>

                    <Box mb="1.6rem">
                        <FormControl isInvalid={!isLastNameValid} id="last_name" >
                            <FormLabel className={roboto.className}>Last Name</FormLabel>

                            <Input value={lastName}
                                onChange={(e) => setLastName(e.target.value)} onBlur={checkLastNameValidity} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder='Legal last name' />
                            <FormErrorMessage ><div>{lastNameError}</div></FormErrorMessage>
                        </FormControl>
                    </Box>
                    <Box mb="1.6rem" >
                        <FormControl isInvalid={!isEmailValid} id="email" >
                            <FormLabel className={roboto.className}>Email</FormLabel>

                            <Input value={email}
                                onChange={(e) => setEmail(e.target.value)} onBlur={checkEmailValidity} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="email" placeholder='Enter your email' />
                            <FormErrorMessage ><div>{emailError}</div></FormErrorMessage>
                        </FormControl>
                    </Box>
                    <Box mb="1.6rem"  >
                        <FormControl id="phone_number" isInvalid={!isPhoneNumberValid}  >
                            <FormLabel className={roboto.className}>Phone Number</FormLabel>

                            <Input value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value.slice(0, 11))} onBlur={checkPhoneNumberValidity} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="number" placeholder='Enter your active phone number' />
                            <FormErrorMessage ><div>{phoneNumberError}</div></FormErrorMessage>
                        </FormControl>
                    </Box>

                    <Box mb="1.6rem">
                        <FormControl isInvalid={!isTagValid} id="tag" >
                            <FormLabel className={roboto.className}>Tag</FormLabel>
                            <InputGroup h="3.6rem" >
                                <InputLeftAddon h='100%'>
                                    @
                                </InputLeftAddon>

                                <Input

                                    value={tag}
                                    onChange={(e) => setTag(e.target.value)} onBlur={checkTagValidity} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder='set a unique tag' />
                            </InputGroup>
                            <FormErrorMessage ><div>{tagError}</div></FormErrorMessage>
                        </FormControl>
                    </Box>

                    <Box >
                        <FormControl id="location" >
                            <FormLabel className={roboto.className}>Location</FormLabel>

                            <Select value={selectedOption ? selectedOption.state : ''}
                                onChange={handleSelectChange}
                                placeholder="Select State"
                                variant='outline' mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}>
                                {locations?.map((loc, index) => <option key={index} value={loc.state}>{loc.state}</option>)}

                            </Select>

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

                                <Input value={pwd}
                                    onChange={(e) => setPwd(e.target.value)} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}
                                    type={show ? 'text' : 'password'} placeholder='Enter your password' />
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
                        onSubmit={handleSubmit}
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
                            Register
                        </Text>

                    </Button>
                </Stack>
            </form>
        </Box>
    )
}


export default Auth