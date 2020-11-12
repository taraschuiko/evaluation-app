import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import store from '../store';
import { ThemeContextProvider } from '../contexts/themeContext';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Helmet>
          <title>Evaluation app</title>
          <meta name="description" content="Learning Nuxt.js, context, redux, thunk" />
        </Helmet>
        <Header />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </Provider>
  );
}

export default MyApp;
