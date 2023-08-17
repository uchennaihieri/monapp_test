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
      <VStack
        bg={"#ffff"}
        maxWidth={["24.375rem", "90rem"]}
        m={["-6rem auto 7.8rem", "-4.62rem auto 11.5rem"]}
        pt={["1rem", "3rem"]}
        h={["58.9375rem", "52.25rem"]}
        borderRadius={["2.375rem","3rem"]}
      >
        <Image
          src="/blackbirds.png"
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
              src="/blackcurveup.png"
              w={"10.59375rem"}
              position={"absolute"}
              left={"16.75rem"}
              top="7.5rem"
              display={["none", "block"]}
              alt="curve"
            />
            <Image
              src="/blackcurvedown.png"
              w={"10.59375rem"}
              position={"absolute"}
              right={"16.75rem"}
              top="7.5rem"
              display={["none", "block"]}
              alt="curve"
            />

            <Image
              src="/blackcurvedown.png"
              w={"10.59375rem"}
              position={"absolute"}
              right={"16.75rem"}
              top="7.5rem"
              display={["none", "block"]}
              alt="curve"
            />

            <Image
              src="/dashedmobile.png"
              position={"absolute"}
              top={"15.5rem"}
              display={["block", "none"]}
              alt="dashline"
            />
            <Image
              src="/dashedmobile.png"
              position={"absolute"}
              top={"31rem"}
              display={["block", "none"]}
              alt="dashline"
            />

            <Flex
              w={[" 5.6995rem", "10rem"]}
              h={[" 5.6995rem", "10rem"]}
              p={"1.42456rem 1.42488rem 1.42519rem 1.42488rem"}
              borderRadius="5rem"
              alignItems="center"
              justifyContent="center"
              position={"relative"}
              border="1px dashed #939393"
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

              <WhiteProfile boxSize={["2.84975rem", "5rem"]} />
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
              border="1px dashed #939393"
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
              <WhiteSettingIcon
                boxSize={["2.84975rem" ,"5rem"]} 
              />
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
              border="1px dashed #939393"
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
              <Whiteflash
boxSize={["2.84975rem" ,"5rem"]}               />
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

export default WhiteEasySteps;
