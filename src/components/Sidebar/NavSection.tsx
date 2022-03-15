import { Box, Stack, Icon, Link, Text, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";

interface NavSectionProps extends BoxProps {
  title: string
  children: ReactNode
}

export function NavSection({title, children, ...rest}: NavSectionProps) {
  return (
    <Box {...rest}>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="8">
        {children}
      </Stack>
    </Box>
  )
}