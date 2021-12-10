import type { NextPage } from 'next';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { useAppSelector } from '@/app/hooks';
import Footer from '@/components/Footer';
import LoginButtons from '@/components/LoginButtons';
import Page from '@/components/Layouts/PageLayout';
import { selectIsLoggedIn } from '@/features/authSlice';
import { LogoIcon } from '@/styles/icons/icons';

const HomePage: NextPage = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Page path="/">
      <Box bg="gray.100" py={16} px={4}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <LogoIcon color="black" mb={2} />
          <Text mb={4} fontSize="lg" py={4}>
            Onmylist is the easiest way to create list of movies, books, places and share them with
            others.
          </Text>

          {isLoggedIn ? (
            <Link href="/lists" passHref>
              <Button
                as="a"
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                mt={4}
                maxW="200px"
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)',
                }}
              >
                View my lists
              </Button>
            </Link>
          ) : (
            <LoginButtons />
          )}
        </Flex>
      </Box>
      <Footer />
    </Page>
  );
};

export default HomePage;
