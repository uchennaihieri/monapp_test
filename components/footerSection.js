import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  VStack,
  StackDivider,
  HStack,
  Image,
  Center,
  Button,
  Divider,
  useToast,
  Link
} from "@chakra-ui/react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { Bree_Serif, DM_Sans, Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

export default function FooterSection() {
  const toast = useToast();

  const getApp = () => {
    toast({
      title: "Sorry, you cannot get the app at this time.",
      description:
        'This app is only available to pilot users for now. We still have open slots in our pilot which you can join by filling the form on our "work with us" page or simply sign up to be notified when we are available for public use',
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const router = useRouter();
  const goIssues = () => {
    router.push("/issues");
  };

  const goPrivacy = () => {
    router.push("/privacyPolicy");
  };

  const goTerms = () => {
    router.push("/termsofuse");
  };

  return (
    <Box

      bgColor="#000000"
      bgImg="url('/footerbg.svg')"
      color="#ffffff"

      mt='20rem'


    >
      {/* blue part */}
      <Center>
        <Box
          h={{ base: "23.6875rem", md: "24.8125rem" }}
          w={{ base: "27.375rem", md: "83.75rem" }}
          mt={{ base: "-18.46rem", md: "-15.25rem" }}
          display={{ base: "flex", md: "block" }}
          borderRadius={"1rem"}
          justifyContent={"center"}
          bgColor={"#183656"}
        >
          <Flex
            flexDirection={"column"}
            ml={['0', '7rem']}
            mt={'3.5rem'}
            gap={'2rem'}

          >
            {/* <Box
              textAlign={{ base: "center", md: "start" }}
              mb={{ base: "1.79rem", md: "0rem" }}
              w={{ base: "15.68em", md: "29.87em" }}
              
            > */}
            <Text
              // letterSpacing={{ base: "-0.26px", md: "0" }}
              lineHeight={{ base: "1.8rem", md: "2.65625rem" }}

              fontWeight={'600'}
              fontSize={{ base: "1.625rem", md: "2.375rem" }}
              color={"#fff"}
              className='clashSemiBold'
              w={['20rem', '33.5625rem']}
              textAlign={'center'}
            // pr={["0","11rem"]}
            >
              Join community of 137k+ users start making payment today.
            </Text>
            <Text color="#ffffff" w={['19.75rem', '34.0625rem']} h={['4.6875rem', '4.6875rem']} fontSize={['0.875rem', '1.125rem']} justifyContent={'center'} lineHeight={['1.25rem', '1.78125rem']} letterSpacing={['0.0175rem', '-0.0225rem']} >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum is simply. Lorem Ipsum is simply.
            </Text>
            {/* </Box> */}

            <HStack
              // mt={["0","2rem"]}
              gap={'1.5rem'}
            >
              <Image
                src={"/app-store.svg"}
                w={{ base: "8rem", md: "10.81rem" }}
                h={{ base: "2.61rem", md: "3.18rem" }}
                onClick={getApp}
                _hover={{ cursor: "pointer" }}
              />
              <Image
                src={"/play-store.svg"}
                w={{ base: "8.06rem", md: "10.81rem" }}
                h={{ base: "2.67rem", md: "3.18rem" }}
                onClick={getApp}
                _hover={{ cursor: "pointer" }}
              />
            </HStack>
          </Flex>
        </Box>
      </Center>

      {/* phone short */}
      <Flex
        position={'Absolute'}
        bottom={'23rem'}
        right={{ md: '25rem', '2xl': '50rem' }}
        display={{ base: 'none', md: 'flex' }}
      >
        <Image
          width={'18.0185rem'}
          // height={'34.15163rem'}
          alt="mobile dashboard"
          src={'/mobileDash.png'}
        />

        <Image
          src="mobilePayment.png"
          width={'16.51756rem'}
          // height={'30.76281rem'}
          alt="mobile Payment"
          ml='-4.2rem'
          mt='4.7rem'
        />
      </Flex>


      {/* lower part */}

      <Flex
        py={{ base: "2.75rem", md: "4.125rem" }}
        px={{ base: "3.68rem", md: "11.87rem" }}
        justify="space-evenly"
        gap={["10px", "40px"]}
        flexDirection={["column", "row"]}
      >

        {/* monapp logo */}
        <Flex
          flexDirection={"column"}
          gap={["10px", "40px"]}
          mb={{ base: "3rem", md: "1.5rem" }}
          justifyContent={"center"}
          alignItems={["center", "start"]}
        >
          <Image
            src={"/logo.png"}
            width={'14.42756rem'}
            height={'2.625rem'}
          />
          <HStack display={"flex"} gap={'1rem'}>
            <Icon as={BsFacebook} fontSize="1.38rem" color="#ffffff" />
            <Icon as={BsTwitter} fontSize="1.38rem" color="#ffffff" />
            <Icon as={AiFillInstagram} fontSize="1.38rem" color="#ffffff" />
            <Icon as={AiFillLinkedin} fontSize="1.38rem" color="#ffffff" />
          </HStack>

          <Text
            display={{ base: 'none', md: 'flex' }}
            textAlign={{ base: "center", md: "start" }}
            mt={{ base: "0rem", md: "0rem" }}
            mb={{ base: "4rem", md: "0rem" }}
            color="#ffffff"
            opacity={"0.6"}
            lineHeight={{ base: "1.12rem", md: "2.18rem" }}
            fontWeight={400}
            fontSize={{ base: "0.875rem" }}
            className={dmsans.className}
          >
            Copyright @ MONAPP {new Date().getFullYear()}. All Rights Reserved.
          </Text>

        </Flex>



        {/* feat and com */}
        <Flex
          flexDirection={"row"}
          gap={"10rem"}
          mb={['4rem', '0rem']}
        >
          <VStack
            fontSize="1rem"
            gap={'.5rem'}
            alignItems={"start"}
          >
            <Text fontSize="1.125rem" lineHeight={'0.9375rem'}>Features</Text>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>QR Code </Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>QR Code</Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>QR Code</Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>QR Code</Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>QR Code</Link>
          </VStack>


          <VStack
            // textAlign={["center","start"]}
            alignItems={"start"}
            gap={'0.5rem'}
          >
            <Text fontSize="1.125rem" lineHeight={'0.9375rem'}>Company</Text>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>About us</Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>Career</Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>Press</Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>Blog</Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>Contact</Link>

          </VStack>
        </Flex>


        {/* legal and app */}
        <Flex
          flexDirection={"row"}
          gap={"6rem"}
          mb={['4rem', '0rem']}  >

          <VStack
            alignItems={"start"}
            gap={'1rem'}
          >
            <Text fontSize="1.125rem" lineHeight={'0.9375rem'}>Legal</Text>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>Privacy</Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>Terms & Condition</Link>
          </VStack>

          <VStack
            // textAlign={["center","start"]}
            alignItems={["center", "start"]}
            gap={'1rem'}

          >
            <Text fontSize="1.125rem" lineHeight={'0.9375rem'}>Get the app</Text>
            <Image
              src={"/qr.png"}
              _hover={{ cursor: "pointer" }}></Image>
          </VStack>
        </Flex>
        <Text
          display={{ base: 'flex', md: 'none' }}
          textAlign={{ base: "center", md: "start" }}
          mt={{ base: "0rem", md: "0rem" }}
          mb={{ base: "4rem", md: "0rem" }}
          color="#ffffff"
          opacity={"0.6"}
          lineHeight={{ base: "1.12rem", md: "2.18rem" }}
          fontWeight={400}
          fontSize={{ base: "0.875rem" }}
          className={dmsans.className}
        >
          Copyright @ MONAPP {new Date().getFullYear()}. All Rights Reserved.
        </Text>


      </Flex>

    </Box>
  );
}
