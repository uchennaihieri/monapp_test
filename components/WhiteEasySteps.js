import React from "react";
import localFont from "@next/font/local";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

const jost = localFont({ src: "../public/fonts/jost.ttf" });

function WhiteEasySteps() {
  return (
    <VStack bg={"#ffff"} py="16" h={["58.9375rem", "38rem"]}>
      <Text
        fontSize={{ base: "2rem", md: "2.5rem" }}
        fontStyle={"normal"}
        className={jost.className}
        fontWeight="600"
        lineHeight={{ base: "2.1875rem", md: "3rem" }}
        letterSpacing={["-0.1125rem", "0.05rem"]}
        textAlign={"center"}
      >
        Want a custom payment flow?
      </Text>
      <Text
        textAlign="center"
        letterSpacing={["-0.0175rem", "1.4"]}
        fontSize={["1rem", "1.5rem"]}
        className={jost.className}
        w={["16.71006rem", "31.25rem"]}
        lineHeight={["1.16969rem", "2rem"]}
        fontWeight="400"
        opacity="0.7"
      >
        With the next generation of commerce in mind, we enable you to request
        custom payment experiences tailored to your needs.
      </Text>
      <Flex
        align="center"
        flexDir={["column", "row"]}
        textAlign={"center"}
        alignItems={"center"}
        justify={"center"}
        maxWidth={"80%"}
        // m={"auto"}
        pt={"2.88rem"}
        position={"relative"}
        gap={["4.5rem", "5rem"]}
        className={jost.className}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={{ base: "15.8125rem", md: "20rem" }}
          height={{ base: "auto", md: "15rem" }}
        >
          <Box
            width="4.5625rem"
            height="4.5625rem"
            backgroundColor="#1E1E1E"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color="white"
              fontSize={{ base: "1.695rem", md: "2.25rem" }}
              lineHeight={{ base: "2.26rem", md: "3rem" }}
              letterSpacing="-0.075rem"
              textAlign="center"
            >
              1
            </Text>
          </Box>

          <Text
            fontSize={["1rem", "1.5rem"]}
            fontWeight={"400"}
            mt={["1.9rem", "3.375rem"]}
            mb={["0.4rem", "0.88rem"]}
            lineHeight={["2rem"]}
            className={jost.className}
          >
            Install the App
          </Text>
          <Text
            fontSize={["1rem", "1rem"]}
            w={["11.39894rem", "20rem"]}
            lineHeight={["1.5rem", "2rem"]}
            letterSpacing={["-0.01138rem", "-0.02rem"]}
            textAlign={"center"}
            fontWeight={"200"}
            className={jost.className}
          >
            Download Monapp from Play Store or App Store, register, and unlock
            seamless financial transactions.
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={{ base: "15.8125rem", md: "20rem" }}
          height={{ base: "auto", md: "15rem" }}
        >
          <Box
            width="4.5625rem"
            height="4.5625rem"
            backgroundColor="#1E1E1E"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color="white"
              fontSize={{ base: "1.695rem", md: "2.25rem" }}
              lineHeight={{ base: "2.26rem", md: "3rem" }}
              letterSpacing="-0.075rem"
              textAlign="center"
            >
              2
            </Text>
          </Box>

          <Text
             fontSize={["1rem", "1.5rem"]}
             fontWeight={"400"}
             mt={["1.9rem", "3.375rem"]}
             mb={["0.4rem", "0.88rem"]}
             lineHeight={["2rem"]}
             className={jost.className}
          >
            Submit Your Request
          </Text>
          <Text
            fontSize={["0.56994rem", "1rem"]}
            w={["11.39894rem", "20rem"]}
            lineHeight={["1.13988rem", "2rem"]}
            letterSpacing={["-0.01138rem", "-0.02rem"]}
            textAlign={"center"}
            fontWeight={"200"}
          >
            Contact your broker and submit your requirements for a tailored
            experience.
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={{ base: "15.8125rem", md: "20rem" }}
          height={{ base: "auto", md: "15rem" }}
        >
          <Box
            width="4.5625rem"
            height="4.5625rem"
            backgroundColor="#1E1E1E"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color="white"
              letterSpacing="-0.075rem"
              textAlign="center"
              fontSize={{ base: "1.695rem", md: "2.25rem" }}
              lineHeight={{ base: "2.26rem", md: "3rem" }}
            >
              3
            </Text>
          </Box>

          <Text
            fontSize={["0.85494rem", "1.5rem"]}
            fontWeight={"500"}
            mt={["1.9rem", "3.375rem"]}
            mb={["0.4rem", "0.88rem"]}
          >
            Start Rolling!
          </Text>

          <Text
            fontSize={["0.56994rem", "1rem"]}
            w={["11.39894rem", "20rem"]}
            lineHeight={["1.13988rem", "2rem"]}
            letterSpacing={["-0.01138rem", "-0.02rem"]}
            textAlign={"center"}
            fontWeight={"200"}
          >
            We will implement your custom flow and you'll be notified to start
            using it.
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
}

export default WhiteEasySteps;
