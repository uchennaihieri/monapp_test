import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  Button,
  Divider,
  HStack,
  useToast,
  Spacer,
  GridItem,
  Grid, Link
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import {
  AiFillStar,
  AiOutlineLine,
  AiOutlineRight,
  AiOutlineStar,
} from "react-icons/ai";
import {
  Bree_Serif,
  DM_Sans,
  Inter,
  Plus_Jakarta_Sans,
  Covered_By_Your_Grace,
} from "next/font/google";
import GoIcon from "./Icons/goIcon";
import EllipseIcon from "./Icons/ellipseIcon";

const plus = Plus_Jakarta_Sans({ weight: ["500", "700"], subsets: ["latin"] });

const dmsansBold = DM_Sans({ weight: "500", subsets: ["latin"] });
const dmsansExtreBold = DM_Sans({ weight: "700", subsets: ["latin"] });
const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });
const bree = Bree_Serif({ weight: "400", subsets: ["latin"] });
const grace = Covered_By_Your_Grace({ weight: "400", subsets: ["latin"] });

const gridData = [
  {
    title: "Pay in stores with QR code card",
    body: "No more digging through your wallet or dealing with slow and outdated payment methods. Send fast payments by simply scanning the merchant's QR code.",
  },
  {
    title: "Request and receive payments",
    body: "Send payment requests for your everyday needs. With just a tap on your phone, paying for bus fares and making purchases at the local market become a breeze.",
  },
  {
    title: "Low cost transaction fees",
    body: "We offer a competitive transaction fee of just 1.5%. With our transparent pricing, you can enjoy the majority of your hard-earned money without worrying about hidden charges or unexpected costs.",
  },
  {
    title: "Connect your contact and pay on the go",
    body: "Integrate with your existing contacts and eliminate the need to manually enter payment details. Simply select the contact you wish to pay and you can initiate a secure and swift transaction with a few taps.",
  },
];

const brokerPoints = [
  "Onboarding",
  "Training",
  "Technical support",
  "Customer support",
];

const GridBox = (data) => {
  return (
    <Flex
      h="16.12788rem"
      w="18.14385rem"
      borderRadius="0.67575rem"
      border="1.2px solid rgba(0, 0, 0, 0.20)"
      background="var(--gray-6, #F2F2F2)"
      boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.08)"
      px="1.39rem"
      py="2.69rem"
      flexDirection={"column"}
      className="mainCard"
      transition="background 1.5s"
      _hover={{
        background: "#000",
        color: "#FFF",
      }}
    >
      <Text
        fontSize="1.08125rem"
        fontWeight={600}
        lineHeight="1.35156rem"
        className="clashSemiBold"
        mb="0.69rem"
        id="cardTitle"
      >
        {data.data.title}
      </Text>
      <Text
        fontSize="0.67575rem"
        className={dmsans.className}
        fontWeight={400}
        lineHeight="0.94606rem"
        letterSpacing="-0.00425rem"
      >
        {data.data.body}
      </Text>

      <Spacer />
      <Link href={'/auth?task=signup'}>
        <Button
          alignSelf={{ base: "center", md: "start" }}
          variant={"unstyled"}
          m="0"
          p="0"
          bg="none"
          id="cardButton"
        >
          <Flex flexDirection={"row"} justify={"center"}>
            <Text
              fontSize="0.67575rem"
              className={dmsansBold.className}
              mr={"0.34rem"}
              fontWeight={500}
              lineHeight="0.94606rem"
              letterSpacing="-0.00425rem"
            >
              Get Started
            </Text>

            <GoIcon boxSize={"14px"} />
          </Flex>
        </Button>
      </Link>
    </Flex>
  );
};

export default function CardSection() {
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

  return (
    <Box bg="#FFFFFF">
      <Container
        maxW="79.81em"
        centerContent
        pt={{ base: "55.875rem", md: "35.25rem" }}
        pb={["6rem","15.25rem"]}
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={{ base: "center", md: "start" }}
          justify={{ base: "start", md: "space-between" }}
        >
          <Stack
            textAlign={{ base: "center", md: "start" }}
            w={{ base: "22.43rem", md: "31.93rem" }}
            spacing={4}
            mr={{ base: "0em", md: "5em" }}
          >
            <Text
              mt={"3.12rem"}
              mb={"2.12rem"}
              color="#000000"
              lineHeight={{ base: "2.37rem", md: "3.66644rem" }}
              fontWeight={600}
              fontSize={{ base: "1.75rem", md: "3.4375rem" }}
              className="clashSemiBold"
            >
              Why Monapp is different.
            </Text>
            <Text
              mb={{ base: "0.87rem", md: "1rem" }}
              color={"#818C96"}
              lineHeight={{ base: "1.5rem", md: "2.23838rem" }}
              fontWeight={500}
              fontSize={{ base: "1rem", md: "1.51888rem" }}
              className={dmsansBold.className}
              letterSpacing={"-0.01rem"}
            >
              We are dedicated to creating a cashless world with our features by
              making payment transactions easy and accessible for all.
            </Text>

            <Box w={"100%"} m={"auto"}>
              <Link href="/auth?task=signup">
                <Button
                  variant="solid"
                  w={{ base: "12.92731rem", md: "12.5rem" }}
                  h={"3.875rem"}
                  borderRadius="0.62144rem"
                  p={"0.28744rem 1.22275rem 0.28744rem 1.22163rem"}
                  mb={{ base: "3.42rem" }}
                  background="#000"
                  _hover={{
                    background: "#222",
                  }}
                >
                  <Text
                    color="#FFF"
                    fontSize="1.45rem"
                    className={dmsansBold.className}
                    lineHeight="2.71944rem"
                    letterSpacing="-0.00831rem"
                  >
                    Register now
                  </Text>
                </Button>
              </Link>
            </Box>
          </Stack>

          <Box>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns={["1fr", "repeat(4, 1fr)"]}
              gap={"2.88rem"}
            >
              {gridData.map((d, index) => (
                <GridItem colSpan={2} key={index}>
                  {" "}
                  <GridBox data={d} />
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Flex>
        <BrokerPart />
      </Container>
    </Box>
  );
}

const BrokerPart = () => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      mt={["5rem", "13.91rem"]}
    >
      <Text
        color="#2E2F35"
        fontSize={["2rem", "4rem"]}
        className="clashSemiBold"
        lineHeight={["3rem", "4.75rem"]}
        letterSpacing="-0.125rem"
        mb={["0", "0.3rem"]}
        w={[" 22.9375rem", "74.1875rem"]}
        textAlign={["center", ""]}
      >
        Everything you need to start earning
      </Text>
      <Text
        align="center"
        color="#A7B5D2"
        fontSize={["1.725rem", "4.375rem"]}
        className={grace.className}
        lineHeight={["3rem", "6.25rem"]}
        letterSpacing="-0.125rem"
        mb={["2.62rem", "5.12rem"]}
      >
        Join Our Payments Revolution
      </Text>

      <Flex
        gap={["3rem", "6.69rem"]}
        direction={["column", "row"]}
        align={["center", ""]}
      >
        <Box>
          <Box
            width={["19.14256rem", "37.625rem"]}
            height={["21.08225rem", "41.4375rem"]}
            borderRadius="0.875rem"
            border="1.885px solid rgba(0, 0, 0, 0.10)"
            background="#000"
            position="relative"
          >
            <Image
              borderRadius="0.875rem"
              src={"/supportOfficer.png"}
              h={["21.56788rem", "41.4375rem"]}
              w={["27.44188rem", "37.625rem"]}
              position={"absolute"}
              bottom={["0.5rem", "1.81rem"]}
              left={["0.5rem", "1.56rem"]}
            />
          </Box>
        </Box>
        <Box>
          <Stack
            textAlign={{ base: "center", md: "start" }}
            w={{ base: "22.43rem", md: "31.93rem" }}
            spacing={4}
          >
            <Text
              mb={["1.24rem", "2.12rem"]}
              color="#000000"
              lineHeight={{ base: "2.37rem", md: "3.25rem" }}
              fontWeight={600}
              fontSize={{ base: "1.75rem", md: "2.5rem" }}
              className="clashSemiBold"
            >
              Earn extra income from the comfort of your home.
            </Text>
            <Text
              mb={{ base: "1.85rem", md: "1rem" }}
              color={"#818C96"}
              lineHeight={{ base: "1.35569rem", md: "2.23838rem" }}
              fontWeight={500}
              fontSize={{ base: "0.77469rem", md: "1.25rem" }}
              className={dmsansBold.className}
              letterSpacing={"-0.01rem"}
            >
              As a payment broker, you&apos;ll be helping individuals experience
              the benefits ovative payment solutions while earning a fee on
              every transaction made by your clients.
            </Text>

            <SimpleGrid
              columns={2}
              spacingX="6.25rem"
              spacingY="2.38rem"
              mb="4.38rem"
            >
              {brokerPoints.map((point, index) => (
                <Flex key={index}>
                  <EllipseIcon boxSize={["10px", "18px"]} mr={["0.5rem", "1rem"]} />{" "}
                  <Text
                    color="#000"
                    fontSize={["0.74106rem", "1.141rem"]}
                    className={dmsansBold.className}
                    letterSpacing={"0.01144rem"}
                    lineHeight="142%"
                  >
                    {point}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
            <Box w={"100%"} m={"auto"}>
              <Link href={"/broker"}>
                <Button
                  variant="solid"
                  w={{ base: "17.5em", md: "13.75rem" }}
                  h={"3.875rem"}
                  mt={"2rem"}
                  borderRadius="0.62144rem"
                  background="#000"
                  _hover={{
                    background: "#222",
                  }}
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
  );
};

// <Box maxW={{ base: "19.81rem", md: "36.43em" }} mt={{ base: "5.37rem", md: "16.06rem" }} mb={{ base: "2.12rem", md: "6.75rem" }} align="center">
// <Text
//     mb={{ base: "0.37rem", md: '1rem' }}
//     letterSpacing={{ base: "-0.28px", md: '-0.5px' }}
//     lineHeight={{ base: "2.07rem", md: '3.125rem' }}
//     fontWeight={400}
//     fontSize={{ base: '1.5rem', md: '1.87rem' }}
//     className={bree.className}

// >Don&#39;t just take our words for it</Text>
// <Text
//     lineHeight={{ base: '1.21rem', md: '2.18rem' }}
//     fontWeight={400}
//     fontSize={{ base: '0.75rem', md: '1rem' }}
//     className={dmsans.className}
//     w={{ base: "15.25rem", md: "auto" }}
// >Hear what prospective users are saying about the smooth payment life.</Text>
// </Box>

// <Flex flexDirection={'row'} >
// <Box w={{ base: "15.52rem", md: '27.18rem' }} h={{ base: "16.81rem", md: '29.43rem' }} bg={'rgba(213, 214, 214, 0.15)'} px={{ base: "0.99rem", md: '1.75rem' }} border={'1px solid rgba(0, 0, 0, 0.2)'} mb={{ base: "2.25rem", md: "4.75rem" }} m="10px">
//     <Box h='65%' py={{ base: "1.35rem", md: '2.375rem' }}>
//         <Text
//             color={'#000000'}
//             lineHeight={{ base: "0.85rem", md: '1.5rem' }}
//             fontWeight={400}
//             fontSize={{ base: "0.57rem", md: '1rem' }}
//             className={dmsans.className}
//             textAlign={'justify'}>
//             I&#39;m pretty damn excited about this! As a business owner, you know how frustrating it can be to wait for payments to come in. Your product is the perfect solution to this problem!

//             I like the level of thought and care you&#39;ve put into this project. I know firsthand how hard you&#39;ve been working, and it&#39;s inspiring to see your dedication pay off. I can&#39;t wait to start using it for my own business.
//         </Text>
//     </Box>

//     <Divider />
//     <Box py={{ base: "1.28rem", md: '2.25rem' }} >
//         <Flex flexDirection={'row'} align={'center'}>
//             {/* <Image src={'https://picsum.photos/200/300.webp'} height={{ base: "2.53rem", md: '4.4rem' }} width={{ base: "2.46rem", md: '4.3rem' }} mr={{ base: "0.42rem", md: "0.75rem" }} border={'1px solid #D5D6D6'} borderRadius={{ base: "0.14rem", md: '0.25rem' }} /> */}
//             <Box>
//                 <Text color={'#000000'}
//                     lineHeight={{ base: "0.57rem", md: '0.875rem' }}
//                     fontWeight={500}
//                     fontSize={{ base: "0.81rem", md: '1.5rem' }}
//                     className={dmsansBold.className}
//                     mb={{ base: "0.57rem", md: "1rem" }}> Kelechi Agorua </Text>
//                 <Text
//                     color={'#000000'}
//                     lineHeight={{ base: "0.5rem", md: '0.875rem' }}
//                     fontWeight={400}
//                     fontSize={{ base: "0.64rem", md: '1.125rem' }}
//                     letterSpacing={{ base: "0.34rem", md: '0.6px' }}
//                     className={dmsans.className}
//                     mb={{ base: "0.49rem", md: "0.875rem" }}>Founder, Penn Hill Academy </Text>
//                 <HStack>
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />

//                     <Icon as={AiOutlineStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiOutlineStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                 </HStack>

//             </Box>
//         </Flex>
//     </Box>
// </Box>

// <Box w={{ base: "15.52rem", md: '27.18rem' }} h={{ base: "16.81rem", md: '29.43rem' }} bg={'rgba(213, 214, 214, 0.15)'} px={{ base: "0.99rem", md: '1.75rem' }} border={'1px solid rgba(0, 0, 0, 0.2)'} mb={{ base: "2.25rem", md: "4.75rem" }} m="10px" >
//     <Box h='65%' py={{ base: "1.35rem", md: '2.375rem' }}>
//         <Text
//             color={'#000000'}
//             lineHeight={{ base: "0.85rem", md: '1.5rem' }}
//             fontWeight={400}
//             fontSize={{ base: "0.57rem", md: '1rem' }}
//             className={dmsans.className}
//             textAlign={'justify'}>
//             Heard about your new payment product and I&#39;m stoked! As you know, getting paid on time is crucial for my business and your product seems like the perfect solution.

//             I&#39;m confident it&#39;s going to be a hit. I can&#39;t wait to start using it!

//         </Text>
//     </Box>

//     <Divider />
//     <Box py={{ base: "1.28rem", md: '2.25rem' }} >
//         <Flex flexDirection={'row'} align={'center'}>
//             <Box>
//                 <Text color={'#000000'}
//                     lineHeight={{ base: "0.57rem", md: '0.875rem' }}
//                     fontWeight={500}
//                     fontSize={{ base: "0.81rem", md: '1.5rem' }}
//                     className={dmsansBold.className}
//                     mb={{ base: "0.57rem", md: "1rem" }}> Akpa Uchenna Michael</Text>
//                 <Text
//                     color={'#000000'}
//                     lineHeight={{ base: "0.5rem", md: '0.875rem' }}
//                     fontWeight={400}
//                     fontSize={{ base: "0.64rem", md: '1.125rem' }}
//                     letterSpacing={{ base: "0.34rem", md: '0.6px' }}
//                     className={dmsans.className}
//                     mb={{ base: "0.49rem", md: "0.875rem" }}>CEO, Lemans Academy Limited</Text>
//                 <HStack>
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiOutlineStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                 </HStack>

//             </Box>
//         </Flex>
//     </Box>
// </Box>

// <Box w={{ base: "15.52rem", md: '27.18rem' }} h={{ base: "16.81rem", md: '29.43rem' }} bg={'rgba(213, 214, 214, 0.15)'} px={{ base: "0.99rem", md: '1.75rem' }} border={'1px solid rgba(0, 0, 0, 0.2)'} mb={{ base: "2.25rem", md: "4.75rem" }} m="10px">
//     <Box h='65%' py={{ base: "1.35rem", md: '2.375rem' }}>
//         <Text
//             color={'#000000'}
//             lineHeight={{ base: "0.85rem", md: '1.5rem' }}
//             fontWeight={400}
//             fontSize={{ base: "0.57rem", md: '1rem' }}
//             className={dmsans.className}
//             textAlign={'justify'}>Just wanted to say how excited I am for your new payment product! It seems like it will solve a major issue I&#39;ve been having and I&#39;m really looking forward to using it.

//             The features and functionality look amazing, and I can&#39;t wait to see how it will make my life easier.
//         </Text>
//     </Box>
//     <Divider />
//     <Box py={{ base: "1.28rem", md: '2.25rem' }} >
//         <Flex flexDirection={'row'} align={'center'}>

//             <Box>
//                 <Text color={'#000000'}
//                     lineHeight={{ base: "0.57rem", md: '0.875rem' }}
//                     fontWeight={500}
//                     fontSize={{ base: "0.81rem", md: '1.5rem' }}
//                     className={dmsansBold.className}
//                     mb={{ base: "0.57rem", md: "1rem" }}> Olajumoke Awotungase </Text>
//                 <Text
//                     color={'#000000'}
//                     lineHeight={{ base: "0.5rem", md: '0.875rem' }}
//                     fontWeight={400}
//                     fontSize={{ base: "0.64rem", md: '1.125rem' }}
//                     letterSpacing={{ base: "0.34rem", md: '0.6px' }}
//                     className={dmsans.className}
//                     mb={{ base: "0.49rem", md: "0.875rem" }}>CEO, Prettiejays Signature </Text>
//                 <HStack>
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiFillStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                     <Icon as={AiOutlineStar} fontSize={{ base: "0.35rem", md: "0.625rem" }} color="#DFA206" />
//                 </HStack>

//             </Box>
//         </Flex>
//     </Box>
// </Box>

// </Flex>
// <HStack mb={{ base: "4.29rem", md: "8.3125rem" }} >
// <Icon as={AiOutlineLine} fontSize={{ base: "2.24rem", md: "4.06rem" }} color="#000000" />
// </HStack>
