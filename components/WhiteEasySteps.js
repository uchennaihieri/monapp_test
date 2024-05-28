import React from "react";
import { Box, Flex, Text, Icon, VStack, Image } from "@chakra-ui/react";
import { Bree_Serif, DM_Sans } from "next/font/google";
import WhiteSettingIcon from "./Icons/whitesettings";
import Whiteflash from "./Icons/whiteflash";
import WhiteProfile from "./Icons/whiteprofile";

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });
const dmsansBold = DM_Sans({ weight: "500", subsets: ["latin"] });
const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });

function WhiteEasySteps() {
  return (
    <>
      <VStack bg={"#ffff"} pt={["1rem", "3rem"]} h={["58.9375rem", "52.25rem"]}>
        <Text
          fontSize={["2rem", "2.5rem"]}
          fontStyle={"normal"}
          className="clashRegular"
          fontWeight="600"
          lineHeight={["1.97919rem", "3rem"]}
          letterSpacing={["0.04rem", "0.05rem"]}
          textAlign={"center"}
          pt={["2.62rem", "0.94rem"]}
          w={[" 17.8125rem", "auto"]}
        >
          Want a custom payment flow?
        </Text>
        <Text
          textAlign="center"
          letterSpacing={["-0.0175rem", "1.4"]}
          fontSize={["0.875rem", "1.5rem"]}
          className="manRope"
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
          m={"auto"}
          pt={"2.88rem"}
          position={"relative"}
          gap={["4.5rem", "5rem"]}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            w={"20rem"}
          >
            <Box
              width="73px"
              height="73px"
              backgroundColor="#1E1E1E"
              needed
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color="white"
                fontSize="2.25rem"
                lineHeight="3rem"
                letterSpacing="-0.075rem"
                textAlign="center"
              >
                1
              </Text>
            </Box>

            <Text
              fontSize={["0.85494rem", "1.5rem"]}
              className={"clashRegular"}
              fontWeight={"500"}
              mt={["1.9rem", "3.375rem"]}
              mb={["0.4rem", "0.88rem"]}
            >
              Download & Register
            </Text>
            <Text
              fontSize={["0.56994rem", "1rem"]}
              w={["11.39894rem", "20rem"]}
              className="manRope"
              lineHeight={["1.13988rem", "2rem"]}
              letterSpacing={["-0.01138rem", "-0.02rem"]}
              textAlign={"center"}
              fontWeight={"200"}
            >
              Download Monapp from Play Store or App Store, register, and unlock
              seamless financial transactions.
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            w={"20rem"}
          >
            <Box
              width="73px"
              height="73px"
              backgroundColor="#1E1E1E"
              needed
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color="white"
                fontSize="2.25rem"
                lineHeight="3rem"
                letterSpacing="-0.075rem"
                textAlign="center"
              >
                2
              </Text>
            </Box>

            <Text
              fontSize={["0.85494rem", "1.5rem"]}
              className={"clashRegular"}
              fontWeight={"500"}
              mt={["1.9rem", "3.375rem"]}
              mb={["0.4rem", "0.88rem"]}
            >
              Submit Your Request
            </Text>
            <Text
              fontSize={["0.56994rem", "1rem"]}
              w={["11.39894rem", "20rem"]}
              className="manRope"
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
            w={"20rem"}
          >
            <Box
              width="73px"
              height="73px"
              backgroundColor="#1E1E1E"
              needed
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color="white"
                fontSize="2.25rem"
                lineHeight="3rem"
                letterSpacing="-0.075rem"
                textAlign="center"
              >
                3
              </Text>
            </Box>

            <Text
              fontSize={["0.85494rem", "1.5rem"]}
              className={"clashRegular"}
              fontWeight={"500"}
              mt={["1.9rem", "3.375rem"]}
              mb={["0.4rem", "0.88rem"]}
            >
              Start Rolling!
            </Text>
            <Text
              fontSize={["0.56994rem", "1rem"]}
              w={["11.39894rem", "20rem"]}
              className="manRope"
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
    </>
  );
}

export default WhiteEasySteps;
