import localFont from "@next/font/local";
import { Flex, Box, Text, Button, Container } from "@chakra-ui/react";
import Image from "next/image";
import FromBottomText from "./animations/from-bottom-text";

const jost = localFont({ src: "../public/fonts/jost.ttf" });
const dmsans = localFont({ src: "../public/fonts/dm-sans.ttf" });

const TryOut = () => {
  return (
    <Box bg="#FFFFFF">
      <Container maxW="79.81em" centerContent py={"16"}>
        <Box
          bgImage="url('/Map.png')"
          backgroundPosition="center"
          backgroundSize={["cover", "contain"]}
          backgroundRepeat={"no-repeat"}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={"6"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src="/showcase.png"
                class="flex-1 object-cover w-full h-auto"
                alt="showcase-image"
                loading="lazy"
                width={500}
                height={500}
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
                  fontSize={{ base: "2rem", md: "2.9525rem" }}
                  fontWeight={600}
                  lineHeight={{ base: "1.875rem", md: "4.04rem" }}
                  className={jost.className}
                >
                  Save To Buy In Stores Across Nigeria.
                </Text>
              </FromBottomText>

              <FromBottomText delay={0.2}>
                <Text
                  fontSize={{ base: "1rem", md: "1.4425rem" }}
                  fontWeight={400}
                  lineHeight={"2.02rem"}
                  className={jost.className}
                >
                  Whether you&apos;re saving solo or with a group, this feature
                  empowers you to achieve your goals faster. Dream of a new
                  laptop, a dream vacation, or your first car? With Save to Buy,
                  you&apos;re one step closer. Start saving smarter today!&apos;
                </Text>
              </FromBottomText>

              <FromBottomText delay={0.3}>
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
                  className={dmsans}
                  p={["0.288125rem", "1.22625rem", "0.288125rem", "1.225rem"]}
                >
                  Try it out
                </Button>
              </FromBottomText>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default TryOut;
