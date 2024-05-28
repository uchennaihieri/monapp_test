import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";

const PreOrder = () => {
  return (
    <Box
      bg="#000000"
      h={{ md: "46.5rem", "2xl": "56.5rem" }}
      w="100%"
      bgImage="url('/herobg.png')"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Container maxW="79.81em" centerContent>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          pt={"20"}
          color={"white"}
        >
          <Box w={"50%"}>
            <Image
              flex="1"
              src="/pos.png"
              alt="pos-image"
              objectFit="cover"
              w="100%"
              h="auto"
            />
          </Box>

          <Flex
            boxSize={{ base: "100%", md: "50%" }}
            flexDirection={"column"}
            ml={{ base: "0", md: "4" }}
            mt={{ base: "4", md: "0" }}
            textAlign={{ base: "center", md: "left" }}
            gap={"1.346875rem"}
          >
            <Text fontSize="3rem" fontWeight={600} lineHeight={"3.75rem"}>
              Introducing Monapp E-Teller: The Future of POS
            </Text>

            <Flex
              justifyContent={"space-between"}
              flexDirection={"column"}
              gap={"1.2rem"}
            >
              <Box>
                <Text
                  fontSize={"1.4375rem"}
                  lineHeight={"1.875rem"}
                  fontWeight={600}
                >
                  Contactless Payments Anywhere
                </Text>
                <Text
                  fontSize={"1.4375rem"}
                  fontWeight={400}
                  lineHeight={"1.875rem"}
                >
                  Experience seamless transactions without the need for an
                  internet connection.
                </Text>
              </Box>

              <Box>
                <Text
                  fontSize={"1.4375rem"}
                  lineHeight={"1.875rem"}
                  fontWeight={600}
                >
                  Contactless Payments Anywhere
                </Text>
                <Text
                  fontSize={"1.4375rem"}
                  fontWeight={400}
                  lineHeight={"1.875rem"}
                >
                  Experience seamless transactions without the need for an
                  internet connection.
                </Text>
              </Box>

              <Box>
                <Text
                  fontSize={"1.4375rem"}
                  lineHeight={"1.875rem"}
                  fontWeight={600}
                >
                  Contactless Payments Anywhere
                </Text>
                <Text
                  fontSize={"1.4375rem"}
                  fontWeight={400}
                  lineHeight={"1.875rem"}
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
              w={"13.467rem"}
              h={"3.786rem"}
              fontWeight={500}
              fontSize={"1.561875rem"}
              lineHeight={"2.93rem"}
              variant={"link"}
              p={"0.488125rem 2.076875rem 0.488125rem 2.075rem"}
            >
              Pre-Order Now
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default PreOrder;
