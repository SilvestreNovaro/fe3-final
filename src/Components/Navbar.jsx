import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'


const Navbar = () => {

  const {theme, handleTheme} = useContext(ContextGlobal)

  console.log(theme)

  return (
    <nav className={theme.navbar} style={{display: 'flex'}}>
        <Link to={'/'}><h2>DH Odonto</h2></Link>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={handleTheme}>{theme.background === theme.light ? "☀" : "🌙"}</button>
      </div>
    </nav>
  )
}

export default Navbar