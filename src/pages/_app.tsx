import React from 'react';
import { Header } from '../components/Header';

import { GlobalStyles } from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      {GlobalStyles()}
    </React.Fragment>
  );
}