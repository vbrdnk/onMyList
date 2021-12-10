import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import { AuthProvider } from '@/app/auth';
import theme from '@/styles/theme';
import store from '@/app/store';

const GlobalStyle = () => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />{' '}
    </>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
