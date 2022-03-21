import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Gustavo Gava</Text>
        <Text color="gray.300" fontSize="small">
          gustavogava123@hotmail.com
        </Text>
      </Box>
      )}

      <Avatar size="md" src="https://avatars.githubusercontent.com/u/77810817?v=4"/>
    </Flex>
  )
}