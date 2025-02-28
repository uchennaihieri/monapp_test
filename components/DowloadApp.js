import localFont from "@next/font/local";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import FromBottomText from "./animations/from-bottom-text";
import Image from "next/image";

const dmsans = localFont({ src: "../public/fonts/dm-sans.ttf" });
const jost = localFont({ src: "../public/fonts/jost.ttf" });

const DowloadApp = () => {
  return (
    <Box
      bg="#FFFFFF"
      h={{ md: "46.5rem", "2xl": "56.5rem" }}
      w="100%"
      backgroundPosition="center"
      backgroundSize="cover"
      py={"16"}
    >
      <Container maxW="79.81em" centerContent>
        <Box
          bgImage="url('/Map.png')"
          backgroundPosition="center"
          backgroundSize="contain"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            pt={"20"}
            className={jost.className}
          >
            <Box w={["100%", "50%"]}>
              <Image
                width={500}
                height={500}
                src="/group.png"
                class="flex-1 object-cover w-full h-auto"
                alt="pos-image"
                loading="lazy"
              />
            </Box>

            <Flex
              boxSize={{ base: "100%", md: "50%" }}
              flexDirection={"column"}
              ml={{ base: "0", md: "4" }}
              mt={{ base: "4", md: "0" }}
              textAlign={"left"}
              gap={"1.346875rem"}
            >
              <FromBottomText delay={0.1}>
                <Text
                  fontSize={["1rem", "3rem"]}
                  fontWeight={600}
                  lineHeight={["1.25rem", "3.75rem"]}
                  letterSpacing={"-0.03125rem"}
                >
                  All-in-One Payment App: Championing your move to cashless
                </Text>
              </FromBottomText>

              <FromBottomText delay={0.2}>
                <Text
                  fontSize={["1rem", "1.4425rem"]}
                  fontWeight={400}
                  lineHeight={["1.25rem", "2.02rem"]}
                  opacity={"0.7"}
                >
                  We are innovating to enable you say goodbye to the hassle of
                  carrying cash and juggling multiple payment methods—Monapp is
                  leading the charge in your journey towards a cashless future.
                </Text>
              </FromBottomText>

              <FromBottomText delay={0.3}>
                <Box>
                  <Text
                    fontSize={["1rem", "1.4375rem"]}
                    lineHeight={["2rem", "1.875rem"]}
                    fontWeight={600}
                    letterSpacing={"0.5px"}
                  >
                    Download App
                  </Text>
                  <Text
                    fontSize={["1rem", "1.4425rem"]}
                    fontWeight={400}
                    lineHeight={["1.25rem", "1.875rem"]}
                    opacity={"0.7"}
                  >
                    Download now and transform the way you spend
                  </Text>
                </Box>
              </FromBottomText>

              <FromBottomText delay={0.4}>
                <Button
                  borderRadius={"0.669375rem"}
                  color={"white"}
                  bgColor={"black"}
                  w={["8.74375rem", "17.4375rem"]}
                  h={[" 2.464375rem", "3.875rem"]}
                  fontWeight={500}
                  fontSize={["0.921875rem", "1.561875rem"]}
                  lineHeight={["1.729375rem", "2.93rem"]}
                  letterSpacing={"0.005rem"}
                  variant={"link"}
                  p={[
                    "0.288rem 1.225rem 0.288rem 1.22625rem",
                    "0.49625, 2.110625, 0.49625, 2.10875",
                  ]}
                  className={dmsans.className}
                >
                  Download App
                </Button>
              </FromBottomText>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default DowloadApp;
