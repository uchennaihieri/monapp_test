'use client'
import React, { ReactNode, useState, useEffect } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Spacer,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Divider,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { DM_Sans, Rubik } from "next/font/google";
import { BsChevronDown, BsDot } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import AllTransactions from "@/components/AllTransactions";
import { getTransactions } from "@/services/request";
import NewDash from "../layout";
import { useRecoilValue } from "recoil";
import { personState } from "@/recoil/atoms";
import dayjs from "dayjs";

const dmsans = DM_Sans({ weight: "400", subsets: ["latin"] });
const dmsansbold = DM_Sans({ weight: "500", subsets: ["latin"] });
const rubik = Rubik({ weight: ["300", "400"], subsets: ["latin"] });

function Transactions() {
  const [transactions, setTransactions] = useState([])

  const person = useRecoilValue(personState)
  console.log("person", person)

  useEffect(() => {
    getTransactions(setTransactions, person, 10);
  }, [person])
  console.log("i want to see transactions", transactions)

  return (

    <div>
      <Box ml={{ base: 0, md: "8rem" }} mt="18px" px="10px">
        <Flex dir="row" justify={"space-between"} align="center">
          <Text
            color="#141736"
            fontSize={["16px", "20px"]}
            className={dmsans.className}
            fontWeight={400}
            lineHeight="19px"
          >
            Transaction History
          </Text>
          <Button
            colorScheme="gray"
            variant="outline"
            rightIcon={<BsChevronDown />}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
            color="#A5B3CD"
          >
            All Transactions
          </Button>
        </Flex>

        <Box dropShadow="lg" w="100%" minH="221px" my="26px">
          <Flex flexDir="column">
            <Flex overflow="auto">
              <Table
                variant="simple"
                bg="#FFFFFF"
                boxShadow={"0px 14px 54px rgba(0, 0, 0, 0.03);"}
                borderRadius={"8px"}
              >
                <Thead h="60px" bg="rgba(0, 0, 0, 0.04)" display={['none', 'table-head']}>
                  <Tr color="gray">
                    <Th w="104px" >S/N</Th>
                    <Th w="257px" >Name</Th>
                    <Th w="167px">Reference No</Th>
                    <Th w="174px">Amount</Th>
                    <Th w="180px">Date</Th>
                    <Th >Status</Th>
                  </Tr>
                </Thead>
                <Tbody
                  fontSize="14px"
                  className={dmsans.className}
                  fontWeight={400}
                >

                  {
                    (transactions === undefined || transactions.length === 0) ?
                      (
                        <Box
                          color="#141746"
                          h="100px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          textAlign="center"
                          fontWeight="bold"

                        >
                          No Transactions

                        </Box>
                      )
                      :
                      transactions?.map((transaction, index) => {
                        return (
                          <AllTransactions
                            key={index}
                            SN={index + 1}
                            amount={transaction?.amount}
                            Date={dayjs(transaction?.createdAt).format("DD, MMMM YYYY")}
                            sendername={transaction?.sendername}
                            status={transaction?.transactionStatus}
                            transactiontype={transaction?.transactiontype}
                            transactionId={transaction?.id.toUpperCase()}
                            transactionType={transaction?.transactionType}
                            transaction={transaction}

                          />
                        )
                      })
                  }
                </Tbody>
              </Table>

            </Flex>
          </Flex>
        </Box>
      </Box>
    </div>

  );
}

export default Transactions;