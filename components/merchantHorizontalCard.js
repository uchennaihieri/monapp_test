import { Avatar, Box, Checkbox, Divider, Flex, HStack, Text } from '@chakra-ui/react'
import { DM_Sans } from "next/font/google"
import React from 'react'


const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

function MerchantHorizontalCard() {
    return (
        <Box>

            <Flex _hover={{ cursor: 'pointer' }} direction={'row'} justify='space-between' width={'100%'} h='70px' bg='none' py='18px' align='start' >
                <HStack spacing='8px'>
                    <Avatar
                        w='36px'
                        h='36px'
                        src={
                            'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                    />
                    <Box textAlign={'left'} >  <Text fontSize={'14px'} mb='2px' lineHeight='18px' className={dmsans.className} color={'#000000'} fontStyle="normal" fontWeight={400}>Christopher Aniedi</Text>
                        <Text fontSize={'10px'} lineHeight='13px' className={dmsans.className} fontStyle="normal" fontWeight={400} color='rgba(0, 0, 0, 0.5)'>@chrisaniedi</Text>
                    </Box>


                </HStack>

                <Checkbox size='lg' colorScheme='black' defaultChecked>

                </Checkbox>

            </Flex>
            <Divider />
        </Box>
    )
}

export default MerchantHorizontalCard