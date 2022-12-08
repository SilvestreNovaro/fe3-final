import { createContext } from "react";
import { useState } from "react";


export const initialState = {
  data: {
    light: {
      card: 'card card-white',
      background: 'white',
      cardImg: 'cardImg',
      text: 'cardText h4',
      navbar: 'nav background-nav'
    },
    dark: {
      card: 'card card-black',
      background: 'grey',
      cardImg: 'cardImg',
      text: 'cardText h4',
      navbar: 'nav background-nav'
    }
  }
};

export const ContextGlobal = createContext(); 

export const ContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(initialState.data.light);
  
  const handleTheme = () => {
    if(theme === initialState.data.dark) setTheme(initialState.data.light)
    if(theme === initialState.data.light) setTheme(initialState.data.dark)
  }

  return (
    <ContextGlobal.Provider value={{theme, handleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};


