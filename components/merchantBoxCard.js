import { Avatar, AvatarBadge, Box, Button, Center, Checkbox, CloseButton, HStack, Icon, Slide, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { DM_Sans } from "next/font/google"
import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BiNavigation } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import { IoCallOutline } from 'react-icons/io5'
import { TbMessageCircle } from 'react-icons/tb'

const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })

function MerchantBoxCard() {
         const { isOpen, onToggle } = useDisclosure()

    return (
        <>
        <Box  w={{base:'11.563em',md:'225.32px'}} h={{base:'15rem',md:'239px'}} p='16.39px' bg='#FFFFFF' borderRadius='8.19px' borderWidth={'0.2px'} mb='17.35' align='center' position='relative' >
            <Box w='fit-content' h='fit-content' borderRadius={'50%'} border='0.409664px solid #000000' position='relative'>
                <Avatar
                    border='4px solid white'
                    w={{base:'3.35rem',md:'6.5rem'}}
                    h={{base:'3.35rem',md:'6.5rem'}}
                    src={
                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                >
                    <AvatarBadge bg='green.500' />
                </Avatar>


            </Box>
            <Checkbox size='lg' colorScheme='black' defaultChecked position='absolute' right='16.39px' top='20.48px' >

            </Checkbox>
            <Box textAlign={'center'} mb='16.44px' mt='16.48px' >  
            <Text fontSize={'16.39px'} mb='6.29px' lineHeight='21.34px' className={dmsans.className} color={'#000000'} fontStyle="normal" fontWeight={400}>Christopher Aniedi</Text>
                <Text fontSize={'12.29px'} lineHeight='16px' className={dmsans.className} fontStyle="normal" fontWeight={400} color='rgba(0, 0, 0, 0.5)'>@chrisaniedi</Text>
            </Box>

            <Button onClick={onToggle} h='22.53px' w='93.2px' borderRadius='2.05px' bg='#000000' color='#FFFFFF' colorScheme={'blackAlpha'}><Text fontSize={'12.29px'} lineHeight='16px' className={dmsans.className} fontStyle="normal" fontWeight={400} letterSpacing='-0.006em'>View Details</Text></Button>
        </Box>


                        {/* mobile slide up  */}

                <Slide direction='bottom' in={isOpen} style={{ zIndex: 10, }}  >
                    <Box px={'7'} pt={'4'} color='black' mt='4' bg='white' rounded='md'shadow='md' h='38.5rem' borderTopLeftRadius={'24px'} borderTopRightRadius={'24px'} justifyContent={'center'} alignItems={'center'}
                    >
                    <HStack justify='space-between'  >
                      <Text fontSize='18px' fontWeight={'700'} lineHeight='23.44px' className={dmsans.className}>Merchants Info</Text>  

                    <CloseButton onClick={onToggle} size='lg' alignSelf={'flex-end'}/>
                    </HStack>

                        <VStack justify={'center'}>
                              <Avatar
                              my={'2.5rem'}
                    border='1px solid black'
                    w={{base:'6.125rem',md:'6.5rem'}}
                    h={{base:'6.125rem',md:'6.5rem'}}
                    src={
                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                >
                    <Icon as={BsDot} position='absolute' boxSize='2.25rem' right='-9px' top='0px' color='#000000' />
                    <AvatarBadge bg='green.500' />
                </Avatar>
                    <Text fontSize={'2rem'} mb='6.29px' lineHeight='21.34px' className={dmsans.className} color={'#000000'}  fontWeight={700}>Christopher Aniedi</Text>
                        <Text fontSize={'0.875rem'} lineHeight='1em' className={dmsans.className} fontStyle="normal" fontWeight={400} color='#000000'>+234 (0) 900 000 0000</Text>
                        <Text fontSize={'1.125rem'} lineHeight='1.465rem' className={dmsans.className} fontStyle="normal" fontWeight={400} color='blackAlpha.600' w='11.375rem' h='2.625rem' textAlign={'center'}>Olateju Crecent, Lekki Phase 1, Lagos</Text>
                      <HStack gap={'5'} py={'2rem'}>
                        <Center h={'3.375rem'} w={'3.375rem'} border='1px solid #000' borderRadius={'50%'} >
                       <Icon as={IoCallOutline} boxSize='1.5rem' color={'#000000'} />
                        </Center>
                        <Center h={'3.375rem'} w={'3.375rem'} border='1px solid #000' borderRadius={'50%'} >
                       <Icon as={TbMessageCircle} boxSize='1.5rem' color={'#000000'} />
                        </Center>
                        <Center h={'3.375rem'} w={'3.375rem'} border='1px solid #000' borderRadius={'50%'} >
                       <Icon as={BiNavigation} boxSize='1.5rem' color={'#000000'} />
                        </Center>
                       
                      </HStack>

                         <Button mt={'10'} h={'3.625rem'} w={'21.188rem'} bg={'#000000'} color={'white'} borderRadius={'4px'} justifyContent={'space-between'} >
                            <Text fontSize={'1.125rem'} lineHeight='1.465rem' className={dmsans.className} fontStyle="normal" fontWeight={400} color='white' >Allow Transactions</Text>
                            <Icon as={AiOutlineCheckCircle} boxSize='1.5rem' color={'#fff'} />
                            </Button>

                      
                        </VStack>
         
                    </Box>
                </Slide>


        </>
    )
}

export default MerchantBoxCard