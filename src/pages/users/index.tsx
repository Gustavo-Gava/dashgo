import Link from "next/link";

import { Box, Button, Checkbox, Flex, Heading, Icon, Text, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

import { useUsers } from "../../services/hooks/users/useUsers";

export default function UserList() {
  const { data, isLoading, error, isFetching } = useUsers()
    
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
              <Heading size="lg" fontWeight="normal">
                Usuários
                { !isLoading && isFetching && <Spinner ml="4" color="gray.500" size="sm" />}
              </Heading>

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

            { isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter dados dos usuários</Text>
              </Flex>
            ) : (
              <>
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
                    {data.map(user => (
                      <Tr key={user.email}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>

                        <Td px={["4", "4", "6"]}>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>

                        { isWideVersion && <Td px={["4", "4", "6"]}>{user.createdAt}</Td> }

                        <Td px={["4", "4", "6"]}>  
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            transition="300ms"
                            iconSpacing={isWideVersion ? 1.5 : -0.5}
                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                            _hover={{cursor: 'pointer', filter: 'opacity(0.8)'}}
                          >
                            { isWideVersion && 'Editar'}
                          </Button>
                        </Td>
                      </Tr>
                    ))}

                  </Tbody>
                </Table>

                <Pagination 
                  totalCountOfRegisters={200}
                  currentPage={5}
                  registersPerPage={10}
                  onPageChange={() => {}}
                />
              </>
            )}
          </Box>
      </Flex>
    </Box>
  )
}