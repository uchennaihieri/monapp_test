import {
  Box,
  Icon,
  Text,
  Flex,
  VStack,
  HStack,
  Center,
  useToast,
  Link,
} from "@chakra-ui/react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { useRouter } from "next/navigation";
import localFont from "@next/font/local";
import Image from "next/image";

const dmsans = localFont({ src: "../public/fonts/dm-sans.ttf" });
const jost = localFont({ src: "../public/fonts/jost.ttf" });

export default function FooterSection() {
  const toast = useToast();

  const getApp = () => {
    toast({
      title: "Sorry, you cannot get the app at this time.",
      description:
        'This app is only available to pilot users for now. We still have open slots in our pilot which you can join by filling the form on our "work with us" page or simply sign up to be notified when we are available for public use',
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const router = useRouter();
  const goIssues = () => {
    router.push("/issues");
  };

  const goPrivacy = () => {
    router.push("/privacyPolicy");
  };

  const goTerms = () => {
    router.push("/termsofuse");
  };

  return (
    <Box
      bgColor="#000000"
      bgImg="url('/footerbg.svg')"
      color="#ffffff"
      mt="20rem"
    >
      {/* blue part */}
      <Center>
        <Box
          h={{ base: "36.4375rem", md: "24.8125rem" }}
          w={{ base: "24.375rem", sm: "83.75rem" }}
          mt={{ base: "-18.46rem", md: "-15.25rem" }}
          display={{ base: "flex", md: "block" }}
          borderRadius={"1rem"}
          justifyContent={"center"}
          bgColor={"#000000"}
          overflow={"hidden"}
          position={"relative"}
        >
          <Flex
            flexDirection={"column"}
            ml={["0", "7rem"]}
            mt={"3.5rem"}
            gap={"2rem"}
          >
            <Text
              lineHeight={{ base: "1.8rem", md: "3.3125rem" }}
              fontWeight={"600"}
              fontSize={{ base: "1.625rem", md: "3rem" }}
              color={"#fff"}
              className={jost.className}
              w={["20rem", "33.5625rem"]}
              textAlign={["center", "left"]}
            >
              Join community of 137k+ users start making payment today.
            </Text>

            <HStack gap={"1.5rem"}>
              <Image
                src={"/app-store.svg"}
                class="w-[8rem] h-[2.61rem] md:w-[10.81rem] md:h-[3.18rem] cursor-pointer"
                onClick={getApp}
                alt="app store"
                width={500}
                height={500}
              />
              <Image
                src={"/play-store.svg"}
                class="w-[8rem] h-[2.61rem] md:w-[10.81rem] md:h-[3.18rem] cursor-pointer"
                onClick={getApp}
                alt="app store"
                width={500}
                height={500}
              />
            </HStack>
          </Flex>
          {/* phone short */}
          <Flex
            position={"Absolute"}
            top={{ base: "22rem", md: "0rem" }}
            right={{ base: "10", md: "-2rem" }}
          >
            <Image
              width={500}
              height={500}
              alt="mobile-phone-image"
              src={"/monapp-phone.png"}
              className="object-center object-cover w-[20rem] md:w-[30.46875rem] md:h-[full] hidden md:block"
              loading="lazy"
            />
            <Image
              width={500}
              height={500}
              alt="mobile-phone-image"
              src={"/mobile-monapp-image.png"}
              className="object-center object-cover w-[20rem] md:w-[30.46875rem] md:h-[full] block md:hidden"
              loading="lazy"
            />
          </Flex>
        </Box>
      </Center>

      {/* lower part */}

      <Flex
        py={{ base: "2.75rem", md: "4.125rem" }}
        px={{ base: "3.68rem", md: "11.87rem" }}
        justify="space-evenly"
        gap={["10px", "40px"]}
        flexDirection={["column", "row"]}
      >
        {/* monapp logo */}
        <Flex
          flexDirection={"column"}
          gap={["10px", "40px"]}
          mb={{ base: "3rem", md: "1.5rem" }}
          justifyContent={"center"}
          alignItems={["center", "start"]}
        >
          <Image
            src={"/logo.png"}
            className="w-[14.42756rem] h-[2.625rem]"
            alt="logo-image"
            width={500}
            height={500}
          />
          <HStack display={"flex"} gap={"1rem"}>
            <Icon as={BsFacebook} fontSize="1.38rem" color="#ffffff" />
            <Icon as={BsTwitter} fontSize="1.38rem" color="#ffffff" />
            <Icon as={AiFillInstagram} fontSize="1.38rem" color="#ffffff" />
            <Icon as={AiFillLinkedin} fontSize="1.38rem" color="#ffffff" />
          </HStack>
        </Flex>

        {/* feat and com */}
        <Flex flexDirection={"row"} gap={"10rem"} mb={["4rem", "0rem"]}>
          <VStack fontSize="1rem" gap={".5rem"} alignItems={"start"}>
            <Text fontSize="1.125rem" lineHeight={"0.9375rem"}>
              Features
            </Text>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              QR Code{" "}
            </Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              Escrow Service
            </Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              Buy Now, Pay Later (BNPL)
            </Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              Saving Options
            </Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              Access To Loans
            </Link>
          </VStack>

          <VStack alignItems={"start"} gap={"0.5rem"}>
            <Text fontSize="1.125rem" lineHeight={"0.9375rem"}>
              Company
            </Text>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              About us
            </Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              Career
            </Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              Press
            </Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              Blog
            </Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              Contact
            </Link>
          </VStack>
        </Flex>

        {/* legal and app */}
        <Flex flexDirection={"row"} gap={"6rem"} mb={["4rem", "0rem"]}>
          <VStack alignItems={"start"} gap={"1rem"}>
            <Text fontSize="1.125rem" lineHeight={"0.9375rem"}>
              Legal
            </Text>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              Privacy
            </Link>
            <Link bg="none" _hover={"none"} fontSize={"0.75rem"}>
              Terms & Condition
            </Link>
          </VStack>

          <VStack alignItems={["center", "start"]} gap={"1rem"}>
            <Text fontSize="1.125rem" lineHeight={"0.9375rem"}>
              Get the app
            </Text>
            <Image
              src={"/qr.png"}
              alt="qr-code"
              className="hover:cursor-pointer"
              width={100}
              height={100}
            />
          </VStack>
        </Flex>
      </Flex>

      <Text
        display={"flex"}
        textAlign={{ base: "center", md: "center" }}
        justifyContent={"center"}
        color="#ffffff"
        opacity={"0.6"}
        lineHeight={{ base: "1.12rem", md: "1.9531rem" }}
        fontWeight={400}
        fontSize={{ base: "0.875rem", md: "1.5rem" }}
        className={dmsans.className}
        pb={"10"}
      >
        Copyright @ MONAPP {new Date().getFullYear()}. All Rights Reserved.
      </Text>
    </Box>
  );
}
