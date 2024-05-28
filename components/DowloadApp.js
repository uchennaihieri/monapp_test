import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";

const DowloadApp = () => {
  return (
    <Box
      bg="#FFFFFF"
      h={{ md: "46.5rem", "2xl": "56.5rem" }}
      w="100%"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Container maxW="79.81em" centerContent>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          pt={"20"}
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
              All-in-One Payment App: Championing your move to cashless
            </Text>

            <Text
              fontSize={"1.4425rem"}
              fontWeight={400}
              lineHeight={"2.02rem"}
            >
              We are innovating to enable you say goodbye to the hassle of
              carrying cash and juggling multiple payment methods—Monapp is
              leading the charge in your journey towards a cashless future.
            </Text>

            <Box>
              <Text
                fontSize={"1.4375rem"}
                lineHeight={"1.875rem"}
                fontWeight={600}
              >
                Download App
              </Text>
              <Text
                fontSize={"1.4375rem"}
                fontWeight={400}
                lineHeight={"1.875rem"}
              >
                Download now and transform the way you spend
              </Text>
            </Box>

            <Button
              borderRadius={"0.669375rem"}
              color={"white"}
              bgColor={"black"}
              w={"17.4375rem"}
              h={"3.875rem"}
              fontWeight={500}
              fontSize={"1.561875rem"}
              lineHeight={"2.93rem"}
              variant={"link"}
              p={[0.49625, 2.110625, 0.49625, 2.10875]}
            >
              Download App
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default DowloadApp;
