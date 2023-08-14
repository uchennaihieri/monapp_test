import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image, Container, VStack } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Bree_Serif, Roboto_Slab, DM_Sans } from "next/font/google"
import DeviceIcon from './Icons/deviceIcon';
import QrScanIcon from './Icons/qrScanIcon';
import ExchangeIcon from './Icons/exchangeIcon';
import CareIcon from './Icons/careIcon';


const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const roboto = Roboto_Slab({ weight: '300', subsets: ['latin'] })

const deviceIcon = <DeviceIcon boxSize={'2.75rem'} />
const qrScan = <QrScanIcon boxSize={'3.125rem'} />
const exchangeIcon = <ExchangeIcon boxSize={'2.57638rem'} />
const careIcon = <CareIcon boxSize={'1.6875rem'} />


const Feature = ({ title, text, icon }) => {
    return (

        <Flex justify={'left'} w={{ base: '22.25rem', md: '19.3125rem' }} h='17.4375rem' borderRadius={'0.875rem'} border={' 2px solid #FFF'} background='#000'
            boxShadow='4px 12px 28px 2px rgba(143, 143, 143, 0.12)' flexDirection={'column'} py='1.75rem' px='1.5rem'
        >
            <Flex flexDirection={'row'} justify={'center'} align={'center'} w='3.3125rem' h='3.3125rem' mb='1.88rem' borderRadius='0.34869rem'
                border='1.2px solid #FFF' > {icon}</Flex>
            <Box>
                <Text color={'#ffffff'} className='clashMedium' fontSize={{ base: "1.01rem", md: '1.25rem' }} mb={{ base: "0.91rem", md: '0.88rem' }} >{title}</Text>
                <Text fontWeight={400} className={dmsans.className} fontSize={{ base: "0.90rem", md: '1rem' }} lineHeight={{ base: "1.37rem", md: '1.15863rem' }} >{text}</Text>
            </Box>
        </Flex>
    );
};

export default function BlackSection() {



    return (
        <Box bg="#000000" color={'#FFFFFF'}
            bgImage="url('/blackSectionShades.png')"
            backgroundPosition="center"
            backgroundSize="cover">
            <Container maxW='100%' centerContent>
                <Box maxW={{ base: '22.62rem', md: "62.375rem" }}  mt={{ base: '3rem', md: "6.62rem" }} mb={{ base: '2.68rem', md: "5rem" }} align="center">
                    <Text
                        mb={{ base: '0.5rem', md: '1.75rem' }}
                        lineHeight={{ base: "2.26019rem", md: '3.66644rem' }}
                        fontWeight={600}
                        fontSize={{ base: '2rem', md: '3.4375rem' }}
                        className='clashSemiBold'
                        textAlign={"center"}
                        mt={{base:"1rem"}}

                    >Our exclusive services to help you make and receive payments</Text>
                    <Text
                        lineHeight={{ base: '1.73838rem', md: '1.73838rem' }}
                        fontWeight={500}
                        fontSize={{ base: "1.375rem", md: '1.25rem' }}
                        letterSpacing={'-0.01rem'}
                        className={dmsansBold.className}
                        w={["19.75rem", "100%"]}
                        mt={{base:"1rem"}}

                    >Take control of your finances and optimize your money flow like never before.</Text>
                </Box>
                <Flex flexDir={["column","row"]} gap={"5rem"} >

                    <VStack justify={'center'} align='center' spacing='3.62rem'>
                        <Feature icon={deviceIcon} title='Mobile & Web App' text='Intuitive features so you can effortlessly manage your financial transactions' />
                        <Feature icon={qrScan} title='Monapp QR Code Card' text='Shop online and offline with our QR code card. Free delivery and zero maintenance fee' />
                    </VStack>
<Flex flexDir={{ base:"column-reverse",md: "row"}} gap="5rem">
                    <Box overflow={'hidden'} >
                        <Image w={["21.46925rem",'34.48656rem']} h={["38.91756rem",'48.97763rem' ]}src='/bPhone.png' />
                    </Box>

                    <VStack justify={'center'} align='center' spacing='3.62rem'>
                        <Feature icon={exchangeIcon} title='Payment Links' text='Use Payment Links to collect payments swiftly. Share the link with your customers and they can pay through multiple channels.' />
                        <Feature icon={careIcon} title='First-Level Technical Support' text='No queue. Resolve your queries and concerns swiftly on the app with our one-on-one first-level support.' />
                    </VStack>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}