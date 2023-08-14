import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon, Link,
  useColorModeValue,
  Box,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import {
  Bree_Serif,
  Covered_By_Your_Grace,
  DM_Sans,
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { useRouter } from "next/navigation";
import Features from "./features";
import CheckIcon from "./Icons/checkIcon";

const plus = Plus_Jakarta_Sans({ weight: ["500", "700"], subsets: ["latin"] });

const dmsansBold = DM_Sans({ weight: "500", subsets: ["latin"] });
const dmsansExtreBold = DM_Sans({ weight: "700", subsets: ["latin"] });
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });
const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });
const grace = Covered_By_Your_Grace({ weight: "400", subsets: ["latin"] });

const brokerPoints = [
  "Custom limits and control",
  "Link debit cards",
  "Scam Protection",
  "Multi-purpose",
];

export default function DataSection() {
  const router = useRouter();

  const getStarted = () => {
    router.push("/auth?task=signup");
  };

  return (
    <Box bg="#F0F4FC" h={{ base: "80rem", md: " 66.75rem" }}>
      <Container maxW="100%" centerContent>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "start" }}
        >
          <Flex direction={["column-reverse", "row"]} mt={["4.75rem", "9.25rem"]} gap={["8rem", "6.83rem"]}  >
            <Flex position="relative"  >
              <Image
                src={"/firstImage.png"}
                h={["16.36063rem", "31.75rem"]}
                w={"auto"}
                mt={["-2rem", "6rem"]}
                ml={["1rem", "0rem"]}
              />

              <Image
                src={"/secondImage.png"}
                h={["16.36063rem", "31.75rem"]}
                w={"auto"}
                ml={["-5rem", "-8rem"]}
                mt={["-6rem", "-4rem"]}
              />
            </Flex>
            <Box  >
              <Stack
                textAlign={{ base: "center", md: "start" }}
                w={{ base: "22.43rem", md: "31.93rem" }}
                spacing={4}
              >
                <Text
                  mb={"2.12rem"}
                  color="#000000"
                  lineHeight={{ base: "2.37rem", md: "3.25rem" }}
                  fontWeight={600}
                  fontSize={{ base: "1.75rem", md: "2.5rem" }}
                  className="clashSemiBold"
                >
                  Sleek & luxurious <br /> Monapp QR code card
                </Text>
                <Text
                  mb={{ base: "6rem", md: "1rem" }}
                  color={"#818C96"}
                  lineHeight={{ base: "1.5rem", md: "2.23838rem" }}
                  fontWeight={500}
                  fontSize={{ base: "1.125rem", md: "1.25rem" }}
                  className={dmsansBold.className}
                  letterSpacing={"-0.01rem"}
                  pb={{ base: "2rem" }}
                >
                  Our authentication card enables you to make payments from any
                  location in Nigeria. Shop online and offline with confidence
                  knowing that your sensitive data is protected.
                </Text>

                <SimpleGrid
                  columns={2}
                  spacingX={["2rem", "6.25rem"]}
                  spacingY="2.38rem"
                  mb={["5rem", "4.38rem"]}
                >
                  {brokerPoints.map((point, index) => (
                    <Flex key={index} textAlign={"start"} pb={{ base: "1rem", md: "0" }}>
                      <CheckIcon boxSize={"18px"} mr="1rem" />{" "}
                      <Text
                        color="#000"
                        fontSize="1.141rem"
                        className={dmsansBold.className}
                        letterSpacing={"0.01144rem"}
                        lineHeight="142%"
                      >
                        {point}
                      </Text>
                    </Flex>
                  ))}
                </SimpleGrid>

                <Box w={"100%"} m={"auto"} >
                  <Link href={"/broker"}>
                    <Button
                      variant="solid"
                      w={"13.75rem"}
                      h={"3.875rem"}
                      borderRadius="0.62144rem"
                      background="#000"
                      _hover={{
                        background: "#222",
                      }}
                    // ml={["5rem","0"]}

                    >
                      <Text
                        color="#FFF"
                        fontSize="1.45rem"
                        className={dmsansBold.className}
                        lineHeight="2.71944rem"
                        letterSpacing="-0.00831rem"
                      >
                        Start earning
                      </Text>
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
