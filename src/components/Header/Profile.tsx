import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo Gava</Text>
        <Text color="gray.300" fontSize="small">
          gustavogava123@hotmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Gustavo Gava" />
    </Flex>
  )
}