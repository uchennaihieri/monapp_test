import localFont from "@next/font/local";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import CheckIcon from "./Icons/checkIcon";

const dmsans = localFont({ src: "../public/fonts/dm-sans.ttf" });
const jost = localFont({ src: "../public/fonts/jost.ttf" });
const heebo = localFont({ src: "../public/fonts/heebo.ttf" });

export default function Features() {
  return (
    <Flex
      borderRadius="0.736rem"
      background="#fff"
      boxShadow="2px 8px 24px -0.5px rgba(0, 0, 0, 0.08)"
      flexDirection={{ base: "column-reverse", md: "row" }}
      w={{ base: "24.375rem", md: "70rem", lg: "93rem" }}
      h={{ base: "", md: "33.9375rem" }}
      m={{
        base: "-3.1275rem auto auto",
        md: "2rem auto",
        lg: "-3.1275rem auto",
      }}
      position={"absolute"}
    >
      <Box
        w={{ base: "24.375rem", md: "31.5rem" }}
        h={{ base: "23.5rem", md: "33.9375rem" }}
        bg="#F2F2F2"
        position={"relative"}
        borderRadius={"0.736rem"}
      >
        <Image
          src={"/broker.png"}
          h={{ base: "27.5rem", md: "38.70313rem" }}
          w={{ base: "19.31775rem", md: "27.1875rem" }}
          position={"absolute"}
          bottom="0"
          left="50%"
          transform="translate(-50%, -0%)"
          alt="broker-image"
        />
      </Box>

      <Box
        pt={{ base: "2.88rem", md: "3.5rem" }}
        pl={{ base: "0", md: "4rem" }}
        gap={"3.125rem"}
        bgImage="url('/map.png')"
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat={"no-repeat"}
      >
        <Text
          w={{ base: "21.24419rem", md: "32.625rem" }}
          m={{ base: "auto", md: "0" }}
          lineHeight={{ base: "1.875rem", md: "2.97875rem" }}
          fontWeight={600}
          color="#000"
          fontSize={{ base: "1.5rem", md: "2.25rem" }}
          className={jost.className}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: "1.31rem", md: "1.38rem" }}
        >
          Dedicated Support Services for Each Customer
        </Text>
        <Text
          w={{ base: "21.5rem", md: "41.0625rem" }}
          mx={"auto"}
          color="#000"
          lineHeight={{ base: "1.25rem", md: "1.78125rem" }}
          fontWeight={400}
          fontSize={{ base: "1rem", md: "1.5rem" }}
          className={dmsans.className}
          mb="2.5rem"
          textAlign={{ base: "center", md: "left" }}
        >
          Whether you are new to digital payments or not, we have a growing
          community of dedicated payment brokers who will give you the necessary
          training and support you need every step of the way.
        </Text>

        <Flex
          w={{ base: "13.5rem", md: "full" }}
          flexDirection={{ base: "column", md: "row" }}
          justify={"space-between"}
          gap={{ base: "2.38rem" }}
          alignItems={"center"}
          m={{ base: " 4rem auto", md: " 0" }}
        >
          <Flex
            color={"#FFFFFF66"}
            shadow={"5px 5px 30px 0px rgba(0, 0, 0, 0.08)"}
            borderRadius={"0.625rem"}
            p={"1.25rem 0.9375rem 2.5rem 0.9375rem"}
            w={{ base: "21.5rem" }}
            h={{ base: "9.6875rem" }}
          >
            <CheckIcon boxSize={"1.75rem"} color="#000000" mr="0.75rem" />
            <Box>
              <Text
                color="#000"
                lineHeight={{ base: "1.465rem", md: "1.465rem" }}
                fontWeight={500}
                fontSize={{ base: "1.125rem", md: "1.125rem" }}
                className={dmsans.className}
                mb="0.75rem"
              >
                In-app support 24/7
              </Text>
              <Text
                maxW="16.625rem"
                color="#000"
                lineHeight={{ base: "1.32625rem", md: "1.32625rem" }}
                fontWeight={400}
                fontSize={{ base: "0.9025rem", md: "0.9025rem" }}
                className={heebo.className}
              >
                With our app, help is just a tap away, day or night. Simply hit
                the &apos;Broker&apos; button to instantly connect with your
                dedicated broker.
              </Text>
            </Box>
          </Flex>

          <Flex
            color={"#FFFFFF66"}
            shadow={"5px 5px 30px 0px rgba(0, 0, 0, 0.08)"}
            borderRadius={"0.625rem"}
            p={"1.25rem 0.9375rem 2.5rem 0.9375rem"}
            w={{ base: "21.5rem" }}
            h={{ base: "9.6875rem" }}
          >
            <CheckIcon boxSize={"1.75rem"} color="#000000" mr="0.75rem" />
            <Box>
              <Text
                color="#000"
                lineHeight={{ base: "1.465rem", md: "1.465rem" }}
                fontWeight={500}
                fontSize={{ base: "1.125rem", md: "1.125rem" }}
                className={dmsans.className}
                mb="0.75rem"
              >
                Tailored Support, Just for You
              </Text>
              <Text
                maxW="16.625rem"
                color="#000"
                lineHeight={{ base: "1.32625rem", md: "1.32625rem" }}
                fontWeight={400}
                fontSize={{ base: "0.9025rem", md: "0.9025rem" }}
                className={heebo.className}
              >
                To equip you with the knowledge and skills to navigate your
                payment process effectively.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
