'use client'
import { Box, Center, Heading, Image, Link } from '@chakra-ui/react';
import {
    Button,
    FormControl,
    Flex,
    Input,
    useToast,
    Stack,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { businessCat, businessReg, bvnN, myAddress, myPostalCode, myCity, myLocation, pinID, seller, sellerType, countDown } from '@/recoil/atoms';
import QRCode from 'qrcode'
import { addDoc, collection, doc, getDocs, limit, onSnapshot, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { db } from '@/services/firebase';
import { useRouter } from 'next/router';
import CountdownTimer from '@/components/countDownTimer';
import baseURL from '@/services/baseUrl';

function ConfirmOtp({ person }) {

    const AuthUser = useAuthUser()
    const router = useRouter()
    const { register, handleSubmit } = useForm();
    const [src, setSrc] = useState('')
    const [srcUrl, setSrcUrl] = useState('')
    const [loadingState, setLoadingState] = useState(false);
    const [location, setLocation] = useRecoilState(myLocation)
    const [city, setCity] = useRecoilState(myCity)
    const [address, setAddress] = useRecoilState(myAddress)
    const [postalCode, setPostalCode] = useRecoilState(myPostalCode)
    const [merchantName, setMerchantName] = useRecoilState(seller)
    const [myBusiness, setMyBusiness] = useRecoilState(businessCat)
    const [merch, setMerch] = useRecoilState(sellerType)
    const [regNum, setRegNum] = useRecoilState(businessReg)
    const [wallet, setWallet] = useState(null)
    const [card, setCard] = useState(null)
    const [personalBalance, setPersonalBalance] = useState(0);
    const [merchantBalance, setMerchantBalance] = useState(0);
    const [tokenPin, setTokenPin] = useRecoilState(pinID);
    const [otp, setOtp] = useState('')
    const [verificationNumber, setVerificationNumber] = useRecoilState(bvnN);
    const toast = useToast()
    const initialTargetTime = +new Date() + 3 * 60 * 1000;
    const [targetTime, setTargetTime] = useState(initialTargetTime);
    const [isCountdownFinished, setIsCountdownFinished] = useRecoilState(countDown);


    const handleRestart = () => {
        verifyUser()
        setTargetTime(+new Date() + 3 * 60 * 1000);
        setIsCountdownFinished(false); // Reset the countdown status
    };


    console.log(isCountdownFinished)

    useEffect(() => {


        getWallet()
        getCard()

    }, [])


    const getWallet = async () => {
        const walletQuery = query(
            collection(db, "wallet"),
            where("user", "==", person.userID),
            orderBy("createdAt", "desc"),
            limit(1)
        );
        const unsubscribe = onSnapshot(walletQuery, (querySnapshot) => {
            const myWallet = [];
            querySnapshot.forEach((doc) => {
                myWallet.push({ id: doc.id, ...doc.data() });
            });


            setWallet(myWallet[0]);
        });
    }

    console.log(wallet)

    const getCard = () => {
        const cardQuery = query(
            collection(db, "cards"),
            where("user", "==", person.userID),
            orderBy("createdAt", "desc"),
            limit(1)
        );

        const unsubscribe = onSnapshot(cardQuery, (querySnapshot) => {
            const myCard = [];
            querySnapshot.forEach((doc) => {
                myCard.push({ id: doc.id, ...doc.data() });
            });


            setCard(myCard[0]);
        });

    }

    console.log(card)

    const qrData = `${card?.tag + '/' + process.env.NEXT_PUBLIC_QR_KEY + '/' + card?.createdAt}`

    // const setQR = () => {
    //     setQrData()
    //     console.log(qrData)
    // }



    const url = `${baseURL}/api/verifyOtp`;
    var info = {
        "pinId": tokenPin,
        "pin": otp
    }

    const storage = getStorage();
    const storageRef = ref(storage, `${AuthUser.id}`);


    const submitOtp = () => {
        setLoadingState(true)
        fetch(url, {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function (response) {
            return response.json();
        })
            .then(async function (res) {
                console.log(res)

                if (res.verified == true) {


                    await QRCode.toDataURL(qrData, { errorCorrectionLevel: 'M' }).then(async (val) => {
                        await uploadString(storageRef, `${val}`, 'data_url').then((snapshot) => {
                            getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                                await updateDoc(doc(db, "cards", `${card.id}`), {
                                    qrImage: `${downloadURL}`
                                });
                            });
                        })

                        await setDoc(doc(db, "onboarding", `${person.userID}`), {
                            onboardingStep: 1
                        });

                        await updateDoc(doc(db, "users", `${person.userID}`), {
                            verified: true,
                        });


                        router.push('/Dashboard')

                    }).catch((error) => {
                        console.log({ error })
                    })


                    // await fetch('http://127.0.0.1:5001/monapp-33057/us-central1/app/api/anchor/subaccount/create', {

                    //     // Adding method type
                    //     method: "POST",

                    //     // Adding body or contents to send
                    //     body: JSON.stringify({
                    //         "customerId": person.anchor_customerId
                    //     }),

                    //     // Adding headers to the request
                    //     headers: {
                    //         "Content-type": "application/json; charset=UTF-8"
                    //     }
                    // }).then(function (response) {
                    //     return response.json();
                    // })


                    //     // Converting to JSON
                    //     .then(async function (res) {

                    //         console.log(res)
                    //         await updateDoc(doc(db, "wallet", `${wallet.id}`), {
                    //             anchor_subAccountId: res.data.data.subAccountId,
                    //             anchor_customerId: res.data.data.customerId,
                    //             anchor_subAccountType: res.data.data.subAccountType,
                    //             anchor_createdDate: res.data.data.createdAt
                    //         });





                    //     }).catch((error) => {
                    //         console.log({ error })
                    //     })
                } else if (res.verified == 'Expired') {
                    setLoadingState(false)
                    toast({
                        title: 'Verification failed',
                        description: 'OTP expired. Please resend code',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        position: 'top',
                    })
                }

                setLoadingState(false)
            })
            .catch(function (error) {

                setLoadingState(false)
                console.log({ error });
            })

    }



    const verifyUser = async () => {


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
            .then(function (data) {

                setTokenPin(data.pinId)
                setVerificationNumber(data.to)

            })
            .catch(function (error) {

                console.log(error);
            })


    }



    return (
        <Flex
            flexDirection='column'
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={`#ffffff`}>
            <Box mb={{ base: '2.75rem', md: "5.06rem" }}>
                <Image src={'/footerlogo.png'} w={'14.17rem'} h={'3.06rem'} />
            </Box>

            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={14}
                my={10}>
                <Center>
                    <Heading align="center" lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Verify your Phone Number
                    </Heading>
                </Center>
                <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    We have sent a code to your phone number
                </Center>
                <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    fontWeight="bold"
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    {'******' + person.phoneNumber.substring(7)}
                </Center>
                <FormControl>
                    <Center>
                        <HStack>
                            <PinInput otp onChange={(e) => setOtp(e)}>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </Center>
                </FormControl>
                <Stack
                    mt="2rem"
                    direction={{ base: 'row' }}
                    align={'center'}
                    justify={'left'}>
                    <Button variant="link" color={'#000000'} onClick={handleRestart} isDisabled={!isCountdownFinished}>Resend link</Button>

                    <CountdownTimer targetTime={targetTime} />
                </Stack>

                <Stack spacing={6}>
                    <Button
                        mt={'1rem'}
                        h={'4em'}
                        onClick={submitOtp}
                        isLoading={loadingState}
                        loadingText='Please wait..'
                        borderRadius={'0.125rem'}
                        bg={'#000000'}
                        color={'white'}
                        _hover={{
                            bg: 'black.400',
                        }}>
                        Verify
                    </Button>
                </Stack>
            </Stack>

        </Flex>
    );
}





export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
    // Optionally, get other props.
    const token = await AuthUser.getIdToken(true)
    const UID = AuthUser.id
    const response = await fetch(`${baseURL}/api/user/${UID}`, {
        method: 'GET',
        headers: {
            Authorization: token,
        },
    })
    const data = await response.json()


    if (!data.verified) {
        return {
            redirect: {
                destination: '/verifyUser',
                permanent: false,
            },
        }
    }

    if (data.verified == true) {
        return {
            redirect: {
                destination: '/Dashboard',
                permanent: false,
            },
        }
    }


    return {
        props: {
            person: data,
        },
    }
})

export default withAuthUser()(ConfirmOtp)