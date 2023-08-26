import {
  Box,
  Heading,
  Flex,
  Text,
  Card,
  Icon,
  VStack,
  Image,
  Spacer
} from "@chakra-ui/react";
import { Inter } from "next/font/google";



const inter = Inter({ weight: '500', subsets: ['latin'] })
const interBold = Inter({ weight: '600', subsets: ['latin'] })

function OurCommunity() {
  return (

    <>
      <VStack mt={["6rem", '15rem']} mb='5rem' pb={["10rem", "12rem"]} >
        <Flex flexDir={"column"} alignItems={"center"} justifyContent={'center'} mb={['2rem', '3rem']} gap='5' >
          <Text w={['18.8125rem', '39.125rem']} h={['4.375rem', '2.9375rem']} fontSize={['2rem', '2.625rem']} fontWeight={'700'} textAlign={'center'} className='clashSemiBold' lineHeight={['103%', '124%']}>Why our community love us</Text>
          <Text fontSize={['0.875rem', "1.125rem"]} w={['16.91294rem', '27.5rem']} h={['2.07569rem', '3.375rem']} lineHeight={['1.107rem', '1.8rem']} textAlign={"center"} >
          Don't just take our word, This is what customers are saying about Monapp

          </Text>
        </Flex>


        <Flex
          flexDirection={"row"}

          w={'100%'}
          overflowX={"auto"}
          // alignItems={['flex-start',"center"]}
          justifyContent={['flex-start', 'center']}

        >
          <Flex flexDirection={'row'} pl={['1rem', '']} gap={"1.5rem"} >

            <Flex
              borderRadius={['0.47206rem', "14.045px"]}
              w={['14.79081rem', '27.504rem']}
              h={['8.23463rem', '15.3125rem']}
              bg="#fff"
              boxShadow=" 0px 3.1210196018218994px 17.165607452392578px 0px rgba(21, 19, 91, 0.04), 0px 2.340764284133911px 4.681528568267822px 0px rgba(51, 71, 255, 0.01), 0px 0.7802549004554749px 3.1210196018218994px 0px rgba(20, 20, 43, 0.01)"
              py='1.9rem' px='1.56rem'

            >
              <Flex h='100%' flexDirection={'column'} justify={'space-between'}  >
                <Box >
                  <Text className={interBold.className} fontSize={['0.5245rem', "0.97531rem"]} w={['9.597rem', '17.84588rem']} h={['0.83919rem', '1.5605rem']} fontWeight={'600'} color="#14142B" lineHeight={['0.89188rem', '1.65844rem']}>
                    “Beat service ever. Fast and reliable”
                  </Text>
                  <Text className={inter.className} fontSize={['0.41963rem', "0.78025rem"]} w={['11.30294rem', '21.01813rem']} h={['0.1.65219rem', '3.07225rem']} color="#6E7191" mt="0.5rem" lineHeight={['0.68188rem', '1.26794rem']} >
                    I have been using this for months on a regular and is just
                    everything you will ever need to buy, sell and transact. Their
                    fees are overwhelming too. Keep up guys.
                  </Text>
                </Box>

                <Flex justify={"space-between"} align={"center"} mt={['0.8rem', '']}>
                  <Flex >
                    <Image
                      w={['1.67838rem', '3.121rem']}
                      h={['1.67838rem', '3.121rem']}
                      src={"/playstorelogo.png"}
                      mr="1rem"
                    />
                    <Flex flexDirection={'column'} justify={'center'}>
                      <Text className={interBold.className} fontSize={['0.39338rem', '0.7315rem']} color='#14142B'
                        lineHeight={['0.52444rem', '0.97525rem']} mb='0.25rem'>Emmanuel Davies</Text>
                      <Text color="#6E7191" className={inter.className} fontSize={['0.39338rem', '0.7315rem']}
                        lineHeight={['0.52444rem', '0.97525rem']}>review</Text>
                    </Flex>
                  </Flex>
                  <Image src="/stars-coin.svg"
                    w={['4.22169rem', '5.8125rem']} h={['0.70363rem', '0.7315rem']}
                  />
                </Flex>

              </Flex>
            </Flex>

            <Flex
              borderRadius={['0.47206rem', "14.045px"]}
              w={['14.79081rem', '27.504rem']}
              h={['8.23463rem', '15.3125rem']}
              bg="#fff"
              boxShadow=" 0px 3.1210196018218994px 17.165607452392578px 0px rgba(21, 19, 91, 0.04), 0px 2.340764284133911px 4.681528568267822px 0px rgba(51, 71, 255, 0.01), 0px 0.7802549004554749px 3.1210196018218994px 0px rgba(20, 20, 43, 0.01)"
              py='1.9rem' px='1.56rem'

            >
              <Flex h='100%' flexDirection={'column'} justify={'space-between'}  >
                <Box>
                  <Text className={interBold.className} fontSize={['0.5245rem', "0.97531rem"]} w={['9.597rem', '17.84588rem']} h={['0.83919rem', '1.5605rem']} fontWeight={'600'} color="#14142B" lineHeight={['0.89188rem', '1.65844rem']}>
                    “Beat service ever. Fast and reliable”
                  </Text>
                  <Text className={inter.className} fontSize={['0.41963rem', "0.78025rem"]} w={['11.30294rem', '21.01813rem']} h={['0.1.65219rem', '3.07225rem']} color="#6E7191" mt="0.5rem" lineHeight={['0.68188rem', '1.26794rem']} >
                    I have been using this for months on a regular and is just
                    everything you will ever need to buy, sell and transact. Their
                    fees are overwhelming too. Keep up guys.
                  </Text>
                </Box>

                <Flex justify={"space-between"} align={"center"} mt={['0.8rem', '']} >
                  <Flex >
                    <Image
                      w={['1.67838rem', '3.121rem']}
                      h={['1.67838rem', '3.121rem']}
                      src={"/appstorelogo.png"}
                      mr="1rem"
                    />
                    <Flex flexDirection={'column'} justify={'center'}>
                      <Text className={interBold.className} fontSize={['0.39338rem', '0.7315rem']} color='#14142B'
                        lineHeight={['0.52444rem', '0.97525rem']} mb='0.25rem'>Emmanuel Davies</Text>
                      <Text color="#6E7191" className={inter.className} fontSize={['0.39338rem', '0.7315rem']}
                        lineHeight={['0.52444rem', '0.97525rem']}>review</Text>
                    </Flex>
                  </Flex>
                  <Image src="/stars-coin.svg"
                    w={['4.22169rem', '5.8125rem']} h={['0.70363rem', '0.7315rem']}
                  />
                </Flex>

              </Flex>
            </Flex>

            <Flex
              borderRadius={['0.47206rem', "14.045px"]}
              w={['14.79081rem', '27.504rem']}
              h={['8.23463rem', '15.3125rem']}
              bg="#fff"
              boxShadow=" 0px 3.1210196018218994px 17.165607452392578px 0px rgba(21, 19, 91, 0.04), 0px 2.340764284133911px 4.681528568267822px 0px rgba(51, 71, 255, 0.01), 0px 0.7802549004554749px 3.1210196018218994px 0px rgba(20, 20, 43, 0.01)"
              py='1.9rem' px='1.56rem'

            >
              <Flex h='100%' flexDirection={'column'} justify={'space-between'}  >
                <Box>
                  <Text className={interBold.className} fontSize={['0.5245rem', "0.97531rem"]} w={['9.597rem', '17.84588rem']} h={['0.83919rem', '1.5605rem']} fontWeight={'600'} color="#14142B" lineHeight={['0.89188rem', '1.65844rem']}>
                    “Beat service ever. Fast and reliable”
                  </Text>
                  <Text className={inter.className} fontSize={['0.41963rem', "0.78025rem"]} w={['11.30294rem', '21.01813rem']} h={['0.1.65219rem', '3.07225rem']} color="#6E7191" mt="0.5rem" lineHeight={['0.68188rem', '1.26794rem']} >
                    I have been using this for months on a regular and is just
                    everything you will ever need to buy, sell and transact. Their
                    fees are overwhelming too. Keep up guys.
                  </Text>
                </Box>

                <Flex justify={"space-between"} align={"center"} mt={['0.8rem', '']}>
                  <Flex >
                    <Image
                      w={['1.67838rem', '3.121rem']}
                      h={['1.67838rem', '3.121rem']}
                      src={"/playstorelogo.png"}
                      mr="1rem"
                    />
                    <Flex flexDirection={'column'} justify={'center'}>

                      <Text className={interBold.className} fontSize={['0.39338rem', '0.7315rem']} color='#14142B'
                        lineHeight={['0.52444rem', '0.97525rem']} mb='0.25rem'>Emmanuel Davies</Text>
                      <Text color="#6E7191" className={inter.className} fontSize={['0.39338rem', '0.7315rem']}
                        lineHeight={['0.52444rem', '0.97525rem']}>review</Text>
                    </Flex>
                  </Flex>
                  <Image src="/stars-coin.svg"
                    w={['4.22169rem', '5.8125rem']} h={['0.70363rem', '0.7315rem']}
                  />
                </Flex>

              </Flex>
            </Flex>


          </Flex>


        </Flex>


      </VStack>

    </>
  )
}

export default OurCommunity