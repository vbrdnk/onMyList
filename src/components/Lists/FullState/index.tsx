import React from 'react';
import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import CreateListModal from '@/components/CreateListModal';

const FullState: React.FC = () => {
  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      margin="0 auto"
      p={16}
      justify="center"
      direction="column"
    >
      <Heading size="lg" mb={2}>
        Where have you been?
      </Heading>
      <Text>I&apos;ve been keeping your lists safe and sound.</Text>
      <VStack spacing={4} mt={4} align="start">
        <Button rightIcon={<ChevronRightIcon />}>on my reading list</Button>
        <Button rightIcon={<ChevronRightIcon />}>on my watching list</Button>
        <Text>or</Text>
        {/*<Button leftIcon={<SmallAddIcon />}>create new list</Button>*/}
        <CreateListModal>create new list</CreateListModal>
      </VStack>
    </Flex>
  );
};

export default FullState;
