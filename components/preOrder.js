import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import localFont from "@next/font/local";

const jost = localFont({ src: "../public/fonts/jost.ttf" });

const PreOrder = () => {
  return (
    <Box
      bg="#000000"
      h={{ md: "46.5rem", "2xl": "56.5rem" }}
      w="100%"
      bgImage="url('/herobg.png')"
      backgroundPosition="center"
      backgroundSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={jost.className}
      py={"16"}
      position={"relative"}
    >
      <Container maxW="79.81em" centerContent>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-center"
          color={"white"}
          gap={"1.5rem"}
        >
          <Box w={"50%"}>
            <Image
              flex="1"
              src="/pos.png"
              alt="pos-image"
              objectFit="cover"
              // w="100%"
              // h="auto"
              w={{ base: "20.36125rem", md: "41.41rem" }}
              h={{ base: "16.963125rem", md: "34.5rem" }}
            />
          </Box>

          <Flex
            boxSize={{ base: "100%", md: "50%" }}
            flexDirection={"column"}
            ml={{ base: "0", md: "4" }}
            mt={{ base: "4", md: "0" }}
            gap={"1.346875rem"}
          >
            <Text
              fontSize={{ base: "2rem", md: "3rem" }}
              fontWeight={600}
              lineHeight={{ base: "2.26rem", md: "3.75rem" }}
              textAlign={{ base: "center", md: "left" }}
            >
              Introducing Monapp E-Teller: The Future of POS
            </Text>

            <Flex
              justifyContent={"space-between"}
              flexDirection={"column"}
              gap={"1.2rem"}
              textAlign={"left"}
              letterSpacing={"-0.16px"}
            >
              <Box>
                <Text
                  fontSize={{ base: "1rem", md: "1.4375rem" }}
                  lineHeight={{ base: "1.738125rem", md: "1.875rem" }}
                  fontWeight={600}
                >
                  Contactless Payments Anywhere
                </Text>
                <Text
                  fontSize={{ base: "1rem", md: "1.4375rem" }}
                  fontWeight={400}
                  lineHeight={{ base: "1.25rem", md: "1.875rem" }}
                >
                  Experience seamless transactions without the need for an
                  internet connection.
                </Text>
              </Box>

              <Box>
                <Text
                  fontSize={{ base: "1rem", md: "1.4375rem" }}
                  lineHeight={{ base: "1.738125rem", md: "1.875rem" }}
                  fontWeight={600}
                >
                  Contactless Payments Anywhere
                </Text>
                <Text
                  fontSize={{ base: "1rem", md: "1.4375rem" }}
                  fontWeight={400}
                  lineHeight={{ base: "1.25rem", md: "1.875rem" }}
                >
                  Experience seamless transactions without the need for an
                  internet connection.
                </Text>
              </Box>

              <Box>
                <Text
                  fontSize={{ base: "1rem", md: "1.4375rem" }}
                  lineHeight={{ base: "1.738125rem", md: "1.875rem" }}
                  fontWeight={600}
                >
                  Contactless Payments Anywhere
                </Text>
                <Text
                  fontSize={{ base: "1rem", md: "1.4375rem" }}
                  fontWeight={400}
                  lineHeight={{ base: "1.25rem", md: "1.875rem" }}
                >
                  Experience seamless transactions without the need for an
                  internet connection.
                </Text>
              </Box>
            </Flex>

            <Button
              borderRadius={"0.669375rem"}
              color={"white"}
              border={"2px"}
              borderColor={"white"}
              w={{ base: "8.74375rem", md: "13.467rem" }}
              h={{ base: "2.4775rem", md: "3.786rem" }}
              fontWeight={500}
              fontSize={{ base: "0.921875rem", md: "1.561875rem" }}
              lineHeight={{ base: "1.729375rem", md: "2.93rem" }}
              variant={"link"}
              p={{
                base: "0.288125rem, 1.22625rem, 0.288125rem, 1.225rem",
                md: "0.488125rem 2.076875rem 0.488125rem 2.075rem",
              }}
            >
              Pre-Order Now
            </Button>
          </Flex>
        </Flex>

        <Image
          src="/Ellipse.svg"
          pos={"absolute"}
          top={{ base: "0", md: "20rem" }}
          left={{ base: "15%", md: "-5rem" }}
          transform={{ md: "rotate(270deg)" }}
          w={{ md: "27.976875rem" }}
          h={{ md: "27.976875rem" }}
        />

        <Image
          src="/Spiral.png"
          pos={"absolute"}
          bottom={"0"}
          right={"0"}
          display={["block", "none"]}
        />
      </Container>
    </Box>
  );
};

export default PreOrder;
