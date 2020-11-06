import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { ThemeContextProvider } from '../contexts/themeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </Provider>
  );
}

export default MyApp;
