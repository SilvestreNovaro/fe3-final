
import Card from '../Components/Card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [odontologo, setOdontologo] = useState([])

  const [fav, setFav] = useState([])

  // useEffect(()=>{
  //   localStorage.setItem("favs", JSON.stringify(fav))

  // },[fav]) 

  
//   const eliminarDeFav = (odontologo) => {
//     //busco su indice en el array:
//     let index = favoritos.indexOf(odontologo.name);

//     //si existe (si es distinto a -1), lo borro con el método: splice
//     if(index != -1){
//         favoritos.splice(index, 1)
//     }
// }
  
  // let favoritos = [{name: "lucia", username: "lulua"}] 
  // const handleFav = (odontologo) =>{
  //   if(fav){
  //     favoritos.push[odontologo]
  //   }else{
  //     setFav(false)
  //     eliminarDeFav(odontologo)
  //   }
  //   }
  


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
              {<Card id={elemento.id} name={elemento.name} username={elemento.username} fav={fav} setFav={setFav}/>}
            </div>)
        })}
      </div>
    </main>
  )
}

export default Home