import { Button } from '@chakra-ui/react';

import { useAuth } from '@/app/auth';
import { GoogleIcon } from '@/styles/icons/icons';

const LoginButton = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <Button
      onClick={() => signInWithGoogle('/lists')}
      backgroundColor="white"
      color="gray.900"
      variant="outline"
      fontWeight="medium"
      leftIcon={<GoogleIcon />}
      mt={4}
      _hover={{ bg: 'gray.100' }}
      _active={{
        bg: 'gray.100',
        transform: 'scale(0.95)',
      }}
    >
      Continue with Google
    </Button>
  );
};

export default LoginButton;
