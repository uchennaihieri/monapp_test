
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
import { auth, createUserWithEmailAndPassword, db, doc, getDownloadURL, ref, serverTimestamp, setDoc, signInWithEmailAndPassword, storage } from '@/services/firebase';
import PageSeo from '@/Seo/pageSeo';
import { collection, getDocs, query, where } from 'firebase/firestore';
import baseURL from '@/services/baseUrl';
import { pinID } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';
import { signIn } from 'next-auth/react';
import { AsYouType, getCountries, getCountryCallingCode, isValidPhoneNumber, validatePhoneNumberLength } from 'libphonenumber-js'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Signin } from '@/components/signIn';
import axios from 'axios';
import { locations } from './selectData';

const roboto = Roboto_Slab({ weight: '400', subsets: ['latin'] })


const countryList = getCountries()







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
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [tag, setTag] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [selectedOption, setSelectedOption] = useState(true);
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
    const [isTagValid, setIsTagValid] = useState(true);
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const [tagError, setTagError] = useState('')
    const [countryCode, setCountryCode] = useState('+234')
    const [country, setCountry] = useState('NG')
    const [flag, setFlag] = useState(`http://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg`)







    const schema = yup.object().shape({
        firstName: yup
            .string()
            .min(2, 'Name should be at least two characters long')
            .required('First Name is required'),
        lastName: yup
            .string()
            .min(2, 'Name should be at least two characters long')
            .required('Last Name is required'),
        email: yup
            .string()
            .email('Please use a correct email format')
            .required('Email is required')
            .test('unique-email', 'Email already in use', async (value) => {
                // Perform an asynchronous check in your database to confirm that the email is not already used
                // Return true if the email is unique, or false if it's already in use
                const isUnique = await checkEmailUniqueness(value);
                return isUnique;
            }),
        phoneNumber: yup
            .string()
            .test('is-valid-number', 'Invalid phone number', (value) => {
                const VN = isValidPhoneNumber(value, country);
                const VL = validatePhoneNumberLength(value, country);
                return VN === true && VL === undefined;
            })
            .required('Phone Number is required')
            .test('unique-phone-number', 'Phone number already in use', async (value) => {
                // Perform an asynchronous check in your database to confirm that the phone number is not already used
                // Return true if the phone number is unique, or false if it's already in use
                const isUnique = await checkPhoneNumberUniqueness(value);
                return isUnique;
            }),
        tag: yup
            .string()
            .min(2, 'Tag should have at least two characters')
            .required('Tag is required')
            .test('unique-tag', 'Tag already in use', async (value) => {
                // Perform an asynchronous check in your database to confirm that the tag is not already used
                // Return true if the tag is unique, or false if it's already in use
                const isUnique = await checkTagUniqueness(value);
                return isUnique;
            }),
        location: yup.string().required('Location is required'),
        password: yup
            .string()
            .required('Password is required')
            .min(6, 'Password should be at least 6 characters long')
            .matches(/^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, 'Password must contain a mix of letters and other characters'),
    });


    const checkEmailUniqueness = async (email) => {


        try {
            const response = await axios.get(`${baseURL}/api/anchor/customers/get/{email}`, {
                params: {
                    email: email
                }
            });

            if (response.status === true) {
                return false;
            }


            if (response.status === false) {
                return true;
            }

        } catch (error) {
            // Handle errors, e.g., network issues or server errors
            console.error(error);
        }
    };

    const checkPhoneNumberUniqueness = async (phoneNumber) => {

        try {
            const response = await axios.get(`${baseURL}/api/anchor/customers/get/{phoneNumber}`, {
                params: {
                    phoneNumber: phoneNumber
                }
            });

            if (response.status === true) {
                return false;
            }


            if (response.status === false) {
                return true;
            }

        } catch (error) {
            // Handle errors, e.g., network issues or server errors
            console.error(error);
        }
    };

    const checkTagUniqueness = async (tag) => {
        // Implement database check for tag uniqueness and return true if unique, false if not.

        const q = query(collection(db, "cards"), where("tag", "==", `${tag}`));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return true;
        } else {
            return false;

        }
    };


    const defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        tag: '',
        location: '',
        password: ''
    };

    const { handleSubmit, formState, control, setValue, watch, trigger } = useForm({
        resolver: yupResolver(schema),
        defaultValues
    });



    // useEffect(() => {
    //     const watchFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'tag', 'location', 'password'];

    //     watchFields.forEach((field) => {
    //         watch(field, () => {
    //             trigger(field);
    //         });
    //     });
    // }, [watch, trigger]);

    const toast = useToast()
    const verifyUser = () => {
        router.push('/verifyUser')
    }









    const onSubmit = async () => {
        setLoadingState(true)
        console.log(phoneNumber)
        const q = query(collection(db, "users"), where("phoneNumber", "==", `${phoneNumber}`));


        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {


            await fetch(`${baseURL}/api/user/register`, {

                method: "POST",

                body: JSON.stringify({

                    "firstName": firstName.toLowerCase(),
                    "lastName": lastName.toLowerCase(),
                    "email": email,
                    "password": password,
                    "tag": tag,
                    "phoneNumber": phoneNumber,
                    "country": country,
                    "city": city,
                    "state": location,
                    "address": address,
                    "postalCode": postalCode,
                    "countryCode": countryCode
                }),

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

                    signIn('credentials', {
                        email, password, redirect: false
                    })

                    await fetch(`${baseURL}/api/verifyBvn`, {

                        method: "POST",

                        body: JSON.stringify({
                            "phoneNumber": phoneNumber
                        }),

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

    const watchCountry = watch('country');


    const numbe = new AsYouType('NG').input(phoneNumber)
    console.log(numbe)
    console.log(firstNameError)

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    m="0px"
                    borderRadius={'2px'}
                    w={{ base: "27.93rem", md: "37.93rem" }}
                    h="auto"
                    bg={'#F9FAFC'}
                    border={'1px solid rgba(0, 0, 0, 0.14);'}
                    py={'4.5rem'} px={'4.8rem'}>

                    <Stack >
                        <Box mb="1.6rem">
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <FormControl isInvalid={!!formState.errors.firstName} >
                                            <FormLabel className={roboto.className}>First Name</FormLabel>
                                            <Input {...field} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder="First name"
                                                onBlur={() => trigger('firstName')}
                                            />

                                            <FormErrorMessage >{formState.errors.firstName && formState.errors.firstName.message}</FormErrorMessage>
                                        </FormControl>
                                    </>
                                )}
                            />
                        </Box>

                        <Box mb="1.6rem">
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <FormControl isInvalid={!!formState.errors.lastName}>
                                            <FormLabel className={roboto.className}>Last Name</FormLabel>
                                            <Input {...field} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder="Lastname" onBlur={() => trigger('lastName')} />
                                            <FormErrorMessage>{formState.errors.lastName && formState.errors.lastName.message}</FormErrorMessage>
                                        </FormControl>
                                    </>
                                )}
                            />
                        </Box>
                        <Box mb="1.6rem" >
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <FormControl isInvalid={!!formState.errors.email}>
                                            <FormLabel className={roboto.className}>Email</FormLabel>
                                            <Input {...field} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="email" placeholder='Enter your email' onBlur={() => trigger('email')} />
                                            <FormErrorMessage>{formState.errors.email && formState.errors.email.message}</FormErrorMessage>
                                        </FormControl>
                                    </>
                                )}
                            />
                        </Box>
                        <Box mb="1.6rem"  >
                            <Controller
                                name="phoneNumber"
                                control={control}
                                render={({ field }) => (

                                    <>
                                        <FormControl isInvalid={!!formState.errors.phoneNumber}>
                                            <FormLabel className={roboto.className}>Phone Number</FormLabel>
                                            <Flex>
                                                <Menu>
                                                    <MenuButton w="120px" as={Button} rightIcon={<ChevronDownIcon color="black" />} h="3.6rem" borderRadius={'0.125rem'} bg="#F9FAFC" border={'1px solid #D5D6D6'}>
                                                        <Flex justify="space-between" align="center">
                                                            <Box>
                                                                <Text mr="5px">{country}</Text>
                                                            </Box>
                                                            <Image h="20px" alt="" src={flag} />
                                                        </Flex>
                                                    </MenuButton>
                                                    <MenuList maxH="200px" minWidth="100px" overflowY="auto">
                                                        {countryList.map((country) =>
                                                            <MenuItem key={country} onClick={() => {
                                                                setCountry(country);
                                                                setFlag(`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`);
                                                            }} _hover={{
                                                                bg: 'gray'
                                                            }}>
                                                                <Box w="25px">
                                                                    <Text> {country} </Text>
                                                                </Box>
                                                                <Image h="20px" alt="United States" src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`} />
                                                            </MenuItem>
                                                        )}
                                                    </MenuList>
                                                </Menu>
                                                <Input {...field} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} placeholder="Enter your active phone number" type="tel" onBlur={() => trigger('phoneNumber')} />
                                            </Flex>
                                            <FormErrorMessage>{formState.errors.phoneNumber && formState.errors.phoneNumber.message}</FormErrorMessage>
                                        </FormControl>
                                    </>
                                )}
                            />
                        </Box>



                        <Box mb="1.6rem">
                            <Controller
                                name="tag"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <FormControl isInvalid={!!formState.errors.tag}>
                                            <FormLabel className={roboto.className}>Tag</FormLabel>
                                            <InputGroup h="3.6rem">
                                                <InputLeftAddon h='100%' bg="#F9FAFC">@</InputLeftAddon>
                                                <Input {...field} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder='Set a unique tag' onBlur={() => trigger('tag')} />
                                            </InputGroup>
                                            <FormErrorMessage>{formState.errors.tag && formState.errors.tag.message}</FormErrorMessage>
                                        </FormControl>
                                    </>
                                )}
                            />
                        </Box>

                        <Box mb="1.6rem">
                            <Controller
                                name="location"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <FormControl isInvalid={!!formState.errors.location}>
                                            <FormLabel className={roboto.className}>Location</FormLabel>
                                            <Select {...field} placeholder="Select State" variant="outline" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}>
                                                {locations?.map((loc, index) => <option key={index} value={loc.state}>{loc.state}</option>)}
                                            </Select>
                                            <FormErrorMessage>{formState.errors.location && formState.errors.location.message}</FormErrorMessage>
                                        </FormControl>
                                    </>
                                )}
                            />

                        </Box>


                        <Box mb="2.6rem" >


                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <FormControl isInvalid={!!formState.errors.password}>
                                            <FormLabel className={roboto.className}>Password</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement h="100%" pointerEvents='none'> <Icon>
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
                                                </Icon></InputLeftElement>
                                                <Input {...field} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type={show ? 'text' : 'password'} placeholder='Enter your password' onBlur={() => trigger('password')} />
                                                <InputRightElement h="100%" mx="1rem">
                                                    {show ?
                                                        <Icon _hover={{ cursor: 'pointer' }} as={RiEyeFill} fontSize="1.5rem" color="#9A9C9D" onClick={handleClick} /> :
                                                        <Icon _hover={{ cursor: 'pointer' }} as={RiEyeCloseFill} fontSize="1.5rem" color="#9A9C9D" onClick={handleClick} />
                                                    }
                                                </InputRightElement>
                                            </InputGroup>
                                            <FormErrorMessage>{formState.errors.password && formState.errors.password.message}</FormErrorMessage>
                                        </FormControl>
                                    </>
                                )}
                            />



                        </Box>

                        <Button
                            type='submit'
                            isDisabled={!email || !password || !phoneNumber || !tag || !firstName || !lastName || !location}
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

                </Box>
            </form>
            <DevTool control={control} />
        </>
    )
}