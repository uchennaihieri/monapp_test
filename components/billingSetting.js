
import { Box, Button, ButtonGroup, Checkbox, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import { DM_Sans } from "next/font/google"
import React from 'react'

const dmsansextra = DM_Sans({ weight: '700', subsets: ['latin'] })

function BillingSetting() {
    return (
        <Box w={{ base: '100%', md: '730px' }} minH='100vh' borderRadius='8px' border='0.6px solid #CFD0D3' bg='#FFFFFF' p='36px'>
            <form>
                <Text mb='27px'>Add Your Settlement Account </Text>

                <Box border='1px solid rgba(165, 180, 203, 0.2)' bg='rgba(165, 180, 203, 0.028)' borderRadius={'2px'} px='22px' py='26px'>

                    <Box mb="21.87px">
                        <FormControl id="firstName" >
                            <FormLabel >Select Bank</FormLabel>



                            <Select h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="text" placeholder='' >

                            </Select>
                        </FormControl>
                    </Box>

                    <Box mb="21.87px">
                        <FormControl id="lastname" >
                            <FormLabel >Account Number</FormLabel>

                            <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="text" placeholder='' />

                        </FormControl>
                    </Box>
                    <Box mb="21.87px">
                        <FormControl id="email" >
                            <FormLabel>Account Name</FormLabel>

                            <Input isReadOnly h="46px" borderRadius={'2px'} bg="rgba(51, 51, 51, 0.04)" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="email" placeholder='' />

                        </FormControl>
                    </Box>
                    <Checkbox colorScheme={'black'} size='lg' >Make Primary</Checkbox>
                    {/* leftIcon={<AddIcon />} */}
                    <Box mt='35.11px'>
                        <Button w='103px' h='34px' bg='#000000' border='0.357522px solid #A5B4CB' borderRadius='1.78761px' colorScheme='blackAlpha' ><Text fontSize={'14.3009px'} lineHeight='19px' letterSpacing={'-0.02em'} color='white'> Add New</Text></Button>
                    </Box>
                </Box>



                <Text mt='68px' mb='27px'>Delivery Details </Text>



                <Box mb="21.87px">
                    <FormControl id="firstName" >
                        <FormLabel >Delivery Address</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="text" placeholder='Legal first name' />

                    </FormControl>
                </Box>

                <Box mb="21.87px">
                    <FormControl id="lastname" >
                        <FormLabel >Delivery Contact</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="text" placeholder='Legal last name' />

                    </FormControl>
                </Box>
                <Box mb="21.87px">
                    <FormControl id="email" >
                        <FormLabel>Delivery Email</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="email" placeholder='Enter your email' />

                    </FormControl>
                </Box>

                <ButtonGroup mt='88px' gap={{ base: '1.125em', md: '18px' }} flexWrap='wrap' justifyContent='center'>
                    <Button variant='solid' colorScheme='blackAlpha' w={{ base: '100%', md: '12.625em' }} h='54px' borderRadius={'2px'} bg='rgba(0, 0, 0, 1)' ><Text className={dmsansextra.className} fontSize={'16px'} color='#FFFFFF' fontWeight={700} lineHeight='21px' >Save and Update</Text></Button>
                    <Button variant='outline' colorScheme='blackAlpha' w={{ base: '100%', md: '12.625em' }} h='54px' borderRadius={'2px'}  ><Text className={dmsansextra.className} fontSize={'16px'} color='#000000' fontWeight={700} lineHeight='21px' >Cancel</Text></Button>

                </ButtonGroup>

            </form>
        </Box>
    )
}

export default BillingSetting