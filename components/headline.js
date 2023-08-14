import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { DM_Sans } from "next/font/google";


const dmsans = DM_Sans({ weight: '400', subsets: ['latin'] })


function StatsCard(props) {
    const { title, stat } = props;
    return (
        <Stat className={dmsans.className}
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
        </Stat>
    );
}

export default function Headline() {
    return (
        <Box maxW="7xl" mx={'auto'} pt={{ base: 12, md: 36 }} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                className={dmsans.className}
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Be a part of what we are building today
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'One'} stat={'team'} />
                <StatsCard title={'In'} stat={'36 Nigerian states'} />
                <StatsCard title={'Serving'} stat={'500+ different languages'} />
            </SimpleGrid>
        </Box>
    );
}