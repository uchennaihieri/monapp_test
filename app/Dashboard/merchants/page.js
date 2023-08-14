'use client'
import React, { ReactNode, useState } from "react";
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Image,
    InputGroup,
    InputLeftElement,
    Input,
    Spacer,
    Button,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Heading,
    Divider,
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { DM_Sans, Rubik } from "next/font/google";
import { BsChevronDown, BsDot } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import NewDash from "../layout";
import MerchantBoxCard from "@/components/merchantBoxCard";
import AuthComponent from "@/services/AuthComponent";

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });
const dmsansbold = DM_Sans({ weight: "500", subsets: ["latin"] });
const rubik = Rubik({ weight: ["300", "400"], subsets: ["latin"] });

function merchants() {
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

export default merchants;
