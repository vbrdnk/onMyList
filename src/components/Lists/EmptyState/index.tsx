import React, { PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

const EmptyState: React.FC<PropsWithChildren<ReactNode>> = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    borderRadius="8px"
    p={16}
    justify="center"
    align="center"
    direction="column"
  >
    <Heading size="lg" mb={2}>
      Hello stranger.
    </Heading>
    <Text>you&apos;ve got no lists so far... let&apos;s fix that</Text>
    <Link href="/login">
      <Button mt={4}>make a list</Button>
    </Link>
  </Flex>
);

export default EmptyState;
