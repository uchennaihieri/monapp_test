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
    Switch,
    Select,
    useBoolean,
    ScaleFade,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    ModalFooter,
    CheckboxGroup,
    RadioGroup,
    Radio,
    FormHelperText,
    useToast,
    InputLeftAddon,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil'
import { Bree_Serif, DM_Sans, Roboto_Slab } from "next/font/google";
import { Suspense, useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { businessCat, businessReg, bvnN, myLocation, pinID, seller, sellerType, myCity, myAddress, myPostalCode } from '@/recoil/atoms';
import { useForm } from "react-hook-form";
import { auth, createUserWithEmailAndPassword, db, deleteDoc, doc, deleteUser, serverTimestamp, setDoc, signInWithEmailAndPassword } from '@/services/firebase';
import { reauthenticateWithCredential } from 'firebase/auth';
import { addDoc, collection, getDocs, query, updateDoc, where } from 'firebase/firestore';
import baseURL from '@/services/baseUrl';
import Loading from '../../../components/loading';


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



const business = ["Electric lighting, Power", "Water, waterworks, and Supplies", "Bakery (food, pastries)", "Bar/local brew", "Food café/restaurant", "food catering", "Prepared foods", "Tortillas, ethnic bread", "Bricks", "Public Sector - Level 1", "Public Sector - Level 2", "Craft", "Knitting", "Shoes", "Mats", "Sewing/tailoring", "Soft drinks production", "Weaving", "Agriculture (grows crops/produce for sale)", "Grows mushrooms, etc.", "Dairy", "Fishing", "Livestock (various)", "Poultry", "Beekeeping", "Trees, Nursery", "Banking, Financial services", "Others", "School loan", "Private Sector - Level 1", "Private Sector - Level 2", "Manufacturing & Food Processing", "Agriculture & Forestry", "Mining & Quarry", "Trade & Commerce", "Transport & Communication", "Real Estate & Construction", "Rent/Housing", "Consumer/Personal", "Health", "Education", "Tourism & Hospitality", "Purchase of Shares", "Others (Specify)", "Alcoholic Beverages, Cigarettes, Matches", "Auto/bicycle parts", "Books, magazines, newspapers", "Charcoal/firewood", "Clothing, accessories (incl. shoes)", "Construction materials", "Cosmetics (incl. perfume)", "Crafts, souvenirs", "Drugs/Pharmacy", "Electronics (includes mobile phones)", "Flowers/plants", "Food products (groceries, dairy)", "Furniture", "Gas for cooking, heating", "Grains/legumes (incl. corn, rice)", "Household cleaning products", "Hygiene products", "Jewelry", "Kitchen, tableware", "Meat/butcher", "Office Supplies", "Oil", "Produce (fruits, vegetables, produce)", "Rugs", "Seafood/fish/salty fish", "Seeds", "Sleeping mats/blankets", "Snacks (snacks, candy, gum)", "Soft drinks", "Textiles (bed linens, towels, fabric)", "Tools, equipment, hardware", "Toys", "Video", "Telephone/Mobile Phone sales", "Auto repair", "Babysitter", "Barber shop/hair salon", "Beauty salon", "Book Keeper", "Bus/taxi driver", "Carpenter", "Construction laborer", "Electrician", "Fixes shoes", "Gas station", "Hauler/driver/cart pusher", "Health care", "Hotel/resthouse", "House-maid", "Cyber / Internet café", "Landlord", "Manager/supervisor", "Mechanic", "Welder", "Dentist", "Computer services", "Photographic Studio", "Business Services", "Air Transport", "Travel Agencies", "Postal or Courier Services"]

const VerifyUser = ({ person }) => {
    const router = useRouter()
    const user = auth.currentUser;
    const [loadingState, setLoadingState] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [pwd, setPwd] = useState('')
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)





    const goSupport = () => {
        router.push('/support')
    }


    const deleteMe = () => {
        setLoadingState(true)
        deleteDoc(doc(db, "users", `${person.id}`))
            .then(() => {
                deleteUser(user).then(() => {
                    setLoadingState(false)
                    router.push('/auth?task=signup')
                }).catch((error) => {
                    setLoadingState(false)
                    if (error.code = "auth/requires-recent-login") {
                        onOpen()
                    }

                    console.log({ error })
                });
            })
            ;


    }

    const reAuth = () => {



        signInWithEmailAndPassword(auth, person.email, pwd).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });

    }





    return (
        <Flex
            flexDirection={'column'}
            minH={'100vh'}
            align={'center'}
            bg={'#FFFFFF'}>
            <Flex
                mt={{ base: '1.5rem', md: "2.875rem" }}
                width={{ base: '90%', md: "87.5rem" }}
                flexDir={'row'}
                justify="space-between"
                mb={{ base: '3.5rem', md: '10.6rem' }}
            >

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader >Hello {person?.firstName}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text className={roboto.className} my="2rem">It&#39;s been a while you logged in, Please reauthenticate and try again</Text>

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
                                            type={show ? 'text' : 'password'} placeholder='Enter your password' onChange={e => setPwd(e.target.value)} />
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


                        </ModalBody>

                        <ModalFooter>
                            <Button variant='ghost' onClick={reAuth}>Submit</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <Button leftIcon={<AiOutlineLeft />} m="0" p="0" variant={'ghost'} _hover={{
                    backgroundColor: 'none'
                }} color={'#000000'} fontSize={{ base: '1rem', md: "1.44rem" }}
                    fontWeight={400}
                    lineHeight={'4rem'}
                    className={bree.className}
                    isLoading={loadingState}
                    loadingText='Please wait..'
                    onClick={deleteMe}
                >Restart Registration</Button>

                <Button onClick={goSupport} m="0" p="0" variant={'ghost'} _hover={{
                    backgroundColor: 'none'
                }} color={'#000000'} fontSize={{ base: '0.75rem', md: "1rem" }}
                    fontWeight={500}
                    className={dmsansBold.className}
                >Support</Button>
            </Flex>
            <Box mb={{ base: '2.75rem', md: "5.06rem" }}>
                <Image src={'/footerlogo.png'} alt='' w={'14.17rem'} h={'3.06rem'} />
            </Box>

            <Box m="0" mb="2.92rem" p="0">
                <Verify person={person} />
            </Box>

        </Flex>
    );
}


export const Verify = ({ person }) => {
    const toast = useToast()
    const router = useRouter()
    const [tokenPin, setTokenPin] = useRecoilState(pinID);
    const [verificationNumber, setVerificationNumber] = useRecoilState(bvnN);
    const [loadingState, setLoadingState] = useState(false);
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [merchant, setMerchant] = useBoolean(true)
    const [banks, setBanks] = useState(null)
    const [location, setLocation] = useRecoilState(myLocation)
    const [tag, setTag] = useState('')
    const [city, setCity] = useRecoilState(myCity)
    const [address, setAddress] = useRecoilState(myAddress)
    const [postalCode, setPostalCode] = useRecoilState(myPostalCode)
    const [merchantName, setMerchantName] = useRecoilState(seller)
    const [myBusiness, setMyBusiness] = useRecoilState(businessCat)
    const [merchantType, setMerchantType] = useState('1')
    const [merch, setMerch] = useRecoilState(sellerType)
    const [regNum, setRegNum] = useRecoilState(businessReg)
    const [account, setAccount] = useState('')
    const [myBank, setMyBank] = useState("")
    const [bvn, setBvn] = useState("")
    const [broker, setBroker] = useState("")
    const [errorFetchedChecker, setErrorFetchedChecker] = useState(false);
    const [betaCode, setBetaCode] = useState('')
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const selectedObject = locations.find((option) => option.state === selectedValue);
        setSelectedOption(selectedObject);
        setCity(selectedObject.city)
        setAddress(selectedObject.address)
        setPostalCode(selectedObject.postalCode)
        setLocation(selectedObject.state)
    };



    const verifyUser = async () => {
        setLoadingState(true)
        const q = query(collection(db, "cards"), where("tag", "==", `${tag}`));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {

            await fetch(`${baseURL}/api/anchor/create-customer`, {

                // Adding method type
                method: "POST",

                // Adding body or contents to send
                body: JSON.stringify({
                    "firstName": person.firstName,
                    "lastName": person.lastName,
                    "email": person.email,
                    "city": city,
                    "state": location,
                    "address_one": address,
                    "postalCode": postalCode,
                    "phoneNumber": person.phoneNumber
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

                    await updateDoc(doc(db, "users", `${person.userID}`), {
                        state: location,
                        city: city,
                        address: address,
                        postalCode: postalCode,
                        verified: 'submitted',
                        anchor_verification_status: res.data.verification_status,
                        anchor_customerId: res.data.customerId,
                        anchor_customerType: res.data.customerType,
                        anchor_customerStatus: res.data.customerStatus,
                        anchor_createdDate: res.data.createdAt
                    }).then(async () => {
                        const wallet = await addDoc(collection(db, "wallet"), {
                            monappAccountNumber: person.phoneNumber.substring(1),
                            user: person.userID,
                            balance: 0,
                            createdAt: serverTimestamp()
                        })

                        addDoc(collection(db, "cards"), {
                            tag: tag,
                            user: person.userID,
                            walletID: wallet.id,
                            createdAt: serverTimestamp()
                        });

                    }).catch((error) => {
                        setLoadingState(false)
                        console.log({ error })
                    });


                    await fetch(`${baseURL}/api/verifyBvn`, {

                        // Adding method type
                        method: "POST",

                        // Adding body or contents to send
                        body: JSON.stringify({
                            "phoneNumber": person.phoneNumber
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
            })

        } else {
            setLoadingState(false)
            toast({
                title: 'Cannot proceed',
                description: 'Tag already exists',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top',
            })
        }
    }




    return (

        <Box
            m="0px"
            borderRadius={'2px'}
            w={{ base: "27.93rem", md: "37.93rem" }}
            h="100%"
            bg={'#F9FAFC'}
            border={'1px solid rgba(0, 0, 0, 0.14);'}
            py={'4.5rem'} px={'4.8rem'}>
            <Stack >
                <Box >
                    <FormControl id="email" >
                        <FormLabel className={roboto.className}>Select State</FormLabel>

                        <Select value={selectedOption ? selectedOption.state : ''}
                            onChange={handleSelectChange}
                            placeholder="Select an option"
                            variant='outline' mb="1.6rem" h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}>
                            {locations?.map((loc, index) => <option key={index} value={loc.state}>{loc.state}</option>)}

                        </Select>

                    </FormControl>
                </Box>

                <Box >
                    <FormControl id="email" >
                        <FormLabel className={roboto.className}>tag</FormLabel>
                        <InputGroup h="3.6rem" mb="1.6rem">
                            <InputLeftAddon h='100%'>
                                @
                            </InputLeftAddon>

                            <Input
                                value={tag}
                                onChange={(e) => setTag(e.target.value)} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="text" placeholder='set a unique tag' />
                        </InputGroup>

                    </FormControl>
                </Box>

                <Button
                    type='submit'
                    isLoading={loadingState}
                    loadingText='Please wait..'
                    onClick={verifyUser}
                    borderRadius={'0.125rem'}
                    h="4rem"
                    bg={'#000000'}
                    color={'white'}
                    _hover={{
                        bg: 'black.400',
                    }}>
                    <Text
                        fontSize="1.5rem" className={roboto.className} >
                        Proceed
                    </Text>

                </Button>
            </Stack>

        </Box>

    );
}









export default VerifyUser


