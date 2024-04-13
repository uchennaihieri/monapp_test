'use client'
import { Center, Heading } from '@chakra-ui/react';
import {
    Button,
    FormControl,
    useToast,
    Stack,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { businessCat, businessReg, bvnN, myAddress, myPostalCode, myCity, myLocation, pinID, seller, sellerType, countDown, personState } from '@/recoil/atoms';
import { useRouter } from 'next/navigation';
import CountdownTimer from '@/components/countDownTimer';
import baseURL from '@/services/baseUrl';

function ConfirmOtp() {

  


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
    const person = useRecoilValue(personState)



    const handleRestart = () => {
        verifyUser()
        setTargetTime(+new Date() + 3 * 60 * 1000);
        setIsCountdownFinished(false); // Reset the countdown status
    };






    const url = `${baseURL}/api/verifyOtp`;
    var info = {
        "pinId": tokenPin,
        "pin": otp
    }



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

                if (res.verified == true) {

                    router.push('/Dashboard')

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
        <>

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
                    {'******' + person.phoneNumber?.substring(7)}
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

        </>
    );
}




export default ConfirmOtp

ConfirmOtp.requireAuth = true