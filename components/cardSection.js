import { Container, Flex, Text, Box } from "@chakra-ui/react";
import localFont from "@next/font/local";
import Image from "next/image";
import Phone from "@/public/Phone.png";

const jost = localFont({ src: "../public/fonts/jost.ttf" });

const Feature = ({ title, text, icon }) => {
  return (
    <Flex
      justify={"left"}
      w={{ base: "22.25rem", md: "26.6825rem" }}
      h={{ base: "17.375rem", md: "24.27875rem" }}
      borderRadius={" 1.36375rem"}
      p={"1.36375rem"}
      border={"2px solid #FFF"}
      background={"#FFFFFF"}
      boxShadow={"22.12px 41.35px 88.46px 0px #0000001A"}
      flexDirection={"column"}
      transition="all 0.3s ease-in-out"
      gap={"0.88625rem"}
      _hover={{
        transform: "translateY(-10px)",
        border: "2px solid #00000014",
        bg: "#0000001A",
        boxShadow: "5.46px 5.46px 32.73px 0px #00000014",
        cursor: "pointer",
      }}
    >
      <Image
        src={icon}
        className="w-8 h-8"
        alt="icon-image"
        width={100}
        height={100}
      />

      <Text
        className={jost.className}
        lineHeight={{ base: "1rem", md: "1.803125rem" }}
        fontSize={{ base: "1.01rem", md: "1.4425rem" }}
        fontWeight={600}
      >
        {title}
      </Text>
      <Text
        fontWeight={400}
        className={jost.className}
        fontSize={{ base: "0.90rem", md: "1.4425rem" }}
        lineHeight={{ base: "1.37rem", md: "1.8031rem" }}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default function CardSection() {
  return (
    <Box bg="#FFFFFF">
      <Container
        maxW="79.81em"
        centerContent
        pt={{ base: "69.875rem", md: "35.25rem" }}
        pb={{ base: "0", md: "5.25rem" }}
      >
        <Box
          bgImage="url('/Map.png')"
          backgroundPosition="center"
          backgroundSize={["cover", "contain"]}
          backgroundRepeat={"no-repeat"}
        >
          <Text
            mt={"3.12rem"}
            mb={"2.12rem"}
            color="#000000"
            lineHeight={{ base: "2.37rem", md: "4.168125rem" }}
            fontWeight={600}
            fontSize={{ base: "1.75rem", md: "2.884375rem" }}
            textAlign={"center"}
            className={jost.className}
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

            <Box position={"relative"}>
              <Image
                src="/image 78.png"
                className="absolute top-[0.8rem] left-[38%] w-[3.9975rem] h-[3.75375rem] sm:w-[6.91125rem] sm:h-[6.49rem] sm:top-[-2rem] sm:left-[35%]"
                alt="signal-image"
                loading="lazy"
                width={500}
                height={500}
              />

              <Image
                src={Phone}
                className="w-[17.5125rem] h-[38.8375rem] sm:w-[34.48656rem] sm:h-[48.97763rem]"
                alt="phone-image"
                loading="lazy"
                width={1000}
                height={1000}
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
        </Box>
      </Container>
    </Box>
  );
}
