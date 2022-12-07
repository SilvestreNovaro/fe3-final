import { createContext } from "react";
import { useState } from "react";

//export const initialState = {theme: "", data: []}

export const dataTheme = {
  light: {
    font: 'black',
    background: 'white'
  },
  dark: {
    font: 'white',
    background: 'black'
  }
};

export const ContextGlobal = createContext(dataTheme);

export const ContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(dataTheme.light);
  
  const handleTheme = () => {
    if(theme === dataTheme.dark) setTheme(dataTheme.light)
    if(theme === dataTheme.light) setTheme(dataTheme.dark)
  }

  return (
    <ContextGlobal.Provider value={{theme, handleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};


