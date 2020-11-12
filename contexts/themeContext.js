import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../styles/Theme.module.css';

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Helmet>
        <body className={theme === 'dark' && styles['body--dark']} />
      </Helmet>
      {children}
    </ThemeContext.Provider>
  );
};
