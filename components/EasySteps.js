import React from "react";
import { Box, Flex, Text, Icon, VStack, Image } from "@chakra-ui/react";

import { Bree_Serif, DM_Sans } from "next/font/google";
import profileCircleIcon from "./Icons/profileCircleIcon";
import easySettingIcon from "./Icons/easySettingIcon";
// import settingIcon from "./Icons/settingIcon";
import FlashIcon from "./Icons/flashIcon";

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });

const dmsansBold = DM_Sans({ weight: "500", subsets: ["latin"] });
const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });

function EasySteps() {
  return (
    <>
      <VStack
        bg={"#000000"}
        maxWidth={["24.375rem", "87.375rem"]}
        m={["6rem auto 7.8rem", "7.62rem auto 11.5rem"]}
        h={["58.9375rem", "44.4375rem"]}
        color="#ffffff"
        borderRadius={["2.375rem", "3rem"]}
      >
        <Image
          src="/birds.png"
          w={" 4.35788rem"}
          h={"3.93819rem"}
          mt={"2.81rem"}
          mb={"0.94rem"}
          alt="birds"
          display={["none", "block"]}
        />
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
          Getting Started in 3 easy steps
        </Text>
        <Text
          textAlign="center"
          letterSpacing={["-0.0175rem", "1.4"]}
          fontSize={["0.875rem", "1.25rem"]}
          className="manRope"
          w={["16.71006rem", "31.25rem"]}
          lineHeight={["1.16969rem", "2.1875rem"]}
          fontWeight={"400"}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
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
            <Image
              src="/curveup.png"
              w={"10.59375rem"}
              position={"absolute"}
              left={"16.75rem"}
              top="7.5rem"
              display={["none", "block"]}
            />

            <Image
              src="/curvedown.png"
              w={"10.59375rem"}
              position={"absolute"}
              right={"16.75rem"}
              top="7.5rem"
              display={["none", "block"]}

            />
            <Image
              src="/dashedline.png"
              position={"absolute"}
              top={"15.5rem"}
              display={["block", "none"]}
            />
            <Image
              src="/dashedline.png"
              position={"absolute"}
              top={"31rem"}
              display={["block", "none"]}
            />



            <Flex
              border="1px dashed white"
              w={[" 5.6995rem", "10rem"]}
              h={[" 5.6995rem", "10rem"]}
              p={"1.42456rem 1.42488rem 1.42519rem 1.42488rem"}
              borderRadius="5rem"
              alignItems="center"
              justifyContent="center"
              position={"relative"}
            >
              <Flex
                bg="#f6f6f7"
                borderRadius="5rem"
                color="#000000"
                w="2.5rem"
                h="2.5rem"
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize="1.125rem"
                className={dmsans.className}
                fontWeight="400"
                mr="10rem"
                position={"absolute"}
                left={"-1.25rem"}
                top={"-1rem"}
                display={["none", "flex"]}
              >
                1
              </Flex>
              <Icon
                as={profileCircleIcon}
                h={["2.84975rem", "5rem"]}
                w={["2.84975rem", "5rem"]}
              ></Icon>
            </Flex>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            position={"relative"}
            w={"20rem"}

          >
            <Flex
              border="1px dashed white"
              w={[" 5.6995rem", "10rem"]}
              h={[" 5.6995rem", "10rem"]}
              p={"1.42456rem 1.42488rem 1.42519rem 1.42488rem"}
              borderRadius="5rem"
              alignItems="center"
              justifyContent="center"
              position={"relative"}
            >
              <Flex
                bg="#f6f6f7"
                borderRadius="5rem"
                color="#000000"
                w="2.5rem"
                h="2.5rem"
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize="1.125rem"
                className={dmsans.className}
                fontWeight="400"
                mr="10rem"
                position={"absolute"}
                left={"-1.25rem"}
                top={"-1rem"}
                display={["none", "flex"]}

              >
                2
              </Flex>
              <Icon
                as={easySettingIcon}
                h={["2.84975rem", "5rem"]}
                w={["2.84975rem", "5rem"]}
              ></Icon>
            </Flex>
            <Text
              fontSize={["0.85494rem", "1.5rem"]}
              className={"clashRegular"}
              fontWeight={"500"}
              mt={["1.9rem", "3.375rem"]}
              mb={["0.4rem", "0.88rem"]}
            >
              Complete Setup
            </Text>
            <Text
              fontSize={["0.56994rem", "1rem"]}
              w={["11.39894rem", "20rem"]}
              className="manRope"
              lineHeight={["1.13988rem", "2rem"]}
              letterSpacing={["-0.01138rem", "-0.02rem"]}
              textAlign={"center"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>{" "}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            position="relative"
            w={"20rem"}
          >
            <Flex
              border="1px dashed white"
              w={[" 5.6995rem", "10rem"]}
              h={[" 5.6995rem", "10rem"]}
              p={"1.42456rem 1.42488rem 1.42519rem 1.42488rem"}
              borderRadius="5rem"
              alignItems="center"
              justifyContent="center"
              position={"relative"}
            >
              <Flex
                bg="#f6f6f7"
                borderRadius="5rem"
                color="#000000"
                w="2.5rem"
                h="2.5rem"
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize="1.125rem"
                className={dmsans.className}
                fontWeight="400"
                mr="10rem"
                position={"absolute"}
                left={"-1.25rem"}
                top={"-1rem"}
                display={["none", "flex"]}

              >
                3
              </Flex>
              <Icon
                as={FlashIcon}
                h={["2.84975rem", "5rem"]}
                w={["2.84975rem", "5rem"]}
              ></Icon>
            </Flex>
            <Text
              fontSize={["0.85494rem", "1.5rem"]}
              className={"clashRegular"}
              fontWeight={"500"}
              mt={["1.9rem", "3.375rem"]}
              mb={["0.4rem", "0.88rem"]}
            >
              Start Transacting
            </Text>
            <Text
              fontSize={["0.56994rem", "1rem"]}
              w={["11.39894rem", "20rem"]}
              className="manRope"
              lineHeight={["1.13988rem", "2rem"]}
              letterSpacing={["-0.01138rem", "-0.02rem"]}
              textAlign={"center"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>{" "}
          </Box>
        </Flex>
      </VStack>
    </>
  );
}

export default EasySteps;
