'use client'
import React, { ReactNode, useEffect, useState } from "react";
import {
  IconButton, Avatar, Box, CloseButton, Flex, HStack, VStack, Icon, useColorModeValue, Link, Drawer, DrawerContent, Text,
  useDisclosure, BoxProps, FlexProps, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Image, InputGroup, InputLeftElement,
  Input, Spacer, Button, Table, Thead, Tr, Th, Tbody, Td, Heading, Divider, useToast,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  PinInputField,
  PinInput,
  Tooltip,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
// import { PiCopyFill } from "react-icons/pi";


import { IconType } from "react-icons";
import { ReactText } from "react";
import { DM_Sans, Rubik } from "next/font/google";
import { BsChevronDown, BsDot, BsInfoCircleFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import MyChart from "@/components/myChart";
import NewDash from "../layout";
import AllTransactions from "@/components/AllTransactions";
import { db, doc, onSnapshot, updateDoc } from "@/services/firebase";
import { getWallet, getCard, getTransactions } from "@/services/request";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { personState } from "@/recoil/atoms";
import { HiOutlineX } from "react-icons/hi";
import CancelIcon from "@/components/Icons/cancelIcon";
import axios from "axios";
import baseURL from "@/services/baseUrl";
const dayjs = require("dayjs");

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });
const dmsansbold = DM_Sans({ weight: "500", subsets: ["latin"] });
const rubik = Rubik({ weight: ["300", "400"], subsets: ["latin"] });

function Dashboard() {

  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [wallet, setWallet] = useState()
  const [card, setCard] = useState()
  const [transactions, setTransactions] = useState([])
  const [pin, setPin] = useState('')
  const [loadingState, setLoadingState] = useState('')
  const [confirmPin, setConfirmPin] = useState('')
  const [bvn, setBvn] = useState("")
  const [broker, setBroker] = useState("false")
  const [brokerNum, setBrokerNum] = useState("")
  const [dOB, setDOB] = useState("")
  const [gender, setGender] = useState("Male")
  const [drawerContent, setDrawerContent] = useState('')
  const d = new Date(Date.now())
  const person = useRecoilValue(personState)

  console.log(person)

  const { lastName, firstName } = person


  console.log(person)

  useEffect(() => {

    checkOnboarding()
    getWallet(setWallet, person);
    getCard(setCard, person);
    getTransactions(setTransactions, person, 3);



  }, [person]);


  const checkOnboarding = () => {

    const unsub = onSnapshot(doc(db, "onboarding", `${person.userID}`), (doc) => {
      const onboardingData = doc.data()


      if (!onboardingData || onboardingData.onboardingStep == 1) {
        setDrawerContent('setPin')
        onOpen()
      } else if (onboardingData.onboardingStep == 2) {
        setDrawerContent('selectBroker')
        onOpen()
      } else if (onboardingData.onboardingStep == 3) {
        setDrawerContent('verifyAccount')
        onOpen()
      }

    });


  }
  const createPin = () => {
    setLoadingState(true)

    if (pin.length === 4) {

      if (pin != confirmPin) {
        setLoadingState(false)
        toast({
          title: 'Pin creation error',
          description: 'Your pin does not match',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top',
        })
      } else {
        axios.post(`${baseURL}/api/pin/create`, {
          pin: pin,
          userId: person.userID
        })
          .then(async function ({ data }) {


            if (data.error == false) {
              await updateDoc(doc(db, "onboarding", `${person.userID}`), {
                onboardingStep: 2
              });

              toast({
                title: 'Pin creation successful',
                description: 'Your pin has been created',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top',
              })
              setLoadingState(false)
            } else {
              setLoadingState(false)
              toast({
                title: 'Pin creation error',
                description: data.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top',
              })
            }
          })
          .catch(function (error) {
            setLoadingState(false)
            toast({
              title: 'Pin creation error',
              description: error.message,
              status: 'error',
              duration: 9000,
              isClosable: true,
              position: 'top',
            })
          })

        // fetch("http://127.0.0.1:5001/monapp-33057/us-central1/app/api/pin/create", {

        //   // Adding method type
        //   method: "POST",
        //   body: JSON.stringify({
        //     pin: pin,
        //     userId: person.userID
        //   })
        // }).then(function (res) {
        //   return res.json();
        // })
        //   // Converting to JSON
        //   .then(function (data) {
        //     console.log(data)

        //     if (data.successful) {
        //       setLoadingState(false)
        //       toast({
        //         title: 'Pin creation successful',
        //         description: 'Your pin has been created',
        //         status: 'success',
        //         duration: 9000,
        //         isClosable: true,
        //         position: 'top',
        //       })
        //     } else {
        //       setLoadingState(false)
        //       toast({
        //         title: 'Pin creation error',
        //         description: data.message,
        //         status: 'error',
        //         duration: 9000,
        //         isClosable: true,
        //         position: 'top',
        //       })
        //     }
        //   })
        //   .catch(function (error) {
        //     setLoadingState(false)
        //     toast({
        //       title: 'Pin creation error',
        //       description: error.message,
        //       status: 'error',
        //       duration: 9000,
        //       isClosable: true,
        //       position: 'top',
        //     })
        //   })
      }

    } else {
      setLoadingState(false)
      toast({
        title: 'Pin creation error',
        description: 'Complete the pin field',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      })
    }


  }



















  const handleSetBroker = () => {
    setLoadingState(true)

    axios.post(`${baseURL}/api/set/broker`, {
      broker: broker,
      userId: person.userID,
      brokerNumber: brokerNum
    })
      .then(async function ({ data }) {


        if (data.error == false) {
          await updateDoc(doc(db, "onboarding", `${person.userID}`), {
            onboardingStep: 3
          });

          toast({
            title: 'Broker added successfully',
            description: 'Your broker has been added',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top',
          })
          setLoadingState(false)
        } else {
          setLoadingState(false)
          toast({
            title: 'Broker error',
            description: data.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top',
          })
        }
      })
      .catch(function (error) {
        setLoadingState(false)

        toast({
          title: 'Broker error',
          description: error.response.data.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top',
        })
      })

  }










  const handleVerifyAccount = () => {
    setLoadingState(true)

    axios.post(`${baseURL}/api/anchor/tier_two/verify-customer`, {
      customerId: person.anchor_customerId,
      dateOfBirth: dOB,
      gender: gender,
      bvn: bvn
    })
      .then(async function ({ data }) {


        if (data.error == false) {
          await updateDoc(doc(db, "onboarding", `${person.userID}`), {
            onboardingStep: "completed"
          });

          toast({
            title: 'Onboarding Completed',
            description: 'You have completed the onboarding steps',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top',
          })
          onClose()
          setLoadingState(false)
        } else {
          setLoadingState(false)
          toast({
            title: 'Verification error',
            description: data.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top',
          })
        }
      })
      .catch(function (error) {
        setLoadingState(false)

        toast({
          title: 'Verification error',
          description: error.response.data.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top',
        })
      })

  }





























  const handleTopupwallet = () => {
    setDrawerContent('topupwallet')
    onOpen()
  }

  const handleReceivePayment = () => {
    setDrawerContent('receivePayment')
    onOpen()
  }


  const handleDeliverCard = () => {
    setDrawerContent('deliverCard')
    onOpen()
  }

  const handleSettlementAccount = () => {
    setDrawerContent('settlementAccount')
    onOpen()
  }

  const handleSuccess = () => {
    setDrawerContent('successView')

  }


  const handleBrokerChange = (value) => {
    setBroker(value);
    if (value === 'false') {
      setBrokerNum(''); // Reset brokerNum to empty when broker is false
    }
  };


  return (


    <div >
      <HStack ml={["0", "6rem"]} flexWrap={["wrap", "nowrap"]} >
        <Box mr={["0", "10px"]} w={"100%"} m={"auto"}>
          <VStack >
            {/* current balance card */}
            <Box
              h={"144px"}
              w={["100%", "60rem"]}
              m={"auto"}
              mb="15px"
              bg={[`url(/Maskbg.png)`]}
              backgroundColor="#000000"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundPosition="50% 25%"
              borderRadius={"8px"}
              boxShadow="0px 14px 54px rgba(0, 0, 0, 0.03)"
              position="relative"
              overflow={"hidden"}
            >
              <Box mt="22px" ml={["20px", "40px"]}>
                <Text
                  className={dmsans.className}
                  fontSize="18px"
                  color={"#FFFFFF"}
                  fontStyle="normal"
                  fontWeight={400}
                >
                  Current Balance
                </Text>
                <HStack mt="16px" flex>
                  <Text
                    className={dmsans.className}
                    fontSize={["26px", "32px"]}
                    color="rgba(255, 255, 255, 1)"
                    fontWeight={800}
                    lineHeight="38px"
                    letterSpacing={"-0.006em"}
                  >
                    NGN {wallet?.balance}
                  </Text>
                </HStack>
                <HStack mt="4px" align={"center"} spacing="11px">
                  {" "}
                  <HStack spacing="2px" align={"center"}>
                    {" "}
                    <Image w="18px" h="18px" src={"/upArrow.svg"} alt='increase' />{" "}
                    <Text
                      color="#2CC16B"
                      fontSize="14px"
                      className={dmsans.className}
                      fontWeight={400}
                    >
                      +24%
                    </Text>{" "}
                  </HStack>
                  <Text
                    className={dmsans.className}
                    fontSize="14px"
                    color="white"
                  >
                    {dayjs(d).format("dddd, MMMM D, YYYY")}
                  </Text>
                </HStack>
              </Box>
              {/* <Image
                  src={"/prints.png"}
                  width={"334px"}
                  height={"329px"}
                  position="absolute"
                  left="-55"
                  top="-20"
                />
                <Image
                  src={"/coinBar.png"}
                  width={"201px"}
                  height={"182.71px"}
                  position="absolute"
                  left="487"
                  top="0"
                />
                <Image
                  src={"/ropeBar.png"}
                  width={"41px"}
                  height={"41px"}
                  position="absolute"
                  left="369"
                  bottom="3"
                />
                <Image
                  src={"/dotBar.svg"}
                  width={"24px"}
                  height={"26px"}
                  position="absolute"
                  left="424"
                  top="11"
                /> */}
            </Box>

            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
              size={'lg'}
              closeOnOverlayClick={false}
            >
              <DrawerOverlay />

              {drawerContent == 'setPin' && <DrawerContent
                px='48px' pt='61px'
              >

                <DrawerHeader mb='52px'><Flex flexDirection='row' align='center' justify='space-between'>
                  <Text className={dmsans.className} fontSize='30px' fontWeight={700}>Create Transaction Pin </Text>

                </Flex></DrawerHeader>

                <DrawerBody><Box mb="1.6rem">
                  <Text mb={'11px'}>Pin</Text>
                  <HStack>
                    <PinInput size='lg' mask otp onChange={(e) => setPin(e)}>
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>


                </Box>

                  <Box mb="1.6rem">

                    <Text mt={'20px'} mb={'11px'}>Confirm Pin</Text>
                    <InputGroup>
                      <HStack>
                        <PinInput size='lg' mask otp onChange={(e) => setConfirmPin(e)}>
                          <PinInputField />
                          <PinInputField />
                          <PinInputField />
                          <PinInputField />
                        </PinInput>
                      </HStack>
                    </InputGroup>
                  </Box>





                  <Button isLoading={loadingState}
                    loadingText='Creating..' variant='solid' colorScheme='blackAlpha' w={'100%'} mt={'71px'} h='54px' borderRadius={'2px'} bg='rgba(0, 0, 0, 1)' ><Text className={dmsans.className} fontSize={'16px'} color='#FFFFFF' fontWeight={700} lineHeight='21px' onClick={createPin} >Create My Pin</Text></Button>


                </DrawerBody>
              </DrawerContent>}





              {drawerContent == 'selectBroker' && <DrawerContent
                px='48px' pt='61px'
              >

                <DrawerHeader mb='52px'><Flex flexDirection='row' align='center' justify='space-between'>
                  <Text className={dmsans.className} fontSize='30px' fontWeight={700}>Set Broker</Text>

                </Flex></DrawerHeader>

                <DrawerBody>
                  <Box mb="1.6rem">
                    <FormControl id="email" >


                      <FormLabel className={dmsans.className}>Do you have a broker?</FormLabel>
                      <RadioGroup onChange={(e) => handleBrokerChange(e)} value={broker} mb='1rem'>
                        <Stack direction='row'>
                          <Radio value='false'>No</Radio>
                          <Radio value='true'>Yes</Radio>
                        </Stack>
                      </RadioGroup>
                      {
                        broker == 'true' &&
                        <Input
                          value={brokerNum}
                          onChange={(e) => setBrokerNum(e.target.value)} h="3.6rem" borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} type="tel" maxLength={11} placeholder="What is your broker's number?" />




                      }



                    </FormControl>
                  </Box>

                  <Button isLoading={loadingState}
                    loadingText='Creating..' variant='solid' colorScheme='blackAlpha' w={'100%'} mt={'71px'} h='54px' borderRadius={'2px'} bg='rgba(0, 0, 0, 1)' ><Text className={dmsans.className} fontSize={'16px'} color='#FFFFFF' fontWeight={700} lineHeight='21px' onClick={handleSetBroker} >Set My Broker</Text></Button>


                </DrawerBody>
              </DrawerContent>}













              {drawerContent == 'verifyAccount' && <DrawerContent
                px='48px' pt='61px'
              >

                <DrawerHeader mb='52px'><Flex flexDirection='row' align='center' justify='space-between'>
                  <Text className={dmsans.className} fontSize='30px' fontWeight={700}>Verify Account</Text>

                </Flex></DrawerHeader>

                <DrawerBody>
                  <Box mb="1.6rem">
                    <FormControl id="email" >


                      <FormLabel className={dmsans.className}>What is your gender?</FormLabel>
                      <RadioGroup onChange={setGender} value={gender} mb='1rem'>
                        <Stack direction='row'>
                          <Radio value='Male'>Male</Radio>
                          <Radio value='Female'>Female</Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                  </Box>




                  <Box >
                    <FormControl id="email" >
                      <FormLabel className={dmsans.className}>BVN</FormLabel>

                      <Input
                        type="text"
                        value={bvn}
                        onChange={(e) => setBvn(e.target.value)} mb="1.6rem" h="3.6rem" maxLength={11} borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'} placeholder='BVN number for verification' />


                    </FormControl>
                  </Box>


                  <Box>
                    <FormControl id="email" >
                      <FormLabel className={dmsans.className}>Date of Birth</FormLabel>
                      <Input
                        mb="1.6rem"
                        h="3.6rem"
                        borderRadius={'0.125rem'} bg="#ffffff" border={'1px solid #D5D6D6'}
                        placeholder="Select Date and Time"
                        value={dOB}
                        onChange={(e) => setDOB(e.target.value)}
                        type="date"
                      />
                    </FormControl>
                  </Box>

                  <Button isLoading={loadingState}
                    loadingText='Creating..' variant='solid' colorScheme='blackAlpha' w={'100%'} mt={'71px'} h='54px' borderRadius={'2px'} bg='rgba(0, 0, 0, 1)' ><Text className={dmsans.className} fontSize={'16px'} color='#FFFFFF' fontWeight={700} lineHeight='21px' onClick={handleVerifyAccount} >Verify My Account</Text></Button>


                </DrawerBody>
              </DrawerContent>}















              {drawerContent == 'receivePayment' && <DrawerContent
                px='48px' pt='61px'
              >

                <DrawerHeader mb='52px'><Flex flexDirection='row' align='center' justify='space-between'>
                  <Text className={dmsans.className} fontSize='30px' fontWeight={700}>Receive Payment</Text>
                  <CancelIcon boxSize='16px' onClick={onClose} _hover={{
                    cursor: 'pointer'
                  }} />
                </Flex></DrawerHeader>

                <DrawerBody>
                  <Text mb={'11px'}>QR Code</Text>
                  <Box px='38px' py='16px' h='300px' w='100%' border='1px solid #CDCDCD' borderRadius='4px'>
                    <Image src={card?.qrImage} width='100%' height='100%' />

                  </Box>
                  <Text mt={'12px'} mb={'11px'}>Payment Link</Text>
                  <Flex justify='space-between' align='center' px='14px' w='100%' h='54px' border='1px solid #CDCDCD' borderRadius='4px'>
                    <Text color='#444' fontSize='14px'>{card?.tag}.monapp.ng</Text>
                    <Button w='36.5px' h='14.6px' leftIcon={PiCopyFill}>copy</Button>
                  </Flex>



                </DrawerBody>
              </DrawerContent>}





























              {drawerContent == 'topupwallet' && <DrawerContent
                px='48px' pt='61px'
              >

                <DrawerHeader mb='52px'><Flex flexDirection='row' align='center' justify='space-between'>
                  <Text className={dmsans.className} fontSize='30px' fontWeight={700}>Top Up Wallet</Text>
                  <CancelIcon boxSize='16px' onClick={onClose} _hover={{
                    cursor: 'pointer'
                  }} />
                </Flex></DrawerHeader>

                <DrawerBody>
                  <Text mb={'11px'}>Pin</Text>
                  <HStack>
                    <PinInput size='lg' mask otp onChange={(e) => setPin(e)}>
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                  <Text mt={'12px'} mb={'11px'}>Confirm Pin</Text>
                  <InputGroup>
                    <HStack>
                      <PinInput size='lg' mask otp onChange={(e) => setConfirmPin(e)}>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                      </PinInput>
                    </HStack>
                  </InputGroup>
                  <Button isLoading={loadingState}
                    loadingText='Creating..' variant='solid' colorScheme='blackAlpha' w={'100%'} mt={'71px'} h='54px' borderRadius={'2px'} bg='rgba(0, 0, 0, 1)' ><Text className={dmsans.className} fontSize={'16px'} color='#FFFFFF' fontWeight={700} lineHeight='21px' onClick={createPin} >Create My Pin</Text></Button>


                </DrawerBody>
              </DrawerContent>}


























              {drawerContent == 'settlementAccount' && <DrawerContent
                px='48px' pt='61px'
              >

                <DrawerHeader mb='52px'><Flex flexDirection='row' align='center' justify='space-between'>
                  <Text className={dmsans.className} fontSize='30px' fontWeight={700}>Top Up Wallet</Text>
                  <CancelIcon boxSize='16px' onClick={onClose} _hover={{
                    cursor: 'pointer'
                  }} />
                </Flex></DrawerHeader>

                <DrawerBody>
                  <Text mb={'11px'}>Pin</Text>
                  <HStack>
                    <PinInput size='lg' mask otp onChange={(e) => setPin(e)}>
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                  <Text mt={'12px'} mb={'11px'}>Confirm Pin</Text>
                  <InputGroup>
                    <HStack>
                      <PinInput size='lg' mask otp onChange={(e) => setConfirmPin(e)}>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                      </PinInput>
                    </HStack>
                  </InputGroup>
                  <Button isLoading={loadingState}
                    loadingText='Creating..' variant='solid' colorScheme='blackAlpha' w={'100%'} mt={'71px'} h='54px' borderRadius={'2px'} bg='rgba(0, 0, 0, 1)' ><Text className={dmsans.className} fontSize={'16px'} color='#FFFFFF' fontWeight={700} lineHeight='21px' onClick={createPin} >Create My Pin</Text></Button>


                </DrawerBody>
              </DrawerContent>}



































            </Drawer>

            {/* responsive quickcards */}
            <Box
              h={"144px"}
              // w={["23rem", "28rem"]}
              w={"100%"}
              borderRadius={"8px"}
              mt={["15px", "0px"]}
              mb="15px"
              bg="rgba(255, 255, 255, 0.4)"
              border="1px solid rgba(0, 0, 0, 0.2)"
              py="14px"
              px="18px"
              display={["block", "none"]}
            >
              <Text
                color="#141736"
                fontSize="16px"
                className={dmsansbold.className}
                fontWeight={500}
                lineHeight="19px"
                mb="17px"
              >
                Quick Links
              </Text>

              <Flex justify={"space-between"}>
                <Box align={"center"} >
                  <Flex
                    _hover={{ cursor: "pointer", bg: "#F5F5F5" }}
                    width={"54px"}
                    height={"54px"}
                    borderRadius="100%"
                    justify={"center"}
                    align={"center"}
                    border={"1px solid rgba(0, 0, 0, 0.24)"}
                    mb="8px"
                  >
                    <Image
                      src={"/fundAcc.svg"}
                      width={"24px"}
                      height={"24px"}
                      alt="fund svg"
                    />
                  </Flex>
                  <Text fontSize={"10px"}>Top up Wallet</Text>
                </Box>

                <Box align={"center"}>
                  <Flex
                    _hover={{ cursor: "pointer", bg: "#F5F5F5" }}
                    width={"54px"}
                    height={"54px"}
                    borderRadius="100%"
                    justify={"center"}
                    align={"center"}
                    border={"1px solid rgba(0, 0, 0, 0.24)"}
                    mb="8px"
                  >
                    <Image
                      src={"/settle.svg"}
                      width={"24px"}
                      height={"24px"}
                      alt="settle svg"
                    />
                  </Flex>
                  <Text fontSize={"10px"}>Add Settlement</Text>
                </Box>

                <Box align={"center"}>
                  <Flex
                    _hover={{ cursor: "pointer", bg: "#F5F5F5" }}
                    width={"54px"}
                    height={"54px"}
                    borderRadius="100%"
                    justify={"center"}
                    align={"center"}
                    border={"1px solid rgba(0, 0, 0, 0.24)"}
                    mb="8px"
                  >
                    <Image
                      src={"/collect.svg"}
                      width={"24px"}
                      height={"24px"}
                      alt="collect svg"
                    />
                  </Flex>
                  <Text fontSize={"10px"}>Receive Payment</Text>
                </Box>
              </Flex>
            </Box>
            {/* the graph area */}
            <Box
              h={["240px", "393px"]}
              // w={["23rem","60rem"]}
              w={"100%"}
              bg="#FFFFFF"
              borderRadius={"8px"}
              boxShadow="0px 14px 54px rgba(0, 0, 0, 0.03)"
              p="32px"
            >
              <HStack>
                <Text
                  color="#141736"
                  fontSize="20px"
                  className={dmsansbold.className}
                  fontWeight={500}
                  lineHeight="19px"
                >
                  Activity
                </Text>
                <Spacer />

                <Menu>
                  <MenuButton
                    as={Button}
                    colorScheme="gray"
                    variant="outline"
                    rightIcon={<BsChevronDown />}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                    color="#A5B3CD"
                  >
                    This week
                  </MenuButton>
                  <MenuList
                    bg={useColorModeValue("white", "gray.900")}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                  >
                    <MenuItem>Sunday</MenuItem>

                    <MenuItem>Monday</MenuItem>

                    <MenuItem>Tuesday</MenuItem>

                    <MenuItem>Wednesday</MenuItem>

                    <MenuItem>Thursday</MenuItem>

                    <MenuItem>Friday</MenuItem>

                    <MenuItem>Saturday</MenuItem>
                  </MenuList>
                </Menu>
              </HStack>

              <MyChart />
            </Box>
          </VStack>
        </Box>
        <Box w={"100%"} m={"auto"}>
          <VStack>
            {/* quick links area */}
            <Box
              h={"144px"}
              // w={["23rem", "28rem"]}
              w={"100%"}
              borderRadius={"8px"}
              mt={["15px", "0px"]}
              mb="15px"
              bg="rgba(255, 255, 255, 0.4)"
              border="1px solid rgba(0, 0, 0, 0.2)"
              py="14px"
              px="18px"
              display={["none", "block"]}
            >
              <Text
                color="#141736"
                fontSize="16px"
                className={dmsansbold.className}
                fontWeight={500}
                lineHeight="19px"
                mb="17px"
              >
                Quick Links
              </Text>

              <Flex justify={"space-between"}>
                <Box align={"center"} ref={btnRef} onClick={handleTopupwallet}>
                  <Flex
                    _hover={{ cursor: "pointer", bg: "#F5F5F5" }}
                    width={"54px"}
                    height={"54px"}
                    borderRadius="100%"
                    justify={"center"}
                    align={"center"}
                    border={"1px solid rgba(0, 0, 0, 0.24)"}
                    mb="8px"
                  >
                    <Image
                      src={"/fundAcc.svg"}
                      width={"24px"}
                      height={"24px"}
                      alt="fund svg"
                    />
                  </Flex>
                  <Text fontSize={"10px"}>Top up Wallet</Text>
                </Box>

                <Box align={"center"} ref={btnRef} onClick={handleSettlementAccount}>
                  <Flex
                    _hover={{ cursor: "pointer", bg: "#F5F5F5" }}
                    width={"54px"}
                    height={"54px"}
                    borderRadius="100%"
                    justify={"center"}
                    align={"center"}
                    border={"1px solid rgba(0, 0, 0, 0.24)"}
                    mb="8px"
                  >
                    <Image
                      src={"/settle.svg"}
                      width={"24px"}
                      height={"24px"}
                      alt="settle svg"
                    />
                  </Flex>
                  <Text fontSize={"10px"}>Add Settlement</Text>
                </Box>

                <Box align={"center"} ref={btnRef} onClick={handleReceivePayment}>
                  <Flex
                    _hover={{ cursor: "pointer", bg: "#F5F5F5" }}
                    width={"54px"}
                    height={"54px"}
                    borderRadius="100%"
                    justify={"center"}
                    align={"center"}
                    border={"1px solid rgba(0, 0, 0, 0.24)"}
                    mb="8px"
                  >
                    <Image
                      src={"/collect.svg"}
                      width={"24px"}
                      height={"24px"}
                      alt="svg"
                    />
                  </Flex>
                  <Text fontSize={"10px"}>Receive Payment</Text>
                </Box>
              </Flex>
            </Box>
            {/* cards area */}
            <Box
              h={"393px"}
              w={"100%"}
              // w={["20rem","28rem"]}
              // mx="auto"
              borderRadius={"8px"}
              bg="#FFFFFF"
              align={"center"}
              p="18px"
            >
              <Text
                color="#141736"
                fontSize="16px"
                className={dmsansbold.className}
                fontWeight={500}
                lineHeight="19px"
                textAlign={"left"}
                mb="18px"
              >
                My Cards
              </Text>
              <Box
                h="161px"
                w="284.12px"
                borderRadius={"5.12px"}
                bg="linear-gradient(to bottom, #000000 0, #000000 72.80%, #191919 72.80%, #191919 86.52%, #000000 86.52%, #000000 100%)"
                pt="9.87px"
                pb="9.74px"
                pl="11.39px"
                pr="11.26px"
              >
                <Flex justify={"space-between"} align="center">
                  <Image
                    src={"/cardLogoImage.png"}
                    width={"43.84px"}
                    height={"auto"}
                    alt="card logo"
                  />
                  <Text
                    fontSize={"5.55345px"}
                    lineHeight="4px"
                    letterSpacing="-0.174251px"
                    className={rubik.className}
                    color="white"
                    fontWeight={400}
                  >
                    cards@monapp.ng
                  </Text>
                </Flex>
                <Flex
                  flexDirection={"column"}
                  align="center"
                  justify="center"
                  mt="28.05px"
                >
                  <Text
                    className={rubik.className}
                    color="white"
                    fontSize={"16.51px"}
                    letterSpacing="0.517008px"
                    lineHeight="12px"
                    mb="7.7px"
                    fontWeight={400}
                  >
                    {" "}
                    {firstName} {lastName}
                  </Text>
                  <Text
                    className={rubik.className}
                    color="white"
                    fontSize={"10px"}
                    letterSpacing="0.409298px"
                    lineHeight="10px"
                    fontWeight={400}
                  >
                    @{card?.tag}
                  </Text>
                  <Text
                    className={rubik.className}
                    color="white"
                    fontSize={"5.36156px"}
                    letterSpacing="0.409298px"
                    lineHeight="7px"
                    fontWeight={300}
                    width="175.46px"
                    textAlign={"center"}
                    mt="22.17px"
                  >
                    This card is issued by Monapp and may be used by the
                    holder in accordance to the Monapp terms and conditions
                  </Text>
                </Flex>

                <Flex justify={"space-between"} align="center" mt="34.43px">
                  <Text
                    fontSize={"5.55345px"}
                    lineHeight="4px"
                    letterSpacing="-0.174251px"
                    className={rubik.className}
                    color="white"
                    fontWeight={400}
                  >
                    Monapp Authentication card{" "}
                  </Text>
                  <Text
                    fontSize={"5.55345px"}
                    lineHeight="4px"
                    letterSpacing="-0.174251px"
                    className={rubik.className}
                    color="white"
                    fontWeight={400}
                  >
                    www.monapp.ng
                  </Text>
                </Flex>
              </Box>

              <Flex
                _hover={{ cursor: "pointer" }}
                direction={"row"}
                justify="center"
                width={"100%"}
                h="42px"
                bg="#FCFCFC"
                border="1px dashed rgba(0, 0, 0, 0.4)"
                borderRadius={"1.46px"}
                color="white"
                mt="18px"
                align="center"
              >
                <Icon color="white" boxSize={9}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25V9.75H3.75V8.25H8.25Z"
                      fill="#828282"
                    />
                  </svg>
                </Icon>
                <Text
                  fontSize={"13.13px"}
                  lineHeight="16.92px"
                  className={dmsans.className}
                  color={"#828282"}
                  fontStyle="normal"
                  fontWeight={400}
                >
                  Create new card{" "}
                </Text>
              </Flex>

              <Flex
                _hover={{ cursor: "pointer" }}
                direction={"row"}
                justify="space-between"
                width={"100%"}
                h="42px"
                bg="#000000"
                borderRadius={"1.46px"}
                color="white"
                mt="18px"
                pl="14px"
                pr="11px"
                align="center"
              >
                <Text
                  fontSize={"13.13px"}
                  lineHeight="16.92px"
                  className={dmsans.className}
                  color={"#F2F2F2"}
                  fontStyle="normal"
                  fontWeight={400}
                >
                  Deliver my card{" "}
                </Text>
                <Icon color="white" boxSize={10}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4764 9.16658L9.00637 4.69657L10.1849 3.51807L16.6667 9.99992L10.1849 16.4817L9.00637 15.3032L13.4764 10.8332H3.33337V9.16658H13.4764Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                </Icon>
              </Flex>
            </Box>
          </VStack>

          <VStack></VStack>
        </Box>
      </HStack>

      <Box ml={{ base: 0, md: "8rem" }} mt="18px" px="10px">
        <Flex dir="row" justify={"space-between"} align="center">
          <Text
            color="#141736"
            fontSize={["16px", "20px"]}
            className={dmsans.className}
            fontWeight={400}
            lineHeight="19px"
          >
            Transaction History
          </Text>
          <Button
            colorScheme="gray"
            variant="outline"
            rightIcon={<BsChevronDown />}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
            color="#A5B3CD"
          >
            All Transactions
          </Button>
        </Flex>

        {
          (transactions === undefined || transactions.length == 0) ?
            // the array is undefined and has no elements
            (

              <Flex flexDirection='column' justify={'center'} align={'center'}>

                <Text
                  color="#141736"
                  fontSize={["16px", "20px"]}
                  className={dmsans.className}
                  fontWeight={400}
                  lineHeight="19px"
                  textAlign="center"
                >No Transaction</Text>
              </Flex>

            )
            :
            <>

              <Box dropShadow="lg" w="100%" h="221px" my="26px">
                <Flex flexDir="column">
                  <Flex overflow="auto">
                    <Table
                      variant="simple"
                      bg="#FFFFFF"
                      boxShadow={"0px 14px 54px rgba(0, 0, 0, 0.03);"}
                      borderRadius={"8px"}
                    >
                      <Thead h="60px" bg="rgba(0, 0, 0, 0.04)" display={['none', 'table-head']}>
                        <Tr color="gray">
                          <Th w="104px">S/N</Th>
                          <Th w="257px">Name</Th>
                          <Th w="167px">Reference No</Th>
                          <Th w="174px">Amount</Th>
                          <Th w="180px">Date</Th>
                          <Th>Status</Th>
                        </Tr>
                      </Thead>
                      <Tbody
                        fontSize="14px"
                        className={dmsans.className}
                        fontWeight={400}
                      >


                        {
                          transactions?.map((transaction, index) => {

                            return (
                              <AllTransactions
                                key={index}
                                SN={index + 1}
                                amount={transaction?.amount}
                                Date={dayjs(transaction?.createdAt).format("DD, MMMM  YYYY")}
                                sendername={transaction?.sendername}
                                status={transaction?.transactionStatus}
                                transactiontype={transaction?.transactiontype}
                                transactionId={transaction?.id.toUpperCase()}
                                transactionType={transaction?.transactionType}
                              />
                            )
                          }
                          )}



                      </Tbody >
                    </Table >
                  </Flex >
                </Flex >
              </Box >
            </>
        }
      </Box >
    </div >

  );
}

// export const getServerSideProps = withAuthUserTokenSSR({
//   whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
// })(async ({ AuthUser }) => {
//   // Optionally, get other props.
//   const token = await AuthUser.getIdToken(true);

//   const UID = AuthUser.id;
//   const response = await fetch(
//     `${baseURL}/api/user/${UID}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: token,
//       },
//     }
//   );
//   const data = await response.json();

//   if (!data.verified) {
//     return {
//       redirect: {
//         destination: "/verifyUser",
//         permanent: false,
//       },
//     };
//   }

//   if (data.verified == "submitted") {
//     return {
//       redirect: {
//         destination: "/confirmOtp",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       person: data,
//     },
//   };
// });

export default Dashboard;