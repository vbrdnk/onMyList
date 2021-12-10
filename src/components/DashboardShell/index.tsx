import { PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import { Avatar, Box, Flex, Link as ChakraLink } from '@chakra-ui/react';

import Footer from '@/components/Footer';
import { useAppSelector } from '@/app/hooks';
import { selectUser } from '@/features/authSlice';

const DashboardShell: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  const user = useAppSelector(selectUser);
  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" mb={[8, 16]} w="full" borderTop="5px solid #0AF5F4">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            <Link href="/" passHref>
              <ChakraLink mr={4}>Home</ChakraLink>
            </Link>
            <Link href="/lists" passHref>
              <ChakraLink mr={4}>Lists</ChakraLink>
            </Link>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Link href="/account" passHref>
              <ChakraLink>
                <Avatar size="sm" src={user?.avatar} />
              </ChakraLink>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};
export default DashboardShell;
