import React from 'react';
import Link from 'next/link';
import { Link as ChakraLink, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex mb={8} mt={24} justify='center'>
      <Link href='/privacy' passHref>
        <ChakraLink fontSize='sm' mr={4} fontWeight='medium' color='gray.500'>
          Privacy
        </ChakraLink>
      </Link>
      <Link href='/terms' passHref>
        <ChakraLink fontSize='sm' mr={4} fontWeight='medium' color='gray.500'>
          Terms
        </ChakraLink>
      </Link>
      <Link href='/docs' passHref>
        <ChakraLink fontSize='sm' mr={4} fontWeight='medium' color='gray.500'>
          Docs
        </ChakraLink>
      </Link>
      <Link href='/' passHref>
        <ChakraLink fontSize='sm' mr={4} fontWeight='medium' color='gray.500'>
          Home
        </ChakraLink>
      </Link>
    </Flex>
  );
};

export default Footer;
