import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {ContextGlobal}  from './utils/global.context.jsx'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, handleTheme } = useContext(ContextGlobal)

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/contacto">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={handleTheme}>{theme.themeDark ? "☀" : "🌙"}Change theme</button>
    </nav>
  )
}

export default Navbar