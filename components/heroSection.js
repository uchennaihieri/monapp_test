import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  StackDivider,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { DM_Sans, Bree_Serif } from "next/font/google";

const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

export default function HeroSection() {
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

  return (
    <Flex direction="column" justify={"center"} align="center" 
    >
      <Stack
        mt={{ base: "3.93em", md: "4.5rem" }}
        pb={"6rem"}
        direction={{ base: "column", md: "row" }}
        w={["100%","72.813vw"]}
        spacing={{md:"3.69rem", '2xl':"20.25rem"}}

      >
        <Stack
          w={{ base: "100%", md: "31.5rem" }}
          mt={{ base: "0em", md: "3.395625em" }}
          align={{ base: "center", md: "start" }}
        >
          <Box
            textAlign={{ base: "center", md: "start" }}
            w={{ base: "23.812rem", md: "auto" }}
          >
            <Text
              lineHeight={{ base: "1rem", md: "1,75rem" }}
              fontWeight={400}
              color="white"
              fontSize={{ base: "1rem", md: "1.625rem" }}
              className="clashRegular"
              mb="1.5rem"
            >
              Go beyond ordinary, experience
            </Text>

            <Text
              letterSpacing={{ base: "-0.79px", md: "-0.0625rem" }}
              lineHeight={{ base: "3rem", md: "5rem" }}
              fontWeight={600}
              color="white"
              fontSize={{ base: "2.75rem", md: "3.75rem" }}
              className="clashSemiBold"
            >
              Payment solution for the next gen
            </Text>
          </Box>
          <Box
            textAlign={{ base: "center", md: "start" }}
            w={{ base: "22.43rem", md: "auto" }}
          >
            <Text
              className={dmsans.className}
              fontWeight={400}
              color={"#FFFFFF"}
              fontSize={{ base: "1.125rem" }}
              mt={{ base: "1.5rem", md: "1rem" }}
              mb={"1.88rem"}
              lineHeight={{ base: "1.5rem", md: "1.75rem" }}
            >
              Enjoy fast and easy local payments. With our end-to-end solution,
              you can confirm payments in real-time and enjoy the best customer
              experience and support in the industry.
            </Text>
          </Box>
          <HStack spacing={{ base: "0.85rem", md: "2.3rem" }}>
            <Image
              alt={"Hero Image"}
              align={"center"}
              width={{ base: "10.3rem", md: "10.677vw" }}
              height={{ base: "3.36rem", md: "7.39vh" }}
              src={"/playstore.png"}
              onClick={getApp}
              _hover={{ cursor: "pointer" }}
            />
            <Image
              alt={"Hero Image"}
              align={"center"}
              width={{ base: "10.37rem", md: "10.75vw" }}
              height={{ base: "3.43rem", md: "7.55vh" }}
              src={"/appstore.png"}
              onClick={getApp}
              _hover={{ cursor: "pointer" }}
            />
          </HStack>
          {/* 
                <Flex flexDirection={'row'} mr={'1.87rem'} align="center">
                    <Text className={dmsans.className} fontWeight={400} color={'#FFFFFF'} fontSize={{ base: '1rem' }} lineHeight={'2.63rem'} letterSpacing={'0px'} opacity={'0.6'}></Text>

                </Flex> */}
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} w={"full"} >
          <Box
            height={"auto"}
            boxShadow={"2xl"}
            width={{ base: "auto", md: "full" }}
            mt={{ base: "3.93rem", md: "0px" }}
            
          >
            <Image
              alt={"Hero Image"}
              align={"center"}
              width={{ base: "18.53rem", md: "41.32425rem" }}
              height={{ base: "17.06rem", md: "34.25rem" }}
              src={"/heroPhones.png"}
            />
          </Box>
        </Flex>
      </Stack>
    </Flex>
  );
}
