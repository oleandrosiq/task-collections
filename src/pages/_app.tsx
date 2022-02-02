import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Header } from '../components/Header';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      {GlobalStyles()}
      <Toaster position='top-center' containerStyle={{ fontSize: '1.6rem' }} />
    </React.Fragment>
  );
}