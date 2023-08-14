import { Box, Button, ButtonGroup, FormControl, FormLabel, HStack, IconButton, Input, Text } from '@chakra-ui/react'
import { DM_Sans } from "next/font/google"
import React from 'react'
import { AiOutlinePicture } from 'react-icons/ai'


const dmsansextra = DM_Sans({ weight: '700', subsets: ['latin'] })

function ProfileSetting() {
    return (
        <Box w={{base:'100%',md:'730px'}} minH='100vh' borderRadius='8px' border='0.6px solid #CFD0D3' bg='#FFFFFF' p='36px'>
            <form>
                <Text mb='27px'>Basic Informations</Text>
                <HStack mb='32px'><IconButton icon={<AiOutlinePicture fontSize={'20px'} />} w='36px' h='36px' isRound /> <Text> Upload New Image</Text></HStack>
                <Box mb="21.87px">
                    <FormControl id="firstName" >
                        <FormLabel >First Name</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="text" placeholder='Legal first name' />

                    </FormControl>
                </Box>

                <Box mb="21.87px">
                    <FormControl id="lastname" >
                        <FormLabel >Last Name</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="text" placeholder='Legal last name' />

                    </FormControl>
                </Box>
                <Box mb="21.87px">
                    <FormControl id="email" >
                        <FormLabel>Email</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="email" placeholder='Enter your email' />

                    </FormControl>
                </Box>
                <Box mb="21.87px">
                    <FormControl id="email" >
                        <FormLabel>Phone Number</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="email" placeholder='Enter your email' />

                    </FormControl>
                </Box>
                <Box mb="21.87px">
                    <FormControl id="email" >
                        <FormLabel>Address</FormLabel>

                        <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="email" placeholder='Enter your email' />

                    </FormControl>
                </Box>


                <Box mt='63px'>
                    <Text mb='27px'>Submit your KYC</Text>
                    <Box mb="21.87px">
                        <FormControl id="firstName" >
                            <FormLabel >Confirm Identity</FormLabel>

                            <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="text" placeholder='Legal first name' />

                        </FormControl>
                    </Box>

                    <Box mb="21.87px">
                        <FormControl id="lastname" >
                            <FormLabel >Confirm Address</FormLabel>

                            <Input h="46px" borderRadius={'2px'} bg="#ffffff" border={'0.7px solid rgba(51, 51, 51, 0.45)'} type="text" placeholder='Legal last name' />

                        </FormControl>
                    </Box>

                </Box>


                <ButtonGroup mt='88px' gap={{base:'1.125em',md:'18px'}} flexWrap='wrap' justifyContent='center'>
                    <Button variant='solid' colorScheme='blackAlpha' w={{base:'100%',md:'12.625em'}} h='54px' borderRadius={'2px'} bg='rgba(0, 0, 0, 1)' ><Text className={dmsansextra.className} fontSize={'16px'} color='#FFFFFF' fontWeight={700} lineHeight='21px' >Save and Update</Text></Button>
                    <Button variant='outline' colorScheme='blackAlpha' w={{base:'100%',md:'12.625em'}} h='54px' borderRadius={'2px'}  ><Text className={dmsansextra.className} fontSize={'16px'} color='#000000' fontWeight={700} lineHeight='21px' >  Cancel</Text></Button>

                </ButtonGroup>
            </form>
        </Box>
    )
}

export default ProfileSetting