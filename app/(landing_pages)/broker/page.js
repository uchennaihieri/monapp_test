"use client";
import { collection, addDoc, serverTimestamp, query, getDocs, where } from "firebase/firestore";
// import { db } from "../../../services/firebase";
// import { db } from './firebaseConfig'; // Import your Firebase config

import { Inter, DM_Sans } from "next/font/google";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Features from "@/components/features";
import DataSection from "@/components/dataSection";
import CardSection from "@/components/cardSection";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Center,
  InputGroup,
  Input,
  HStack,
  Stack,
  Button,
  Text,
  InputLeftElement,
  Flex,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  IconButton,
  FormControl,
  FormLabel,
  ButtonGroup,
  Textarea,
  Grid,
  GridItem,
  Image,
  useToast,
} from "@chakra-ui/react";

import FooterSection from "@/components/footerSection";
import BlackSection from "@/components/blackSection";
import PageSeo from "@/Seo/pageSeo";
import NewHero from "@/components/NewHero";

import { BiSearch } from "react-icons/bi";
import OurCommunity from "@/components/OurCommunity";
import EasySteps from "@/components/EasySteps";
import { TbCircleCheckFilled } from "react-icons/tb";
import { db } from "@/services/firebase";
import useIdentityPayKYC from "react-identity-kyc";
import axios from "axios";
import baseURL from "@/services/baseUrl";
import Link from "next/link";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

// const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={"white"}
      >
        {icon}
      </Flex>
      <Button fontWeight={600} variant={"link"} color="white">
        {text}
      </Button>
    </Stack>
  );
};

export default function Workwithus() {
  const [isLoading, setIsloading] = useState(false)
  const [userId, setUserId] = useState('')
  const toast = useToast()
  const router = useRouter()
  function closeAll() {

    toast.closeAll()
  }


  const handleToast = () => {
    closeAll()
    router.push('/auth')
  }

  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",

    },
  });

  const registerBroker = async (data) => {
    // console.log(data);
    setIsloading(true);
    const q = query(collection(db, "users"), where("email", "==", `${data.email}`));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      toast({
        title: 'You are not a registered user',
        description: <Button color='white' variant='link' onClick={handleToast}>Click here to sign up</Button>,
        status: 'error',
        duration: null,
        isClosable: true,
        position: 'top',
      })
      setIsloading(false)
    } else {

      const doc = querySnapshot.docs[0];
      const userId = doc.id
      const userData = doc.data()

      addDoc(collection(db, "broker"), {
        userId: userId,
        brokerVerification: false,
        phoneNumber: `${userData?.countryCode + userData?.phoneNumber}`,
        clients: [],
        brokerCustomerCount: 0,
        subscriptionDate: null,
        createdAt: serverTimestamp(),
      }).then((res) => {
        toast({
          title: 'Registration Successful',
          description: 'Check your email to begin onboarding',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top',
        })
        setIsloading(false)
      });

    }
    setIsloading(false)

  }







  return (
    <>
      <PageSeo
        title="Super fast payments for the next gen - Monapp"
        description=""
      />
      <main bg="#F5F5F5">
        <NewHero>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          // px={'16rem'}
          >
            <Box display={["none", "block"]}>
              <Grid
                mt={{ md: "7rem", "2xl": "10rem" }}
                ml={{ md: "16rem", "2xl": "23rem" }}
                h={{ md: "22.5rem", "2xl": "34.5rem" }}
                w={"auto"}
                gridGap={"4"}
                templateColumns={"repeat(2, 1fr)"}
                templateRows={"repeat(3, 1fr)"}
                templateAreas={`"l1 ."
                            "l1 l2"
                            "l3 l2"
                            `}
              >
                <GridItem area={"l1"}>
                  <Image alt="" src="/l1.png" />
                </GridItem>
                <GridItem area={"l2"}>
                  <Image alt="" src="/l2.png" />
                </GridItem>
                <GridItem area={"l3"}>
                  <Image alt="" src="/l3.png" />
                </GridItem>
              </Grid>
            </Box>

            <Flex
              color="#fff"
              flexDirection={"column"}
              gap={{ base: "1.5rem", "2xl": "3rem" }}
              mt={["5rem", ""]}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize={{ base: "1.14613rem", md: "1.625rem" }}
                className="clashRegular"
              >
                Join the Monapp community
              </Text>

              <Text
                fontSize={{ base: "2.125rem", md: "3.75rem", "2xl": "5rem" }}
                fontWeight={"600"}
                w={{ base: "21.6875rem", md: "47.875rem", "2xl": "65rem" }}
                h={{ base: "8.1875rem", md: "8.0625rem" }}
                textAlign={"center"}
                lineHeight={{ base: "2.625rem", md: "5.28125rem" }}
                letterSpacing={"-0.0625rem"}
                className="clashSemiBold"
              >
                Be a payment broker: work and earn from home{" "}
              </Text>

              <Text
                fontSize={{ md: "1.125rem", "2xl": "1.3rem" }}
                mt={["", "1.5rem"]}
                textAlign="center"
                className={dmsans.className}
                h={{ base: "5.3125rem", md: "5.9375rem" }}
                w={{ base: "22.375rem", md: "36.75rem" }}
                px={"3rem"}
              >
                Empower yourself from home. Be a Monapp payment broker, guide
                users on how to use the app and then Earn while making a
                difference.
              </Text>

              <Button
                variant="solid"
                bgColor={"#fff"}
                mb={["4rem", ""]}
                mt={["1rem", ""]}
                borderRadius={["0.25rem", "0.62144rem"]}
                _hover={{ bg: "#eee", color: "#000" }}
                w={{ base: "7.4375rem", md: "12.5rem" }}
                h={["2.30563rem", "3.875rem"]}
              >
                <Text
                  fontSize={["0.86275rem", "1.45rem"]}
                  color="#000"
                  fontWeight={700}
                  lineHeight="2.71944rem"
                  letterSpacing={"0.00831rem"}
                  className={dmsans.className}
                >
                  Join now
                </Text>
              </Button>

              <Box display={["block", "none"]} mb={"4rem"}>
                <Grid
                  //   bg={'red'}
                  h={"22.5rem"}
                  w={"auto"}
                  px={"1rem"}
                  gridGap={"4"}
                  templateColumns={"repeat(3, 1fr)"}
                  templateRows={"repeat(3, 1fr)"}
                  templateAreas={`"l1 r2 r1"
                            "l1 l2 r1 "
                            "l3 l2 r3"
                            `}
                >
                  <GridItem area={"r1"}>
                    <Image alt="" src="/r1.png" />
                  </GridItem>
                  <GridItem area={"r2"}>
                    <Image alt="" src="/r2.png" />
                  </GridItem>
                  <GridItem area={"r3"}>
                    <Image alt="" src="/mobiler3.png" />
                  </GridItem>
                  <GridItem area={"l1"}>
                    <Image alt="" src="/l1.png" />
                  </GridItem>
                  <GridItem area={"l2"}>
                    <Image alt="" src="/l2.png" />
                  </GridItem>
                  <GridItem area={"l3"}>
                    <Image alt="" src="/l3.png" />
                  </GridItem>
                </Grid>
              </Box>
            </Flex>

            <Box display={["none", "block"]}>
              <Grid
                h={"28rem"}
                mt={{ md: "5rem", "2xl": "0rem" }}
                mr={{ md: "16rem", "2xl": "23rem" }}
                w={"auto"}
                gridGap={"4"}
                templateColumns={"repeat(2, 1fr)"}
                templateRows={"repeat(3, 1fr)"}
                templateAreas={`". r1"
                            "r3 r2 "
                            "r3 ."
                            `}
              >
                <GridItem area={"r1"}>
                  <Image alt="" src="/r1.png" />
                </GridItem>
                <GridItem area={"r2"}>
                  <Image alt="" src="/r2.png" />
                </GridItem>
                <GridItem area={"r3"}>
                  <Image alt="" src="/r3.png" />
                </GridItem>
              </Grid>
            </Box>
          </Box>
        </NewHero>

        <Flex
          mb="5rem"
          color={"#000"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          {/* why monapp */}

          <VStack mt={"6rem"} gap={"2rem"}>
            <Text
              fontSize={{ base: "2rem", md: "3.4375rem" }}
              textAlign={["center", "left"]}
              fontWeight={"600"}
              lineHeight={"2.97894rem"}
              w={"32.625rem"}
              className="clashSemiBold"
            >
              Why Monapp ?
            </Text>
            <Text
              fontSize={{ base: "1.04388rem", md: "1.5rem" }}
              textAlign={"center"}
              fontWeight={"500"}
              w={["24.375rem", "64.125rem"]}
              h={["11.875rem", "8.5625rem"]}
              lineHeight={["1.54406rem", "2.21875rem"]}
              className={dmsans.className}
              px
            >
              Monapp is your accessible payment solution in the complexity of
              modern finance. Our platform streamlines transactions, securing
              every step with innovation. As pioneers in digital payments in
              Nigeria, we&apos;re revolutionizing the landscape, one transaction
              at a time. Embrace simplicity, security, and empowerment with
              Monapp.
            </Text>
          </VStack>

          {/* core values */}

          <Box
            display={["block", "flex"]}
            alignItems={"flex-start"}
            justifyContent={"center"}
            gap={"10rem"}
            mt={["", "12rem"]}
          >
            <VStack
              mt={["3rem", "5rem"]}
              alignItems={["center", "flex-start"]}
              gap={["1rem", "3rem"]}
              mb={["6rem", ""]}
            >
              <Text
                fontSize={{ base: "1.625rem", md: "3.4375rem" }}
                textAlign={["center", "left"]}
                w={["18.3125rem", "32.625rem"]}
                h={["1.875rem", "6.8125rem"]}
                fontWeight={"600"}
                lineHeight={["2.97894rem", "3.66644rem"]}
                className="clashSemiBold"
              >
                Our Core Values
              </Text>
              <Text
                w={["20.0625rem", "35.07425rem"]}
                h={["3.875rem", "6.23544rem"]}
                textAlign={["center", "left"]}
                fontSize={{ base: "1rem", md: "1.51888rem" }}
                color={["#000", "#818C96"]}
                fontWeight={"400"}
                lineHeight={["1.33213rem", "2.23838rem"]}
                className={dmsans.className}
              >
                Our Core values revolve around flexibility, accountability,
                exceptional customer service and Teamwork all these helping to
                serve users better
              </Text>
            </VStack>

            <Flex
              gap={["1.5rem", "3rem"]}
              flexDir={["row", "column"]}
              px={["1rem", ""]}
              overflowX={"auto"}
            >
              <Flex gap={["1.5rem", "3rem"]}>
                <Flex
                  w={["10.94556rem", "17.43494rem"]}
                  h={["10.13694rem", "16.147rem"]}
                  border="1.8px solid rgba(0, 0, 0, 0.20)"
                  borderRadius={"0.67575rem"}
                  flexDirection={"column"}
                  pl={"1rem"}
                  pt={"1rem"}
                  gap={"1rem"}
                >
                  <Flex
                    w={["2.04031rem", "3.25rem"]}
                    h={["2.04031rem", "3.25rem"]}
                    border="1.2px solid"
                    borderRadius={"50%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Image
                      src="/Flexible.svg"
                      width={["1.05938rem", "1.6875rem"]}
                      height={["1.05938rem", "1.6875rem"]}
                      alt="flexible"
                    />
                  </Flex>
                  <Text
                    w={["8.87825rem", "14.142rem"]}
                    h={["0.86969rem", "1.38531rem"]}
                    fontSize={["0.67881rem", "1.08125rem"]}
                    fontWeight={"600"}
                    lineHeight={["0.8485rem", "1.35156rem"]}
                    className="clashSemiBold"
                  >
                    Flexible{" "}
                  </Text>

                  <Text
                    w={["9.18881rem", "14.63669rem"]}
                    h={["2.2485rem", "3.58163rem"]}
                    fontSize={["0.42425rem", "0.67575rem"]}
                    fontWeight={"400"}
                    lineHeight={["0.59394rem", "0.94606rem"]}
                    letterSpacing={["0.00263rem", "-0.00425rem"]}
                    className={dmsans.className}
                  >
                    Adaptable solutions for your changing needs. Monapp&apos;s
                    flexibility ensures financial ease tailored to you
                  </Text>
                </Flex>

                <Flex
                  w={["10.94556rem", "17.43494rem"]}
                  h={["10.13694rem", "16.147rem"]}
                  border="1.8px solid rgba(0, 0, 0, 0.20)"
                  borderRadius={"0.67575rem"}
                  flexDirection={"column"}
                  pl={"1rem"}
                  pt={"1rem"}
                  gap={"1rem"}
                >
                  <Flex
                    w={["2.04031rem", "3.25rem"]}
                    h={["2.04031rem", "3.25rem"]}
                    border="1.2px solid"
                    borderRadius={"50%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Image
                      src="/Accountable.svg"
                      width={["1.05938rem", "1.6875rem"]}
                      height={["1.05938rem", "1.6875rem"]}
                      alt="flexible"
                    />
                  </Flex>
                  <Text
                    w={["8.87825rem", "14.142rem"]}
                    h={["0.86969rem", "1.38531rem"]}
                    fontSize={["0.67881rem", "1.08125rem"]}
                    fontWeight={"600"}
                    lineHeight={["0.8485rem", "1.35156rem"]}
                    className="clashSemiBold"
                  >
                    Accountable{" "}
                  </Text>

                  <Text
                    w={["9.18881rem", "14.63669rem"]}
                    h={["2.2485rem", "3.58163rem"]}
                    fontSize={["0.42425rem", "0.67575rem"]}
                    fontWeight={"400"}
                    lineHeight={["0.59394rem", "0.94606rem"]}
                    letterSpacing={["0.00263rem", "-0.00425rem"]}
                    className={dmsans.className}
                  >
                    Trust is our foundation. We hold ourselves responsible for
                    your secure and transparent transactions.
                  </Text>
                </Flex>
              </Flex>

              <Flex gap={["1.5rem", "3rem"]}>
                <Flex
                  w={["10.94556rem", "17.43494rem"]}
                  h={["10.13694rem", "16.147rem"]}
                  border="1.8px solid rgba(0, 0, 0, 0.20)"
                  borderRadius={"0.67575rem"}
                  flexDirection={"column"}
                  pl={"1rem"}
                  pt={"1rem"}
                  gap={"1rem"}
                >
                  <Flex
                    w={["2.04031rem", "3.25rem"]}
                    h={["2.04031rem", "3.25rem"]}
                    border="1.2px solid"
                    borderRadius={"50%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Image
                      src="/Service.svg"
                      width={["1.05938rem", "1.6875rem"]}
                      height={["1.05938rem", "1.6875rem"]}
                      alt="service"
                    />
                  </Flex>
                  <Text
                    w={["8.87825rem", "14.142rem"]}
                    h={["0.86969rem", "1.38531rem"]}
                    fontSize={["0.67881rem", "1.08125rem"]}
                    fontWeight={"600"}
                    lineHeight={["0.8485rem", "1.35156rem"]}
                    className="clashSemiBold"
                  >
                    Service{" "}
                  </Text>

                  <Text
                    w={["9.18881rem", "14.63669rem"]}
                    h={["2.2485rem", "3.58163rem"]}
                    fontSize={["0.42425rem", "0.67575rem"]}
                    fontWeight={"400"}
                    lineHeight={["0.59394rem", "0.94606rem"]}
                    letterSpacing={["0.00263rem", "-0.00425rem"]}
                    className={dmsans.className}
                  >
                    Your satisfaction drives us. Expect top-tier support and
                    personalized assistance every step of the way.
                  </Text>
                </Flex>

                <Flex
                  w={["10.94556rem", "17.43494rem"]}
                  h={["10.13694rem", "16.147rem"]}
                  border="1.8px solid rgba(0, 0, 0, 0.20)"
                  borderRadius={"0.67575rem"}
                  flexDirection={"column"}
                  pl={"1rem"}
                  pt={"1rem"}
                  gap={"1rem"}
                >
                  <Flex
                    w={["2.04031rem", "3.25rem"]}
                    h={["2.04031rem", "3.25rem"]}
                    border="1.2px solid"
                    borderRadius={"50%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Image
                      src="/Team-work.svg"
                      width={["1.05938rem", "1.6875rem"]}
                      height={["1.05938rem", "1.6875rem"]}
                      alt="team-work"
                    />
                  </Flex>
                  <Text
                    w={["8.87825rem", "14.142rem"]}
                    h={["0.86969rem", "1.38531rem"]}
                    fontSize={["0.67881rem", "1.08125rem"]}
                    fontWeight={"600"}
                    lineHeight={["0.8485rem", "1.35156rem"]}
                    className="clashSemiBold"
                  >
                    Team-work{" "}
                  </Text>

                  <Text
                    w={["9.18881rem", "14.63669rem"]}
                    h={["2.2485rem", "3.58163rem"]}
                    fontSize={["0.42425rem", "0.67575rem"]}
                    fontWeight={"400"}
                    lineHeight={["0.59394rem", "0.94606rem"]}
                    letterSpacing={["0.00263rem", "-0.00425rem"]}
                    className={dmsans.className}
                  >
                    Collaboration powers our success. At Monapp, every
                    individual&apos;s effort harmonizes for your seamless
                    financial experience.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>

          {/* Be a part of what we are building */}
          <Box
            display={["block", "flex"]}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            mt={["10rem", "20rem"]}
            gap={"1.5rem"}
            mb={["6rem", "6rem"]}
            px={["1rem", ""]}
          >
            <Text
              w={["19.0625rem", "57.25rem"]}
              h={["4.8125rem", "3.4375rem"]}
              fontSize={["1.625rem", "3.4375rem"]}
              fontWeight={"600"}
              lineHeight={["1.97894rem", "3.66644rem"]}
              className="clashSemiBold"
            >
              Be a part of what we are building
            </Text>
            <Text
              w={["23.1875rem", "47.0625rem"]}
              h={"3.875rem"}
              textAlign={["left", "center"]}
              fontSize={["1rem", "1.51888rem"]}
              fontWeight={"500"}
              lineHeight={"2.23838rem"}
              letterSpacing={"-0.01rem"}
              className={dmsans.className}
              mb={["6rem", "3rem"]}
            >
              Join us on this journey of shaping the future of finance in
              Nigeria and Africa. At Monapp, we&apos;re not just providing a
              service; we&apos;re redefining the way people send and receive
              money in the continent.
            </Text>

            <Flex
              flexDirection={["column", "row"]}
              gap={["1rem", "6rem"]}
              mt={["4rem", "1.5rem"]}
            >
              <Flex gap={["0.5rem", "1.5rem"]} alignItems={"center"}>
                <Image
                  src="/check-circle.svg"
                  w={["1.41319rem", "2.537rem"]}
                  h={["", "2.537rem"]}
                  alt="check box"
                />
                <Text
                  fontSize={["0.94213rem", "1.69131rem"]}
                  fontWeight={"600"}
                  lineHeight={"200%"}
                  letterSpacing={"-0.08456rem"}
                  className={dmsans.className}
                >
                  One Team
                </Text>
              </Flex>
              <Flex gap={["0.5rem", "1.5rem"]} alignItems={"center"}>
                <Image
                  src="/check-circle.svg"
                  w={["1.41319rem", "2.537rem"]}
                  h={["", "2.537rem"]}
                  alt="check box"
                />
                <Text
                  fontSize={["0.94213rem", "1.69131rem"]}
                  fontWeight={"600"}
                  lineHeight={"200%"}
                  letterSpacing={"-0.08456rem"}
                  className={dmsans.className}
                >
                  In 36 Nigerian States
                </Text>
              </Flex>
              <Flex gap={["0.5rem", "1.5rem"]} alignItems={"center"}>
                <Image
                  src="/check-circle.svg"
                  w={["1.41319rem", "2.537rem"]}
                  h={["", "2.537rem"]}
                  alt="check box"
                />
                <Text
                  fontSize={["0.94213rem", "1.69131rem"]}
                  fontWeight={"600"}
                  lineHeight={"200%"}
                  letterSpacing={"-0.08456rem"}
                  className={dmsans.className}
                >
                  Serving 500+ different languages{" "}
                </Text>
              </Flex>
            </Flex>
          </Box>

          {/* form */}
          <Box
            display={["block", "flex"]}
            justifyContent={"center"}
            px={["1rem", ""]}
          >
            <form ref={form} onSubmit={handleSubmit(registerBroker)}>
              {/* <HStack mb='32px'><IconButton icon={<AiOutlinePicture fontSize={'20px'} />} w='36px' h='36px' isRound /> <Text> Upload New Image</Text></HStack> */}


              <Box mb="21.87px">
                <FormControl id="email" isInvalid={errors.email}>
                  <FormLabel
                    fontSize={["1.25rem", "1.5rem"]}
                    fontWeight={"500"}
                    lineHeight={"200%"}
                    letterSpacing={"0.03rem"}
                    color={"#000"}
                  >
                    Email
                  </FormLabel>
                  <Input
                    h={["3.5rem", "5.5625rem"]}
                    w={["95%", "87.375rem"]}
                    borderRadius={"2px"}
                    bg="#ffffff"
                    border={"1.4px solid #000"}
                    type="email"
                    name="email"
                    {...register("email")}
                  />
                </FormControl>
              </Box>

              <Button
                variant="solid"
                colorScheme="blackAlpha"
                w={["95%", "22.6875rem"]}
                h={["3.375rem", "5.375rem"]}
                mt="3rem"
                bgColor="#000"
                borderRadius={["0.25rem", "10px"]}
                type="submit"
                isLoading={isLoading}
                loadingText='Submitting'
              >
                <Text
                  fontSize={["1.125rem", "16px"]}
                  color="#FFFFFF"
                  fontWeight={500}
                  lineHeight={"2.71944rem"}
                  className={dmsans.className}
                >
                  Submit
                </Text>
              </Button>
            </form>
          </Box>
        </Flex>

        {/* EasySteps */}
        <Center display={["flex", "none"]} mb={"-4rem"} mr="7">
          <EasySteps />
        </Center>

        <OurCommunity />

        <FooterSection />
      </main>
    </>
  );
}
