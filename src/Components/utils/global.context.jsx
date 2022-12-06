import { createContext } from "react";
import { useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState(initialState);
  
  const handleTheme = (e) => {
    if(e.target.value === dataTheme.light){
      setTheme("light");
    } else {
      setTheme("dark")
    }
  }

  const dataTheme = {
    light: {
      font: 'black',
      background: 'white'
    },
    dark: {
      font: 'white',
      background: 'black'
    }
  };


  return (
    <ContextGlobal.Provider value={{theme, handleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};


