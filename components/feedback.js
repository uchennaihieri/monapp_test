'use client'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Icon,
    Flex,
    Image,
    Text,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    useToast,
} from '@chakra-ui/react';
import { Roboto_Slab } from "next/font/google";
import { useState } from 'react';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { Axios } from 'axios';


const roboto = Roboto_Slab({ weight: '400', subsets: ['latin'] })



const Feedback= ({heading, message, imageType}) => {
    const toast = useToast()
    const router = useRouter()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [loadingState, setLoadingState] = useState(false);
    const [qrImage, setQrimage] = useState('');






    return (


        <Flex
          flexDirection='column'
          justify='center'
          align='center'
            w={{ base: "27.93rem", md: "37.93rem" }}
            h="35.37rem"
            py={'4.5rem'} px={'4.8rem'}
            
            
            >

<Box mb={{ base: '2.75rem', md: "2.06rem" }}>
                    <Image src={`${imageType}.svg`} alt='feedback image' w={'25.17rem'} h={'auto'} />
     </Box>
<Text mb={{ base: '1.75rem', md: "1.06rem" }} textAlign={'center'}>{heading}</Text>
<Text textAlign={'center'}>{message}</Text>

        </Flex>
    )
}

export default Feedback