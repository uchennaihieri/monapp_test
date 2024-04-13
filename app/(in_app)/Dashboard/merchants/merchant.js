'use client'
import React from "react";
import {
    Box,
    Flex,
    Text,
    Button,
} from "@chakra-ui/react";
import { DM_Sans, Rubik } from "next/font/google";
import { BsChevronDown } from "react-icons/bs";
import MerchantBoxCard from "@/components/merchantBoxCard";

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });
const dmsansbold = DM_Sans({ weight: "500", subsets: ["latin"] });
const rubik = Rubik({ weight: ["300", "400"], subsets: ["latin"] });

const Merchants = () => {
    return (

        <div>


            <Box ml={{ base: 0, md: '8rem' }} mt='18px' px='10px'>
                <Flex dir='row' justify={'space-between'} align='center'>
                    <Text color='#141736' fontSize={{ base: '1em', md: '1.25em' }} className={dmsans.className} fontWeight={400} lineHeight='19px'>View Merchants</Text>
                    <Button
                        colorScheme='gray' variant='outline' rightIcon={<BsChevronDown />}
                        transition="all 0.3s"
                        _focus={{ boxShadow: 'none' }} color='#A5B3CD' fontSize={{ base: '1em', md: '1.25em' }}>
                        Search merchant

                    </Button>

                </Flex>



                {/* <Box dropShadow='lg'  > */}
                <Flex flexWrap={'wrap'} w='100%' my='26px' justify={{ base: 'center', md: 'flex-start' }} gap={'3'} dropShadow='lg'>
                    <MerchantBoxCard />
                    <MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard /><MerchantBoxCard />

                </Flex>

                {/* </Box> */}

            </Box>




















        </div>

    )
}

export default Merchants;
