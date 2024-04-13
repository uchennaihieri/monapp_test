'use client'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Icon,
    Text,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    useToast,
} from '@chakra-ui/react';
import { Roboto_Slab } from "next/font/google";
import { useEffect, useState } from 'react';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Loading from '@/components/loading';
import Feedback from '@/components/feedback';


const roboto = Roboto_Slab({ weight: '400', subsets: ['latin'] })



const Verify_user = ({searchParams}) => {
    const toast = useToast()
    const router = useRouter()
    const [show, setShow] = useState(false)
    const [result, setResult] = useState('none')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleClick = () => setShow(!show)
    const { register, handleSubmit } = useForm();
    const [loadingState, setLoadingState] = useState(false);
    const [qrImage, setQrimage] = useState('');



    useEffect(() => {
        const fetchData = async () => {

          try {
            const response = await axios.post(
                'https://us-central1-monapp-production.cloudfunctions.net/app/api/auth/verify-email',
                {
                  email: searchParams.email,
                  token: searchParams.token
                }
              );
            if (response.status === 200) {
                setResult('verified')
              } else {
                setResult('failed')
              };
          } catch (error) {
            setResult('failed')
          }
        };
    
        fetchData();
      }, []);

    return (

<>
{result == 'none' && <></>}

{result == 'verified' && <Feedback heading={'Email Verification Successful'} message={'You have successfully verified your email. Open your MonApp and continue to your dashboard'} imageType={'success'}  />}

{result == 'failed' && <Feedback heading={'Email Verification Failed'} message={'Your email verification process has failed. Please start the process again'} imageType={'success'}  />}
</>
     
    )
}

export default Verify_user