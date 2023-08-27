'use client'
import Loading from '@/components/loading'
import { personState } from '@/recoil/atoms'
import { auth, onAuthStateChanged } from '@/services/firebase'
import { Box, Button, Flex, HStack, Image } from '@chakra-ui/react'
import axios from 'axios'
import { Bree_Serif, DM_Sans } from 'next/font/google'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import baseURL from '../../services/baseUrl';

const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })

function AuthCover({ children }) {

    const [fetchData, setFetchData] = useState(false);
    const [person, setPerson] = useRecoilState(personState)
    const [loggedUser, setLoggedUser] = useState(undefined);
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error, isLoading } = useSWR(fetchData ? `${baseURL}/api/user/${loggedUser?.uid}` : null, fetcher)

    const router = useRouter()
    const goSupport = () => {
        router.push('/broker')
    }


    const goHome = () => {
        router.push('/')
    }







    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedUser(user)
                setFetchData(true)
            } else {
                setLoggedUser(false)
                router.push('/auth')
            }
        });
    }, [loggedUser]);


    useEffect(() => {
        updatePerson()
    }, [data]);


    const updatePerson = () => {
        setPerson(data)
    }



    if (loggedUser == undefined || isLoading) {
        return <Loading />;
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
                    <Button leftIcon={<AiOutlineLeft />} m="0" p="0" variant={'ghost'} _hover={{
                        backgroundColor: 'none'
                    }} color={'#000000'} fontSize={{ base: '1rem', md: "1.44rem" }}
                        fontWeight={400}
                        lineHeight={'4rem'}
                        className={bree.className}
                        onClick={goHome}
                    >Return Home</Button>

                    <Button onClick={goSupport} m="0" p="0" variant={'ghost'} _hover={{
                        backgroundColor: 'none'
                    }} color={'#000000'} fontSize={{ base: '0.75rem', md: "1rem" }}
                        fontWeight={500}
                        className={dmsansBold.className}
                    >Earn money as a Broker</Button>
                </Flex>
                <Box mb={{ base: '2.75rem', md: "2.06rem" }}>
                    <Image src={'/footerlogo.png'} alt='footer logo' w={'14.17rem'} h={'3.06rem'} />
                </Box>



                {children}






                <Flex>

                    <HStack mb="10.93rem">
                        <Image src={'/playstore.png'} alt='download from playstore' w={'9.25rem'} h={'3.03rem'} />
                        <Image src={'/appstore.png'} alt='download from appstore' w={'9.3rem'} h={'3.10rem'} />
                    </HStack>
                </Flex>


            </Flex>
        </>
    )
}

export default AuthCover