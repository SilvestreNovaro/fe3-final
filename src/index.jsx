import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from "./Components/utils/global.context";
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Error from './Routes/Error'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path='*' element={<Error />} />
        </Routes> 
      </ContextProvider>
    </BrowserRouter>

);


