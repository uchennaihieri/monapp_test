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
import { useMediaQuery } from "@chakra-ui/react";
const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width:768px)");
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
    <Flex direction="column" justify={"center"} align="center">
      <Stack
        mt={{ base: "3.93em", md: "4.5rem" }}
        pb={"6rem"}
        direction={{ base: "column", md: "row" }}
        w={["100%", "72.813vw"]}
        // bg={"red"}
        height={["58.25rem", "100%"]}
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
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
          <Box
            height={"auto"}
            boxShadow={"2xl"}
            width={{ base: "auto", md: "full" }}
            mt={{ base: "3.93rem", md: "0" }}
            // bg="red"
            position={"relative"}
          >
            <Image
              src="/image 77.png"
              height={["3rem","6.1875rem"]}
              width={["2.28681rem"," 4.7165rem"]}
              position={"absolute"}
              right={"-1.5rem"}
              top={"31rem"}
              display={["none","block"]}

            />
            <Image
              src="/image 78.png"
              height={["3.625rem","6.75rem"]}
              width={[" 3.85994rem","7.1875rem"]}
              position={"absolute"}
              top={"17rem"}
              right={"-1rem"}
              
            />

            <Image
              src="/image 79.png"
              height={"3.60769rem"}
              width={"2rem"}
              position={"absolute"}
              left={"6.8rem"}
              top={"11.5rem"}
              // display={["none","block"]}

            />

            <Image
              src="/image 80.png"
              height={"5.20113rem"}
              width={"5.53825rem"}
              position={"absolute"}
              left={"-1rem"}
              top={"32rem"}
              display={["none","block"]}
            />

            <Image
              src="/image 81.png"
              height={["1.306rem","3.66131rem"]}
              width={["1.18163rem","3.3125rem"]}
              position={"absolute"}
              right={"4rem"}
              top={"1rem"}
            />
            <Image
              src="/image 82.png"
              height={"3.60769rem"}
              width={"2.75rem"}
              position={"absolute"}
              right={"11rem"}
              top={"11rem"}
              // display={["none","block"]}

            />

            {/* hero phone image */}

            <Image
              alt={"Hero Image"}
              width={"100%"}
              src={"/heroImg.png"}
              mt={"5rem"}
              display={{ base: "none", md: "block" }}
            />
            <Image
              alt={"Mobile Hero Image"}
              src={"/heromobile.png"}
              height={"30.4685rem"}
              mt={"0"}
              display={{ base: "block", md: "none" }}
            />
          </Box>
        </Flex>
      </Stack>
    </Flex>
  );
}
