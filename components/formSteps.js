import React, { useState } from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    InputLeftAddon,
    InputGroup,
    useColorModeValue,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';



export default function FormSteps() {
    const [show, setShow] = React.useState(false);
    const [location, setLocation] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [loadingState, setLoadingState] = useState(false);
    const handleClick = () => setShow(!show);
    const locations = [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
    ]
    const toast = useToast();




    return (
        <>
            <Box
                color="white"
                shadow={'xl'}
                border={'1px solid'}
                borderColor={useColorModeValue('gray.800', 'gray.500')}
                rounded={'lg'}
                maxW="7xl" mt={{ base: 12, md: 26 }} mx={{ base: 2, sm: 12, md: 17 }}

                p={6}
                as="form">
                <>

                    <Flex>
                        <FormControl mr="5%">
                            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                                First name
                            </FormLabel>
                            <Input value={firstName} focusBorderColor="gray.300" onChange={e => setFirstName(e.target.value)} id="first-name" placeholder="First name" />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                Last name
                            </FormLabel>
                            <Input value={lastName} focusBorderColor="gray.300" id="last-name" onChange={e => setLastName(e.target.value)} placeholder="First name" />
                        </FormControl>
                    </Flex>
                    <FormControl mt="2%">
                        <FormLabel htmlFor="email" fontWeight={'normal'}>
                            Email address
                        </FormLabel>
                        <Input value={email} focusBorderColor="gray.300" id="email" onChange={e => setEmail(e.target.value)} type="email" placeholder="Email address" />
                    </FormControl>
                    <Flex mt="2%">
                        <FormControl mr="5%">

                            <FormLabel
                                htmlFor="country"
                                fontWeight={'normal'}
                            >
                                State
                            </FormLabel>
                            <Select value={location}
                                onChange={e => setLocation(e.target.value)}
                                id="country"
                                name="country"
                                autoComplete="country"
                                placeholder="Select option"
                                focusBorderColor="gray.300"
                                shadow="sm"
                                bg="white"
                                color="black"
                                w="full"
                                rounded="md">
                                {locations?.map((loc, index) => <option key={index} value={loc}>{loc}</option>)}

                            </Select>
                        </FormControl>

                        <FormControl >
                            <FormLabel
                                fontWeight="normal"
                            >
                                Phone Number
                            </FormLabel>
                            <InputGroup >
                                <InputLeftAddon
                                    color={'black'}
                                    rounded="md">
                                    +234
                                </InputLeftAddon>
                                <Input
                                    value={phoneNumber}
                                    onChange={e => setPhoneNumber(e.target.value)}
                                    type="number"
                                    placeholder="7012345678"
                                    focusBorderColor="gray.300"
                                    rounded="md"
                                />
                            </InputGroup>
                        </FormControl>

                    </Flex>



                    <FormControl  >
                        <FormLabel
                            htmlFor="street_address"
                            fontWeight="normal"

                            mt="2%">
                            Home address
                        </FormLabel>
                        <Input
                            value={address}
                            type="text"
                            name="street_address"
                            id="street_address"
                            placeholder="Home address"
                            autoComplete="street-address"
                            focusBorderColor="gray.300"
                            shadow="sm"
                            w="full"
                            rounded="md"
                            onChange={e => setAddress(e.target.value)}
                        />
                    </FormControl>

                </>
                <Button
                    mt="5%"
                    w="7rem"
                    onClick={Submit}
                    isLoading={loadingState}
                    loadingText=''
                    _hover={{
                        color: "black",
                        bg: 'white'
                    }}
                    colorScheme="gray"
                    variant="outline">
                    Submit
                </Button>

            </Box>
        </>
    );
}