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
  SimpleGrid,
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
        height={["58.25rem", "100%"]}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"16"} w="100%">
          <Stack
            w="100%"
            mt={{ base: "0em", md: "3.395625em" }}
            align={{ base: "center", md: "start" }}
          >
            <Box
              textAlign={{ base: "center", md: "start" }}
              w={{ base: "23.812rem", md: "auto" }}
            >
              <Text
                lineHeight={{ base: "1rem", md: "1.75rem" }}
                fontWeight={400}
                color="white"
                fontSize={{ base: "1rem", md: "1.625rem" }}
                className="clashRegular"
                mb="1.5rem"
              >
                Go beyond ordinary, experience
              </Text>

              <Text
                letterSpacing={{ base: "-0.79px", md: "-0.08625rem" }}
                lineHeight={{ base: "3rem", md: "5rem" }}
                fontWeight={600}
                color="white"
                fontSize={{ base: "2.75rem", md: "5.160625rem" }}
                className="clashSemiBold"
              >
                Instant Moneying App
              </Text>
            </Box>
            <Box
              textAlign={{ base: "center", md: "start" }}
              w={{ base: "22.43rem", md: "auto" }}
            >
              <Text
                className="dmsans"
                fontWeight={400}
                color={"#FFFFFF"}
                fontSize={{ base: "1.548125rem" }}
                mt={{ base: "1.5rem", md: "1rem" }}
                mb={"1.88rem"}
                lineHeight={{ base: "1.5rem", md: "2.408125rem" }}
              >
                Flexible payment services at your fingertips! Online, offline,
                or in between, we've got you covered with Escrow, BNPL, Save to
                Buy, and an E-Teller for contactless payments on the go
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
              width={{ base: "auto", md: " 40.25rem" }}
              mt={{ base: "3.93rem", md: "-6" }}
              position={"relative"}
            >
              <Image
                alt={"Hero Image"}
                width={"100%"}
                src={"/heroImg.svg"}
                mt={"5rem"}
              />
            </Box>
          </Flex>
        </SimpleGrid>
      </Stack>
    </Flex>
  );
}
