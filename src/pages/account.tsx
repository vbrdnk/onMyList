import { PropsWithChildren, ReactNode } from 'react';
import type { NextPage } from 'next';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';

import { useAuth } from '@/app/auth';
import { useAppSelector } from '@/app/hooks';
import Page from '@/components/Layouts/PageLayout';
import DashboardShell from '@/components/DashboardShell';
import { selectUser } from '@/features/authSlice';

const ListsUsage = () => (
  <StatGroup>
    <Stat>
      <StatLabel color="gray.700">List items</StatLabel>
      <StatNumber fontWeight="medium">∞</StatNumber>
      <StatHelpText>10,000 limit</StatHelpText>
    </Stat>

    <Stat>
      <StatLabel color="gray.700">Lists</StatLabel>
      <StatNumber fontWeight="medium">3/∞</StatNumber>
      <StatHelpText>Unlimited Lists</StatHelpText>
    </Stat>
  </StatGroup>
);

const SettingsTable: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => (
  <Box
    backgroundColor="white"
    mt={8}
    borderRadius={[0, 8, 8]}
    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
  >
    <Flex
      backgroundColor="gray.50"
      borderTopLeftRadius={[0, 8, 8]}
      borderTopRightRadius={[0, 8, 8]}
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      px={6}
      py={4}
    >
      <Flex justify="space-between" align="center" w="full">
        <Text textTransform="uppercase" fontSize="xs" color="gray.500" fontWeight="medium" mt={1}>
          Settings
        </Text>
        <Badge h="1rem" colorScheme="blue">
          Free
        </Badge>
      </Flex>
    </Flex>
    <Flex direction="column" p={6}>
      {children}
    </Flex>
  </Box>
);

const AccountPage: NextPage = () => {
  const { signout } = useAuth();
  const user = useAppSelector(selectUser);

  return (
    <Page name="Account" path="/account">
      <DashboardShell>
        <Flex direction="column" maxW="600px" align={['left', 'center']} margin="0 auto">
          <Flex direction="column" align={['left', 'center']} ml={4}>
            <Avatar w={['3rem', '6rem']} h={['3rem', '6rem']} mb={4} src={user?.avatar} />
            <Heading letterSpacing="-1px">{user?.name}</Heading>
            <Text>{user?.email}</Text>
          </Flex>
          <SettingsTable>
            <ListsUsage />
            <Text my={4}>
              Onmylist uses Stripe to update, change, or cancel your subscription. You can also
              update card information and billing addresses through the secure portal.
            </Text>
            <Flex justify="flex-end">
              <Button variant="ghost" ml={4} onClick={signout}>
                Log Out
              </Button>
            </Flex>
          </SettingsTable>
        </Flex>
      </DashboardShell>
    </Page>
  );
};

export default AccountPage;
