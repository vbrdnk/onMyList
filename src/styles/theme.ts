import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  fonts: {
    heading: 'Montserrat',
    body: `IBM Plex Sans,-apple-system,BlinkMacSystemFont`,
  },
  fontWeight: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
});

export default theme;
