import React from 'react';
import { AppProps } from 'next/app';

import { Container } from '~/components';

import '~/themes/styles/typography.css';

import GlobalStyles from '~/themes/styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default App;
