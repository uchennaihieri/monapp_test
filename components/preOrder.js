import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import localFont from "@next/font/local";
import Image from "next/image";

const jost = localFont({ src: "../public/fonts/jost.ttf" });

const PreOrder = () => {
  return (
    <Box
      bg="#000000"
      h={{ md: "46.5rem", "2xl": "56.5rem" }}
      w="100%"
      bgColor={"#1A1A1A"}
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
              width={500}
              height={500}
              src="/pos.png"
              class="flex-1 object-cover w-[20.36125rem] h-[16.963125rem] md:w-[41.41rem] md:h-[34.5rem]"
              alt="pos-image"
              loading="lazy"
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
          className="absolute top-0 md:top-80 left-[15%] md:left-[-5rem] md:transform md:rotate-[270deg] md:w-[27.976875rem] md:h-[27.976875rem]"
          alt="ellipse-image"
          width={500}
          height={500}
        />

        <Image
          src="/Spiral.png"
          className="absolute top-auto md:top-0 bottom-[-4rem] md:bottom-auto right-16 md:right-0 h-[16.429375rem] md:h-[38.0175rem] w-[8.191875rem] md:w-[17.4675rem] object-cover transform rotate-90 md:rotate-0 opacity-90"
          alt="spiral-image"
          width={500}
          height={500}
        />
      </Container>
    </Box>
  );
};

export default PreOrder;
