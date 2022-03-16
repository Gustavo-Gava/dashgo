import Link from "next/link";

import { Box, Button, Checkbox, Flex, Heading, Icon, Text, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

const usersList = [1, 2, 3, 4, 5, 6]

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Box>
      <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center"> 
              <Heading size="lg" fontWeight="normal">Usuários</Heading>

              <Link href="/users/create" passHref>              
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  { isWideVersion && <Th>Data de cadastro</Th> }
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {usersList.map(item => (
                  <Tr key={item}>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>

                    <Td px={["4", "4", "6"]}>
                      <Box>
                        <Text fontWeight="bold">Gustavo Gava</Text>
                        <Text fontSize="sm" color="gray.300">gustavogava123@hotmail.com</Text>
                      </Box>
                    </Td>

                    { isWideVersion && <Td px={["4", "4", "6"]}>04 de Abril de 2021</Td> }

                    <Td px={["4", "4", "6"]}>  
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        iconSpacing={isWideVersion ? 1.5 : -0.5}
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        { isWideVersion && 'Editar'}
                      </Button>
                    </Td>
                  </Tr>
                ))}

              </Tbody>
            </Table>

            <Pagination />
          </Box>
      </Flex>
    </Box>
  )
}