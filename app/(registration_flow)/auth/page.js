'use client'
import {
    Text,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from '@chakra-ui/react';
import { Bree_Serif, DM_Sans, Roboto_Slab } from "next/font/google";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { getCountries } from 'libphonenumber-js'
import { useForm } from 'react-hook-form';
import { Signin } from '@/components/signIn';
import { Signup } from '@/components/signUp';

const dmsansBold = DM_Sans({ weight: '500', subsets: ['latin'] })
const bree = Bree_Serif({ weight: '400', subsets: ['latin'] })
const roboto = Roboto_Slab({ weight: '400', subsets: ['latin'] })

const robotoItalic = DM_Sans({ weight: '400', style: 'italic', subsets: ['latin'] })


const countryList = getCountries()







const Auth = () => {

    const [page, setPage] = useState(0)
    const { register, handleSubmit } = useForm();


    const router = useRouter()






    const goSupport = () => {
        router.push('/broker')
    }


    const goHome = () => {
        router.push('/')
    }



    const handleTabsChange = (index) => {
        setPage(index)
    }


    return (

        <>
            {/* <PageSeo title="Login/Signup  - Monapp" description="" /> */}



            <Tabs index={page} onChange={handleTabsChange} isFitted m="0" mb="2.92rem" p="0">
                <TabList>
                    <Tab color={'rgba(0, 0, 0, 0.4)'} borderBottomColor='transparent' _selected={{ color: '#000000', borderBottomColor: '#000000' }}><Text fontWeight={400}
                        lineHeight={'3.125rem'} letterSpacing={'-0.5px'}
                        className={bree.className} fontSize={'1.125rem'}>Sign in</Text></Tab>
                    <Tab color={'rgba(0, 0, 0, 0.4)'} borderBottomColor='transparent' _selected={{ color: '#000000', borderBottomColor: '#000000' }}><Text fontWeight={400}
                        lineHeight={'3.125rem'} letterSpacing={'-0.5px'}
                        className={bree.className} fontSize={'1.125rem'}>Sign up</Text></Tab>
                </TabList>

                <TabPanels m="0" p="0">
                    <TabPanel m="0" p="0">
                        <Signin />
                    </TabPanel>
                    <TabPanel m="0" p="0">
                        <Signup />
                    </TabPanel>
                </TabPanels>
            </Tabs>




        </>
    );
}




export default Auth