import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />

        <title>ToDo - xState</title>
        <meta name="title" content="ToDo - xState" />
        <meta name="description" content="ToDo - xState" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="msapplication-TileColor" content="#ea4c89" />
        <meta name="theme-color" content="#ea4c89" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

        <body id="root">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
