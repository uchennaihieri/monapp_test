import localFont from "@next/font/local";
import {
  Stack,
  Flex,
  Box,
  Text,
  Image,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FromLeftAnimation from "./animations/from-left-animation";
import FromRightAnimation from "./animations/from-right-animation";

const jost = localFont({ src: "../public/fonts/jost.ttf" });
const dmsans = localFont({ src: "../public/fonts/dm-sans.ttf" });

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

  const quote = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const singleWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const text = "Instant Moneying App";

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
          <FromLeftAnimation>
            <Box
              textAlign={{ base: "center", md: "start" }}
              w={{ base: "23.812rem", md: "auto" }}
            >
              <Text
                lineHeight={{ base: "1rem", md: "1.234375rem" }}
                fontWeight={400}
                color="white"
                fontSize={{ base: "1.14625rem", md: "1.625rem" }}
                className={jost.className}
                mb="1.5rem"
              >
                Go beyond ordinary, experience
              </Text>
              <Box className={jost.className}>
                <motion.p
                  variants={quote}
                  initial="initial"
                  animate="animate"
                  className="w-full inline-block overflow-hidden text-white text-[5rem] leading-[5rem] tracking-[-0.08625rem] font-semibold"
                >
                  {text.split(" ").map((word, index) => (
                    <motion.span
                      variants={singleWord}
                      key={word + "-" + index}
                      className={`inline-block`}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </Box>
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
                Flexible payment services at your fingertips! Online, offline,
                or in between, we&apos;ve got you covered with Escrow, BNPL,
                Save to Buy, and an E-Teller for contactless payments on the go.
              </Text>
            </Box>
            <HStack spacing={{ base: "0.85rem", md: "2.3rem" }}>
              <Image
                alt={"Hero Image"}
                align={"center"}
                width={{ base: "10.3rem", md: "8rem", lg: "9rem" }}
                height={{ base: "3.36rem", md: "3rem", lg: "3.5rem" }}
                src={"/playstore.png"}
                onClick={getApp}
                _hover={{ cursor: "pointer" }}
              />
              <Image
                alt={"Hero Image"}
                align={"center"}
                width={{ base: "10.3rem", md: "8rem", lg: "9rem" }}
                height={{ base: "3.36rem", md: "3rem", lg: "3.5rem" }}
                src={"/appstore.png"}
                onClick={getApp}
                _hover={{ cursor: "pointer" }}
              />
            </HStack>
          </FromLeftAnimation>
        </Stack>

        <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
          <FromRightAnimation>
            <Box
              height={"auto"}
              boxShadow={"2xl"}
              width={{ base: "auto", md: "auto" }}
              mt={{ base: "3.93rem", md: "0" }}
              position={"relative"}
              overflow="hidden"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                alt={"Hero Image"}
                width={"80%"}
                height={"auto"}
                src={"/heroImg.png"}
              />
            </Box>
          </FromRightAnimation>
        </Flex>
      </Stack>
    </Flex>
  );
}
