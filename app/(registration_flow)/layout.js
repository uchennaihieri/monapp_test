'use client'
import Loading from '@/components/loading'
import { personState } from '@/recoil/atoms'
import { Box, Button, Flex, HStack, Image } from '@chakra-ui/react'
import axios from 'axios'
import { Bree_Serif, DM_Sans } from 'next/font/google'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'

const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })

function AuthCover({ children }) {


    const router = useRouter()
    const goSupport = () => {
        router.push('/broker')
    }


    const goHome = () => {
        router.push('/')
    }




    return (
        <>
            <Flex
                flexDirection={'column'}
                minH={'100vh'}
                align={'center'}
                bg={'#FFFFFF'}>
                <Flex
                    mt={{ base: '1.5rem', md: "2.875rem" }}
                    width={{ base: '90%', md: "87.5rem" }}
                    flexDir={'row'}
                    justify="space-between"
                    mb={{ base: '3.5rem', md: '2.6rem' }}
                >
                    
                </Flex>
                <Box mb={{ base: '2.75rem', md: "2.06rem" }}>
                    <Image src={'/footerlogo.png'} alt='footer logo' w={'14.17rem'} h={'3.06rem'} />
                </Box>

                {children}

            </Flex>
        </>
    )
}

export default AuthCover