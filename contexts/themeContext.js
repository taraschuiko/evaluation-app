import React from 'react'

export const ThemeContext = React.createContext()

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = React.useState('dark')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}