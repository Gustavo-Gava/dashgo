import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex align="center">
      <Flex 
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        align="center"
        color="gray.200"
        maxW={400}
        bg="gray.800"
        position="relative"
        borderRadius="full"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{color: "gray.400"}}
        />

        <Icon as={RiSearchLine} />
      </Flex>
    </Flex>
  )
}