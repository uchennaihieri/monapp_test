import localFont from "@next/font/local";
import { Stack, Flex, Box, Text, HStack, useToast } from "@chakra-ui/react";
import Image from "next/image";

const jost = localFont({ src: "../public/fonts/jost.ttf" });
const dmsans = localFont({ src: "../public/fonts/dm-sans.ttf" });

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
    <Flex direction="column" justify={"center"} align="center">
      <Stack
        mt={{ base: "3.93em", md: "4.5rem" }}
        pb={"6rem"}
        direction={{ base: "column", md: "row" }}
        w={{ base: "100%", md: "90%", lg: "72.813vw" }}
        height={{ base: "58.25rem", md: "100%" }}
      >
        <Stack
          w={{ base: "100%", md: "31.5rem", lg: "35rem" }}
          mt={{ base: "0em", md: "3.395625em" }}
          align={{ base: "center", md: "start" }}
        >
          <Box
            textAlign={{ base: "center", md: "start" }}
            w={{ base: "23.812rem", md: "auto" }}
            className={jost.className}
          >
            <Text
              lineHeight={{ base: "1rem", md: "1.234375rem" }}
              fontWeight={400}
              color="white"
              fontSize={{ base: "1.14625rem", md: "1.625rem" }}
              mb="1.5rem"
            >
              Go beyond ordinary, experience
            </Text>
            <Text
              letterSpacing={{ base: "-0.71px", md: "-0.08625rem" }}
              lineHeight={{ base: "3.725rem", md: "5rem" }}
              fontWeight={600}
              color="white"
              fontSize={{ base: "2.645rem", md: "5.160625rem" }}
            >
              Instant Moneying App
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
              fontSize={{ base: "0.75rem", md: "1.548125rem" }}
              mt={{ base: "1.5rem", md: "1rem" }}
              mb={"1.88rem"}
              lineHeight={{ base: "1.25rem", md: "2.408125rem" }}
            >
              Flexible payment services at your fingertips! Online, offline, or
              in between, we&apos;ve got you covered with Escrow, BNPL, Save to
              Buy, and an E-Teller for contactless payments on the go.
            </Text>
          </Box>
          <HStack spacing={{ base: "0.85rem", md: "2.3rem" }}>
            <Image
              alt={"Hero Image"}
              src={"/play-store.svg"}
              onClick={getApp}
              loading="lazy"
              className="w-[10.3rem] md:[8rem] lg:w-[9rem] h-[3.36rem] md:h-[3rem] lg:h-[3.5rem] items-center hover:cursor-pointer"
              width={500}
              height={500}
            />
            <Image
              alt={"Hero Image"}
              src={"/app-store.svg"}
              onClick={getApp}
              loading="lazy"
              className="w-[10.3rem] md:[8rem] lg:w-[9rem] h-[3.36rem] md:h-[3rem] lg:h-[3.5rem] items-center hover:cursor-pointer"
              width={500}
              height={500}
            />
          </HStack>
        </Stack>

        <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
          <Box
            height={"auto"}
            width={{ base: "dull", md: "auto" }}
            mt={{ base: "3.93rem", md: "0" }}
            position={"relative"}
            overflow="hidden"
            display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex={"10"}
          >
            <Image
              alt={"Hero Image"}
              src={"/heroImg.png"}
              loading="lazy"
              width={1000}
              height={1000}
              className="w-[24.29375rem] lg:w-[100%] xl:w-[40.280625rem] h-[22.921875rem] md:h-[auto] xl:h-[37.685625rem]"
            />
          </Box>
        </Flex>
      </Stack>
    </Flex>
  );
}
