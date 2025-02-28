"use client";
import Head from "next/head";
// import Image from 'next/image'

import { Inter, DM_Sans } from "next/font/google";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Features from "@/components/features";
import DataSection from "@/components/dataSection";
import CardSection from "@/components/cardSection";

import {
  Box,
  Center,
  InputGroup,
  Input,
  HStack,
  Button,
  Image,
  Icon,
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
  useToast,
} from "@chakra-ui/react";

import FooterSection from "@/components/footerSection";
import BlackSection from "@/components/blackSection";
import PageSeo from "@/Seo/pageSeo";
import NewHero from "@/components/NewHero";

import { BiSearch, BiSolidPieChartAlt2 } from "react-icons/bi";
import OurCommunity from "@/components/OurCommunity";
import EasySteps from "@/components/EasySteps";
import {useRef, useState} from "react";
import { IoPricetag, IoRocket } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const inter = Inter({ subsets: ["latin"] });
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });


export default function Support() {

  const validation = yup.object().shape({
    firstName : yup.string().required(),
    lastName : yup.string().required(),
    email : yup.string().email().required(),
    phone : yup.number().positive().integer().required(),
    message : yup.string().required(),

  })

  const [isLoading, setIsloading] = useState(false)
  const form = useRef();
    const toast = useToast()
    const { register, handleSubmit, formState:{errors, isDirty}} = useForm({
      resolver: yupResolver(validation),
      defaultValues: {firstName:'', lastName:'', email:'', phone:'', message:''}
    });



  

   const sendEmail = (e) => {
    // e.preventDefault();
    setIsloading(true)
    // console.log(process.env.SERVICE_ID);

    emailjs.sendForm('service_ucssj5r', 'template_lotz6v4', form.current, 'RvARWQZO-5TWkEZ_9')
      .then((result) => {
          console.log(result.text);
          toast({
                title: 'Message sent',
                description: 'Your message has been sent',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top',
              })
          setIsloading(false)
      }, (error) => {
          console.log(error.text);
           toast({
          title: 'Sending error',
          description: 'your message fails, please try again',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top',
        })
          setIsloading(false)
      });
  };




  return (
    <>
      <PageSeo
        title="Super fast payments for the next gen - Monapp"
        description=""
      />
      <main bg="#F5F5F5">
        <NewHero>
          <Center
            color="#fff"
            flexDirection={"column"}
            gap={{ base: "1rem", md: "1.5rem", "2xl": "3rem" }}
            justifyContent={"center"}
          >
            <Text
              fontSize={{ base: "1.14613rem", md: "1.625rem" }}
              mt={{ base: "3rem", md: "12rem", "2xl": "9rem" }}
              className="clashRegular"
            >
              What do you want to know about Monapp
            </Text>

            <Text
              fontSize={{ base: "2.125rem", md: "3.75rem", "2xl": "5rem" }}
              fontWeight={"600"}
              w={{ base: "18.1875rem", md: "59.25rem", "2xl": "70rem" }}
              h={{ base: "5.4375rem", md: "5.0625rem" }}
              textAlign={"center"}
              lineHeight={{ base: "2.625rem", md: "5.28125rem" }}
              letterSpacing={"-0.0625rem"}
              className="clashSemiBold"
            >
              How can we help you today ?
            </Text>

            <Text
              fontSize={{ md: "1.125rem", "2xl": "1.3rem" }}
              mt="1rem"
              textAlign="center"
              className={dmsans.className}
              h={{ base: "5.3125rem", md: "5.9375rem" }}
              w={{ base: "22.375rem", md: "36.75rem" }}
            >
              Our dedicated support team is here to provide expert assistance
              and answers. We want to make your Monapp experience remarkable!
            </Text>

            <Flex
              mt="2rem"
              mb={["6rem", "0"]}
              justifyContent={"center"}
              alignItems={"center"}
              ml={["", "3rem"]}
              flexDir={{ base: "column", md: "row" }}
              gap={"1.5rem"}
            >
              <InputGroup>
                <InputLeftElement
                  __css={{ p: "8px", mt: "1.48rem" }}
                  display={["none", "block"]}
                >
                  <BiSearch size="1.5rem" color="white.400" />
                </InputLeftElement>

                <Input
                  h={{ base: "3.3125rem", md: "5.0625rem" }}
                  w={{ base: "24.3125rem", md: "46.625rem" }}
                  fontSize={["0.98325rem", "1.5rem"]}
                  borderRadius={["0.25rem", "12px"]}
                  fontWeight={400}
                  lineHeight={"1.65625rem"}
                  border={"1.4px solid #fff"}
                  type="text"
                  placeholder="write a question or problem"
                />
              </InputGroup>
              {/* <Box >
                   
                    <Input h="5.0625rem" w='46.625rem'  borderRadius={'12px'}    border={'1.4px solid #fff'} type='text' placeholder='write a question or problem'  />              
                    </Box> */}

              <Button
                variant="solid"
                bgColor={"#fff"}
                borderRadius={["0.25rem", "9px"]}
                _hover={{ bg: "#eee", color: "#000" }}
                w={{ base: "24.3125rem", md: "15rem" }}
                h={["3.375rem", "5.0625rem"]}
              >
                <Text
                  fontSize={["1.125rem", "1.45rem"]}
                  color="#000"
                  fontWeight={700}
                  lineHeight="2.71944rem"
                  letterSpacing={"0.00831rem"}
                  className={dmsans.className}
                >
                  Search
                </Text>
              </Button>
            </Flex>
          </Center>
        </NewHero>

        <Box
          ml={{ base: "2rem", md: "15rem", "2xl": "30rem" }}
          mb="5rem"
          color={"#000"}
        >
          <Flex overflowX={"auto"}>
            <HStack mt={"3rem"} gap={["4", "10"]}>
              <Flex
                direction={"column"}
                w={["9.35425rem", "19.1875rem"]}
                h={["5.69788rem", "11.6875rem"]}
                justifyContent="center"
                bgColor={"#fff"}
                borderRadius={["0.975px ", "12px"]}
                alignItems="center"
                border="1.2px solid rgba(0, 0, 0, 0.20)"
                _hover={{ border: "2px #000 solid" }}
                gap={["0.5", "5"]}
                boxShadow="0px 8px 64px 0px rgba(167, 167, 167,0.24)"
              >
                <Box
                  w={["2.22431rem", " 4.5625rem"]}
                  h={["2.22431rem", " 4.5625rem"]}
                  borderRadius="50%"
                  border="0.5px rgba(0, 0, 0, 0.50) solid"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/* <Image src='/gettingstarted.png' width={['1.0665rem','2.1875rem']} height={['1.0665rem','2.1875rem']} /> */}

                  <Icon
                    as={IoRocket}
                    h={["1.0665rem", "2.1875rem"]}
                    w={["2.84975rem", "2.1875rem"]}
                  />
                </Box>

                <Text
                  fontSize={["0.79219rem", "1.625rem"]}
                  lineHeight={["0.85319rem", "1.75rem"]}
                  className="clashMedium"
                  fontWeight={"500"}
                >
                  Getting Started
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                w={["9.35425rem", "19.1875rem"]}
                h={["5.69788rem", "11.6875rem"]}
                justifyContent="center"
                bgColor={"#fff"}
                borderRadius={["0.975px ", "12px"]}
                alignItems="center"
                border="1.2px solid rgba(0, 0, 0, 0.20)"
                _hover={{ border: "2px #000 solid" }}
                gap={["0.5", "5"]}
                boxShadow="0px 8px 64px 0px rgba(167, 167, 167,0.24)"
              >
                <Box
                  w={["2.22431rem", " 4.5625rem"]}
                  h={["2.22431rem", " 4.5625rem"]}
                  borderRadius="50%"
                  border="0.5px rgba(0, 0, 0, 0.50) solid"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/* <Image src='/pricingPlan.png'  width={['1.0665rem','2.1875rem']} height={['1.0665rem','2.1875rem']} /> */}
                  <Icon
                    as={IoPricetag}
                    h={["1.0665rem", "2.1875rem"]}
                    w={["2.84975rem", "2.1875rem"]}
                  />
                </Box>

                <Text
                  fontSize={["0.79219rem", "1.625rem"]}
                  className="clashMedium"
                  lineHeight={["0.85319rem", "1.75rem"]}
                  fontWeight={"500"}
                >
                  Pricing and Plan
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                w={["9.35425rem", "19.1875rem"]}
                h={["5.69788rem", "11.6875rem"]}
                justifyContent="center"
                bgColor={"#fff"}
                borderRadius={["0.975px ", "12px"]}
                alignItems="center"
                border="1.2px solid rgba(0, 0, 0, 0.20)"
                _hover={{ border: "2px #000 solid" }}
                gap={["0.5", "5"]}
                boxShadow="0px 8px 64px 0px rgba(167, 167, 167,0.24)"
              >
                <Box
                  w={["2.22431rem", " 4.5625rem"]}
                  h={["2.22431rem", " 4.5625rem"]}
                  borderRadius="50%"
                  border="0.5px rgba(0, 0, 0, 0.50) solid"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/* <Image src='/saleQuestions.png'  width={['1.0665rem','2.1875rem']} height={['1.0665rem','2.1875rem']}  /> */}
                  <Icon
                    as={FaHandshake}
                    h={["1.0665rem", "2.1875rem"]}
                    w={["2.84975rem", "2.1875rem"]}
                  />
                </Box>

                <Text
                  fontSize={["0.79219rem", "1.625rem"]}
                  className="clashMedium"
                  lineHeight={["0.85319rem", "1.75rem"]}
                  fontWeight={"500"}
                >
                  Sales Questions
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                w={["9.35425rem", "19.1875rem"]}
                h={["5.69788rem", "11.6875rem"]}
                justifyContent="center"
                bgColor={"#fff"}
                borderRadius={["0.975px ", "12px"]}
                alignItems="center"
                border="1.2px solid rgba(0, 0, 0, 0.20)"
                _hover={{ border: "2px #000 solid" }}
                gap={["0.5", "5"]}
                boxShadow="0px 8px 64px 0px rgba(167, 167, 167,0.24)"
              >
                <Box
                  w={["2.22431rem", " 4.5625rem"]}
                  h={["2.22431rem", " 4.5625rem"]}
                  borderRadius="50%"
                  border="0.5px rgba(0, 0, 0, 0.50) solid"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/* <Image src='/UsageGuides.png'  width={['1.0665rem','2.1875rem']} height={['1.0665rem','2.1875rem']}  /> */}
                  <Icon
                    as={BiSolidPieChartAlt2}
                    h={["1.0665rem", "2.1875rem"]}
                    w={["2.84975rem", "2.1875rem"]}
                  />
                </Box>

                <Text
                  fontSize={["0.79219rem", "1.625rem"]}
                  className="clashMedium"
                  lineHeight={["0.85319rem", "1.75rem"]}
                  fontWeight={"500"}
                >
                  Usage Guides
                </Text>
              </Flex>
            </HStack>
          </Flex>

          <Text
            mt="5rem"
            fontSize={["1.625rem", "2.25rem"]}
            fontWeight={"600"}
            className="clashSemiBold"
            lineHeight={["2.97894rem", "2.97894rem"]}
          >
            Customer Questions and Answers on Support Page:{" "}
          </Text>

          <Accordion allowToggle mb="3rem" border={'2px solid rgba(0, 0, 0, 0.40)'} width={['98%', '78.625rem', '2xl:90rem']} borderRadius={'4px'}  boxShadow={'0px 8px 64px 0px rgba(167, 167, 167, 0.24)'} my={ '1.625rem'}>
            <AccordionItem >
              <h2>
                <AccordionButton className="clashMedium" width={['100%', '78.625rem', '2xl:90rem']} h={'5.0625rem'} borderRadius={'4px'} fontSize={['1rem', '1.625rem']} fontWeight={'500'} lineHeight={['1.15369rem', '1.75rem']}
               >
                  <Box as="span" flex="1" textAlign="left">
                    Is Monapp safe and secure for transactions?
                  </Box>
                  <AccordionIcon  height={'2.625rem'} width={'2.625rem'}/>
                </AccordionButton>
              </h2>
              <AccordionPanel width={'67.8125rem'}  pl={['', '2.625rem']} pr={'1.625rem'} mb={'2.625rem'}  textAlign={'justify'}  fontSize={['0.82406rem', '1.25rem']} lineHeight={'1.75rem'} >
                Absolutely. Monapp employs robust security measures, including encryption and authentication protocols, to ensure the safety of your transactions and personal data.
              </AccordionPanel>
            </AccordionItem>



            <AccordionItem>
              <h2>
                <AccordionButton className="clashMedium" width={['100%', '78.625rem', '2xl:90rem']} h={'5.0625rem'} borderRadius={'4px'} fontSize={['1rem', '1.625rem']} fontWeight={'500'} lineHeight={['1.15369rem', '1.75rem']}>
                  <Box as="span" flex="1" textAlign="left">
                    How do I download and install Monapp on my device?
                  </Box>
                  <AccordionIcon  height={'2.625rem'} width={'2.625rem'}/>
                </AccordionButton>
              </h2>
              <AccordionPanel width={'67.8125rem'}  pl={['', '2.625rem']} pr={'1.625rem'} mb={'2.625rem'}  textAlign={'justify'}  fontSize={['0.82406rem', '1.25rem']} lineHeight={'1.75rem'} >
                You can easily download Monapp from the Google Play Store for
                Android devices or the Apple App Store for iOS devices. Simply
                search for &quot;Monapp,&quot; click &quot;Install,&quot; and follow the prompts
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton className="clashMedium" width={['100%', '78.625rem', '2xl:90rem']} h={'5.0625rem'} borderRadius={'4px'} fontSize={['1rem', '1.625rem']} fontWeight={'500'} lineHeight={['1.15369rem', '1.75rem']}>
                  <Box as="span" flex="1" textAlign="left">
                    How do I link my bank account to Monapp?
                  </Box>
                  <AccordionIcon  height={'2.625rem'} width={'2.625rem'}/>
                </AccordionButton>
              </h2>
              <AccordionPanel width={'67.8125rem'}  pl={['', '2.625rem']} pr={'1.625rem'} mb={'2.625rem'}  textAlign={'justify'}  fontSize={['0.82406rem', '1.25rem']} lineHeight={'1.75rem'} >
                {" "}
                Linking your bank account is a breeze. Once you&apos;re signed in,
                navigate to the &quot;Settings&quot; section, select &quot;Link Bank Account,&quot;
                and follow the prompts to securely connect your account.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton className="clashMedium" width={['100%', '78.625rem', '2xl:90rem']} h={'5.0625rem'} borderRadius={'4px'} fontSize={['1rem', '1.625rem']} fontWeight={'500'} lineHeight={['1.15369rem', '1.75rem']}>
                  <Box as="span" flex="1" textAlign="left">
                    Can I send money internationally using Monapp?
                  </Box>
                  <AccordionIcon  height={'2.625rem'} width={'2.625rem'}/>
                </AccordionButton>
              </h2>
              <AccordionPanel width={'67.8125rem'}  pl={['', '2.625rem']} pr={'1.625rem'} mb={'2.625rem'}  textAlign={'justify'}  fontSize={['0.82406rem', '1.25rem']} lineHeight={'1.75rem'} >
                {" "}
                At the moment, Monapp focuses on local transactions. We&apos;re
                continually working to expand our services to include
                international transfers in the future.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton className="clashMedium" width={['100%', '78.625rem', '2xl:90rem']} h={'5.0625rem'} borderRadius={'4px'} fontSize={['1rem', '1.625rem']} fontWeight={'500'} lineHeight={['1.15369rem', '1.75rem']}>
                  <Box as="span" flex="1" textAlign="left">
                    What if I have an issue or need assistance?
                  </Box>
                  <AccordionIcon  height={'2.625rem'} width={'2.625rem'}/>
                </AccordionButton>
              </h2>
              <AccordionPanel width={'67.8125rem'}  pl={['', '2.625rem']} pr={'1.625rem'} mb={'2.625rem'}  textAlign={'justify'}  fontSize={['0.82406rem', '1.25rem']} lineHeight={'1.75rem'} >
                {" "}
                We&apos;re here to help! Visit our Support page for answers to common
                questions. If you need further assistance, you can reach out to
                our dedicated support team via email or phone for personalized
                help.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Text
            mt="5rem"
            mb={["1rem", "3rem"]}
            fontSize={["1.625rem", "2.25rem"]}
            className="clashSemiBold"
            fontWeight={"600"}
            lineHeight={["2.97894rem", "2.97894rem"]}
          >
            Send us a message
          </Text>

          <Text
            w={["23.1875rem", "47.0625rem"]}
            h={["3.875rem", "3.875rem"]}
            fontSize={["1rem", "1.51888rem"]}
            lineHeight={"2.23838rem"}
            letterSpacing={"-0.01rem"}
            mb="5rem"
          >
            Send us a message below. Our support team is here to assist you with any questions or concerns.

          </Text>

          <form  ref={form} onSubmit={handleSubmit(sendEmail)}>
            {/* <HStack mb='32px'><IconButton icon={<AiOutlinePicture fontSize={'20px'} />} w='36px' h='36px' isRound /> <Text> Upload New Image</Text></HStack> */}
            <Flex gap={["0", "12"]} flexDirection={["column", "row"]}>
              <Box mb="21.87px">
                <FormControl id="firstName" isInvalid={errors.firstName} >
                  <FormLabel
                    fontSize={["1.25rem", "1.5rem"]}
                    fontWeight={"500"}
                    lineHeight={"200%"}
                    letterSpacing={"0.03rem"}
                    color={"#000"}
                  >
                    First Name
                  </FormLabel>
                  <Input
                    h={["3.5rem", "5.5625rem"]}
                    w={["95%", "42rem"]}
                    borderRadius={"2px"}
                    bg="#ffffff"
                    border={"1.4px solid #000"}
                    type="text"
                    name='firstName'
                    {...register("firstName")}
                  />
                  
                </FormControl>
              </Box>
              <Box mb="21.87px">
                <FormControl id="lastName" isInvalid={errors.lastName}>
                  <FormLabel
                    fontSize={["1.25rem", "1.5rem"]}
                    fontWeight={"500"}
                    lineHeight={"200%"}
                    letterSpacing={"0.03rem"}
                    color={"#000"}
                  >
                    Last Name
                  </FormLabel>
                  <Input
                    h={["3.5rem", "5.5625rem"]}
                    w={["95%", "42rem"]}
                    borderRadius={"2px"}
                    bg="#ffffff"
                    border={"1.4px solid #000"}
                    type="text"
                    name='lastName'
                    
                    {...register("lastName")}
                  />
                </FormControl>
              </Box>
            </Flex>
            <Flex gap={["0", "12"]} flexDirection={["column", "row"]}>
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
                    w={["95%", "42rem"]}
                    borderRadius={"2px"}
                    bg="#ffffff"
                    border={"1.4px solid #000"}
                    type="email"
                    name='email'
                    
                    {...register("email")}
                  />
                </FormControl>
              </Box>
              <Box mb="21.87px">
                <FormControl id="phone" isInvalid={errors.phone}>
                  <FormLabel
                    fontSize={["1.25rem", "1.5rem"]}
                    fontWeight={"500"}
                    lineHeight={"200%"}
                    letterSpacing={"0.03rem"}
                    color={"#000"}
                  >
                    Phone Number
                  </FormLabel>
                  <Input
                    h={["3.5rem", "5.5625rem"]}
                    w={["95%", "42rem"]}
                    borderRadius={"2px"}
                    bg="#ffffff"
                    border={"1.4px solid #000"}
                    type="tel"
                    name='phone'
                    
                    {...register("phone")}
                  />
                </FormControl>
              </Box>
            </Flex>
            <Box mb="21.87px">
              <FormControl id="message" isInvalid={errors.message}>
                <FormLabel
                  fontSize={["1.25rem", "1.5rem"]}
                  fontWeight={"500"}
                  lineHeight={"200%"}
                  letterSpacing={"0.03rem"}
                  color={"#000"}
                >
                  Message
                </FormLabel>
                <Textarea
                  h="16.25rem"
                  w={["95%", "87.375rem"]}
                  borderRadius={"2px"}
                  bg="#ffffff"
                  border={"1.4px solid #000"}
                  type="text"
                  name='message'
                  
                  {...register("message")}
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
              // onClick={sendEmail}
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

          <Center display={["flex", "none"]} mb={"-4rem"} mr="7">
            <EasySteps />
          </Center>
        </Box>

        <OurCommunity />

        <FooterSection />
      </main>
    </>
  );
}
