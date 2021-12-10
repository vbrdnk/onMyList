import type { NextPage } from 'next';
import { Box, Flex, Stack } from '@chakra-ui/react';

import LoginButton from '@/components/LoginButtons';
import Page from '@/components/Layouts/PageLayout';
import { LogoIcon } from '@/styles/icons/icons';

const LoginPage: NextPage = () => {
  return (
    <Page name="Login" path="/login">
      <Flex align="center" justify="center" h="100vh" backgroundColor={['white', 'gray.100']}>
        <Stack
          backgroundColor="white"
          borderRadius={[0, 8]}
          maxWidth="400px"
          px={8}
          py={12}
          shadow={[null, 'md']}
          spacing={4}
          w="100%"
        >
          <Flex justify="center">
            <Box as="a" href="/" aria-label="Back to homepage">
              <LogoIcon color="black" size="56px" mb={4} />
            </Box>
          </Flex>
          <LoginButton />
        </Stack>
      </Flex>
    </Page>
  );
};

export default LoginPage;
