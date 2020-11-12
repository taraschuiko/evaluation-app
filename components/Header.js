import React from 'react';
import { ThemeContext } from '../contexts/themeContext';
import styles from '../styles/Header.module.css';

export default function Header() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div className={styles.header}>
      <button type="button" onClick={() => toggleTheme()}>
        {theme === 'light' ? 'Dark ' : 'Light '}
        Theme
      </button>
    </div>
  );
}
