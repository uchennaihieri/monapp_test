'use client'
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";

export default function Loading() {
    const controls = useAnimation();

    const startHeartbeat = () => {
        controls.start({
            scale: [1, 1.05, 1],
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'reverse',
            },
        });
    };

    useEffect(() => {
        startHeartbeat();
    }, []);


    return (
        <Flex flexDir={'column'} w='100%' h='100vh' justify='center' align='center' bg='#000'>
            <Box as={motion.div}
                animate={controls}
                whileHover="hover"
                borderRadius="full"
            >
                <Image alt={'heartBeat'} boxSize="100px" objectFit="contain" src='/darkPageIcon.png' />
            </Box>

        </Flex>
    )
}