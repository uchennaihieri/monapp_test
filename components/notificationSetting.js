import { Box, Button, ButtonGroup, Flex, FormControl, FormLabel, Spacer, Switch, Text } from '@chakra-ui/react'
import { DM_Sans } from "next/font/google"
import React from 'react'

const dmsansextra = DM_Sans({ weight: '700', subsets: ['latin'] })

function NotificationSetting() {
    return (
        <Box w={{base:'100%',md:'730px'}} minH='100vh' borderRadius='8px' border='0.6px solid #CFD0D3' bg='#FFFFFF' p='36px'>
            <Box >
                <Text mb='27px'>Alerts</Text>
                <Box mb="21.87px" >
                    <Flex flexDirection='row' align='center' justify='space-between'>
                        <Text> Enable email alerts? </Text>
                        <Switch size={'lg'} variant="custom" id='email-alerts' />

                    </Flex>
                </Box>
                <Box mb="21.87px" >
                    <Flex flexDirection='row' align='center' justify='space-between'>
                        <Text> Enable email alerts? </Text>
                        <Switch size={'lg'} variant="custom" id='email-alerts' />

                    </Flex>
                </Box>



            </Box>
            <ButtonGroup mt='88px' gap={{base:'1.125em',md:'18px'}} flexWrap='wrap' justifyContent='center'>
                <Button variant='solid' colorScheme='blackAlpha' w={{base:'100%',md:'12.625em'}}  h='54px' borderRadius={'2px'} bg='rgba(0, 0, 0, 1)' ><Text className={dmsansextra.className} fontSize={'16px'} color='#FFFFFF' fontWeight={700} lineHeight='21px' >Save and Update</Text></Button>
                <Button variant='outline' colorScheme='blackAlpha' w={{base:'100%',md:'12.625em'}}  h='54px' borderRadius={'2px'}  ><Text className={dmsansextra.className} fontSize={'16px'} color='#000000' fontWeight={700} lineHeight='21px' >Cancel</Text></Button>

            </ButtonGroup>
        </Box>
    )
}

export default NotificationSetting