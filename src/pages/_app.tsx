import React from 'react';
import { AppProps } from 'next/app';

import { Container } from '../components';

import '../themes/styles/typography.css';

import GlobalStyles from '../themes/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
