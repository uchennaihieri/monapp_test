import { Container, Image, Flex, Text, Box, useToast } from "@chakra-ui/react";

import {
  Bree_Serif,
  DM_Sans,
  Plus_Jakarta_Sans,
  Covered_By_Your_Grace,
} from "next/font/google";

const plus = Plus_Jakarta_Sans({ weight: ["500", "700"], subsets: ["latin"] });
const dmsansBold = DM_Sans({ weight: "500", subsets: ["latin"] });
const dmsansExtreBold = DM_Sans({ weight: "700", subsets: ["latin"] });
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });
const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });
const grace = Covered_By_Your_Grace({ weight: "400", subsets: ["latin"] });

const Feature = ({ title, text, icon }) => {
  return (
    <Flex
      justify={"left"}
      w={{ base: "22.25rem", md: "26.6825rem" }}
      h="24.27875rem"
      borderRadius={" 1.36375rem"}
      p={"1.36375rem"}
      border={" 2px solid #FFF"}
      background="#FFFFFF"
      boxShadow="22.12px 41.35px 88.46px 0px #0000001A"
      flexDirection={"column"}
      gap={"0.88625rem"}
    >
      <Image src={icon} w="2rem" h="2rem" />

      <Text
        className="clashMedium"
        lineHeight={{ base: "1rem", md: "1.803125rem" }}
        fontSize={{ base: "1.01rem", md: "1.4425rem" }}
        fontWeight={600}
      >
        {title}
      </Text>
      <Text
        fontWeight={400}
        className={dmsans.className}
        fontSize={{ base: "0.90rem", md: "1.4425rem" }}
        lineHeight={{ base: "1.37rem", md: "1.8031rem" }}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default function CardSection() {
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
    <Box bg="#FFFFFF">
      <Container
        maxW="79.81em"
        centerContent
        pt={{ base: "55.875rem", md: "35.25rem" }}
        pb={["6rem", "15.25rem"]}
      >
        <Text
          mt={"3.12rem"}
          mb={"2.12rem"}
          color="#000000"
          lineHeight={{ base: "2.37rem", md: "4.168125rem" }}
          fontWeight={600}
          fontSize={{ base: "1.75rem", md: "2.884375rem" }}
          justifyItems={"center"}
          className="clashSemiBold"
        >
          Our Features That Transform How You Pay
        </Text>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={{ base: "center", md: "start" }}
          justify={{ base: "start", md: "space-between" }}
        >
          <Flex flexFlow={"column"} gap={"2.584375rem"}>
            <Feature
              icon={"/refresh-circle.svg"}
              title={"INSTANT TRANSFERS ACROSS NIGERIA"}
              text={
                "With Monapp, you can send and receive funds instantly. Whether you're sending to a bank account, phone number, or email, our platform ensures your money reaches its destination in seconds."
              }
            />
            <Feature
              icon={"/security-user.svg"}
              title={"SECURE YOUR TRANSACTIONS WITH ESCROW SERVICE"}
              text={
                "Say goodbye to concerns about fraud. Monapp's Escrow Service enables you  to transact with confidence and peace of mind. We hold payments securely until both buyers and sellers of goods or services fulfill their obligations. "
              }
            />
          </Flex>

          <Box overflow={"hidden"}>
            <Image
              w={["21.46925rem", "34.48656rem"]}
              h={["38.91756rem", "48.97763rem"]}
              src="/phone.svg"
            />
          </Box>

          <Flex flexFlow={"column"} gap={"2.584375rem"}>
            <Feature
              icon={"/24-support.svg"}
              title={"BUY Now, Pay Later (BNPL) WITH MONAPP"}
              text={
                "With Monapp, you can make the purchases you need today and pay at your own pace. Whether you're paying for goods or services, our flexible payment option allows you to spread the cost over time."
              }
            />
            <Feature
              icon={"/moneys.svg"}
              title={"CONTACTLESS OFFLINE PAYMENTS VIA MONAPP E-TELLER"}
              text={
                "Shopping at a local market, traveling in remote areas, or encountering spotty internet connectivity, our E-Teller ensures that you can still complete transactions effortlessly."
              }
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
