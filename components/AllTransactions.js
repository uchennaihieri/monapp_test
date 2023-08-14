import React, { useState } from 'react'
import { HStack, Image, Td, Text, Tr, Icon, useBreakpointValue, Box, Flex } from '@chakra-ui/react'
import { RxDotFilled } from 'react-icons/rx'
import TransactionDrawer from '@/components/transactionsDrawer'

function AllTransactions({ amount, Date, sendername, status, SN, transactionType, transactionId }) {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  //   const [selectedTransaction, setSelectedTransaction]=useState(null)


  const handleOpenDrawer = () => {
    // setSelectedTransaction(transaction);
    setIsDrawerOpen(true);
  }

  // fuction to handle closing the drawer
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <Tr h='79px' onClick={handleOpenDrawer}>
      <Td display={['none', 'table-cell']}>
        {SN}
      </Td>
      <Td> <HStack> {
        transactionType === "CR" ?
          <Image src={'/receiveImage.svg'} width={'24px'} height={'24px'} alt='receive' /> :
          <Image src={"/sentImage.svg"} width={"24px"} height={"24px"} alt='sent' />
      }

        <Text fontSize={["14px", "15px"]}>{sendername} </Text></HStack>
        <Box marginLeft={"2rem"} fontSize={"sm"}>
          {!isDesktop && <span>{Date}</span>}

        </Box>
      </Td>
      <Td display={['none', 'table-cell']}>{transactionId}</Td>
      <Td fontWeight={'bold'}>NGN {amount}
        <Box fontSize={"sm"} >
          {!isDesktop && <Flex align="center"><Icon as={RxDotFilled} boxSize={6} color="#27AE60" p="0px" />
            <Text fontWeight={"thin"}> {status} </Text></Flex>}

        </Box>
      </Td>
      <Td display={['none', 'table-cell']}>{Date}</Td>
      <Td display={['none', 'table-cell']}><HStack spacing={0}> <Icon as={RxDotFilled} boxSize={8} color='#27AE60' p='0px' />
        <Text > {status} </Text></HStack> </Td>
      <TransactionDrawer isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      // transaction={selectedTransaction} 
      />

    </Tr>

  )
}

export default AllTransactions