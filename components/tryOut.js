import { Flex, Image, Box, Text, Button, Container } from "@chakra-ui/react";

const TryOut = () => {
  return (
    <Box bg="#FFFFFF">
      <Container maxW="79.81em" centerContent>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          <Box>
            <Image
              flex="1"
              src="/showcase.png"
              alt="showcase-image"
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
            <Text fontSize="2.9525rem" fontWeight={600} lineHeight={"4.04rem"}>
              Save To Buy In Stores Across Nigeria.
            </Text>
            <Text
              fontSize={"1.4425rem"}
              fontWeight={400}
              lineHeight={"2.02rem"}
            >
              Whether you're saving solo or with a group, this feature empowers
              you to achieve your goals faster. Dream of a new laptop, a dream
              vacation, or your first car? With Save to Buy, you're one step
              closer. Start saving smarter today!"
            </Text>
            <Button
              borderRadius={"0.669375rem"}
              color={"white"}
              bgColor={"black"}
              w={"13.466875rem"}
              h={"3.785625rem"}
              fontWeight={500}
              fontSize={"1.561875rem"}
              lineHeight={"2.93rem"}
              variant={"link"}
            >
              Try it out
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default TryOut;
