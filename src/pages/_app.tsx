import React from 'react';
import { AppProps } from 'next/app';

import { Container } from '../components';

import '../assets/styles/typography.css';

import GlobalStyles from '../assets/styles/global';

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
