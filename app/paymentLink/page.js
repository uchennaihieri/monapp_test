'use client'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Icon,
  Text,
  Image,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
  Avatar,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  RadioGroup,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";

import { Bree_Serif, DM_Sans, Roboto_Slab } from "next/font/google";
import { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  serverTimestamp,
  setDoc,
  signInWithEmailAndPassword,
} from "@/services/firebase";
import PageSeo from "@/Seo/pageSeo";
import { collection, getDocs, query, where } from "firebase/firestore";

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });
const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });
const roboto = Roboto_Slab({ weight: "400", subsets: ["latin"] });

const robotoItalic = DM_Sans({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const PaymentLink = () => {
  const [page, setPage] = useState(0);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  useEffect(() => {
    const { task } = router.query;
    if (task == "signup") {
      setPage(parseInt(1, 10));
    } else {
      setPage(parseInt(0, 10));
    }
  }, [router.query]);

  console.log(page);

  const goSupport = () => {
    router.push("/workwithus");
  };

  const goHome = () => {
    router.push("/");
  };

  const handleTabsChange = (index) => {
    setPage(index);
  };

  return (
    <>
      <PageSeo title="Login/Signup  - Monapp" description="" />

      <Flex
        flexDirection={"column"}
        minH={"100vh"}
        align={"center"}
        bg={"#FFFFFF"}
      >
        <Flex
          direction={"column"}
          align="center"
          justify="center"
          mt={{ base: "3.2rem" }}
          mb={{ base: "2.5rem" }}
        >
          <Box
            style={{
              filter: "drop-shadow(0px 14px 54px rgba(0, 0, 0, 0.06))",
            }}
          >
            <Avatar
              size={"xl"}
              src={
                "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
          </Box>
          <Flex
            flexDirection={"column"}
            align="center"
            justify="center"
            mt="0.75rem"
          >
            <Text
              className={dmsans.className}
              color="black"
              fontSize={"16.07px"}
              lineHeight="12px"
              mb="8.73px"
              fontWeight={600}
            >
              {" "}
              Phillip Chatham Ansalem
            </Text>
            <Text
              className={dmsans.className}
              color="black"
              fontSize={"12px"}
              letterSpacing="0.409298px"
              lineHeight="10px"
              fontWeight={600}
            >
              @PhillipCA
            </Text>
          </Flex>
        </Flex>

        <Signin />

        <Flex
          direction={"column"}
          align="center"
          justify="center"
          mt={{ base: "2.87rem" }}
          mb={{ base: "2.75rem", md: "5.06rem" }}
        >
          <Text className={dmsans.className}>Secured by</Text>
          <Image src={"/footerlogo.png"} w={"10.25rem"} h={"auto"} />
        </Flex>
      </Flex>
    </>
  );
};


export const Signin = () => {
  const toast = useToast();
  const { handleSubmit } = useForm();
  const [loadingState, setLoadingState] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("1");

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const onSubmit = async (data) => {
    setLoadingState(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.pwd
      );
      const user = userCredential.user;
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast({
          title: "Sign in failed",
          description: "Incorrect password",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      } else if (error.code === "auth/user-not-found") {
        toast({
          title: "Sign in failed",
          description: "User does not exist",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      } else if (error.code === "auth/invalid-email") {
        toast({
          title: "Sign in failed",
          description: "Invalid email input",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }
    }

    setLoadingState(false);
  };

  return (
    <Box
      m="0px"
      borderRadius="2px"
      w={{ base: "27.93rem", md: "37.93rem" }}
      bg="#F9FAFC"
      border="1px solid rgba(0, 0, 0, 0.14);"
      py="4.5rem"
      px="4.8rem"
    >
      <Stack>
        <Box>
          <RadioGroup onChange={setValue} value={value}>
            <Accordion allowToggle>
              <AccordionItem
                mb="1.75rem"
                border="1px solid #CDCDCD"
                borderRadius="0.25rem"
                bg="#ffffff"
              >
                <h2>
                  <AccordionButton h="3.6rem">
                    <Box as="span" flex="1" textAlign="left">
                      Pay with Monapp
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb="2.5rem">
                  <Radio variant="long" value="1" mb="1.5rem">
                    Monapp Account
                  </Radio>
                  <Radio variant="long" value="2">
                    QR Code
                  </Radio>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border="1px solid #CDCDCD"
                borderRadius="0.25rem"
                bg="#ffffff"
              >
                <h2>
                  <AccordionButton h="3.6rem">
                    <Box as="span" flex="1" textAlign="left">
                      Pay with Other Options
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb="2.5rem">
                  <Radio value="3" variant={"long"}>
                    <Text noOfLines={1}>Use Debit card, USSD and more...</Text>
                  </Radio>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </RadioGroup>
        </Box>
        <Box>
          <FormControl id="password">
            <FormLabel className={roboto.className} mt="1.375rem">
              Enter Amount
            </FormLabel>
            <InputGroup mb="2.6rem">
              <Input
                h="3.6rem"
                borderRadius="0.125rem"
                bg="#ffffff"
                border="1px solid #D5D6D6"
              />
            </InputGroup>
          </FormControl>
        </Box>
        <Button
          isLoading={loadingState}
          loadingText="Please wait.."
          borderRadius="0.125rem"
          h="4rem"
          bg="#000000"
          color="white"
          _hover={{ bg: "black.400" }}
          onClick={handleModalOpen}
        >
          <Text fontSize="1.125rem" className={dmsans.className}>
            Make Payment
          </Text>
        </Button>

        {/* Modal */}

        <Modal
          isOpen={showModal}
          onClose={handleModalClose}
          blockScrollOnMount={false}
          isCentered
        >
          <ModalOverlay />
          <ModalContent maxW={["300px", "400px"]} py="10px">
            <ModalBody>
              {value === "1" && (
                // Modal content for Monapp Account
                // Add the desired content for Monapp Account modal
                <Box p="4px">
                  <FormControl>
                    <Text mb="10px" fontSize="15px">Signin to make payment</Text>
                    <FormLabel fontWeight={"light"} mt="10px">Enter Email Address</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents={"none"}
                        mt={"6px"}
                      ><Image src="/email.svg" alt="Image" /></InputLeftElement>
                      <Input
                        type="email"
                        placeholder="Enter your Email"
                        h="3.6rem"
                        borderRadius="0.125rem"
                        bg="#ffffff"
                        border="1px solid #D5D6D6"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontWeight={"light"} mt={"10px"}>Password</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        mt={"5px"}
                      ><Image src="/pwd.svg" alt="Image" /></InputLeftElement>
                      <InputRightElement
                        mt={"5px"}
                      ><Image src="/showpwd.svg" alt="Image" /></InputRightElement>
                      <Input
                        type="email"
                        placeholder="Enter your Email"
                        h="3.6rem"
                        borderRadius="0.125rem"
                        bg="#ffffff"
                        border="1px solid #D5D6D6"
                      />
                    </InputGroup>
                  </FormControl>

                  <Button
                    isLoading={loadingState}
                    loadingText="Please wait.."
                    borderRadius="0.125rem"
                    h="4rem"
                    w={"100%"}
                    bg="#000000"
                    color="white"
                    _hover={{ bg: "black.400" }}
                    my={"10px"}
                  >
                    <Text fontSize="1.125rem" className={dmsans.className}>
                      Confirm and Pay
                    </Text>
                  </Button>
                </Box>
              )}
              {value === "2" && (
                // Modal content for QR Code
                // Add the desired content for QR Code modal
                <Box >
                  <img src="QR.svg" alt="pay with QR code" />
                </Box>
              )}
              {value === "3" && <Text>content 3</Text>}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Stack>
    </Box>
  );
};

export default PaymentLink;
