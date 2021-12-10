import React, { PropsWithChildren, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useAppSelector } from '@/app/hooks';
import { selectUser } from '@/features/authSlice';

const CreateListModal: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  const user = useAppSelector(selectUser);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();

  const handeCreateList = (values: { name: string; type: string }) => {
    // createCertificate({
    //   userId: user?.uid,
    //   issueDate: new Date().toISOString(),
    //   ...values,
    // });

    console.log(values);

    toast({
      title: 'Success!',
      description: 'We have added your certificate.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button
        id="add-certificate-modal-button"
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)',
        }}
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(handeCreateList)}>
          <ModalHeader fontWeight="bold">create new list</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>list name</FormLabel>
              <Input
                id="site-input"
                placeholder="my list"
                {...register('name', { required: true })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>list type</FormLabel>
              <Stack spacing={3} {...register('type', { required: true })}>
                <Select variant="flushed" placeholder="choose list type">
                  <option value="movies">movies list</option>
                  <option value="books">reading list</option>
                </Select>
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              id="create-site-button"
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateListModal;
