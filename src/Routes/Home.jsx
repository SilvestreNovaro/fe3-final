
import Card from '../Components/Card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ContextGlobal, initialState } from '../Components/utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const [odontologo, setOdontologo] = useState([])

const [fav, setFav] = useState([])

const { theme, handleTheme } = useContext(ContextGlobal)

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => setOdontologo(response.data))
}, [])

  return (
    <main className={theme.background}>
      <h1>Home</h1>
      <div className='card-grid'>
        {odontologo.map(elemento => {
          return (
            <div key={elemento.id}>
              {<Card id={elemento.id} name={elemento.name} username={elemento.username} fav={fav} setFav={setFav}/>}
            </div>)
        })}
      </div>
    </main>
  )
}

export default Home