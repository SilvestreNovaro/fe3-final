
import Card from '../Components/Card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [odontologo, setOdontologo] = useState([])

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => setOdontologo(response.data))
}, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {odontologo.map(elemento => {
          return (
            <div key={elemento.id}>
              {<Card id={elemento.id} name={elemento.name} username={elemento.username}/>}
            </div>)
        })}
      </div>
    </main>
  )
}

export default Home