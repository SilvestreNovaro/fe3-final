import React from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const Detail = () => {

  const {id} = useParams()
  const {theme} = useContext(ContextGlobal)
  const [odontologo, setOdontologo] = useState([])

 // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    const data = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setOdontologo(response.data) )
    }
    data();
  })
  
  return (
    <div className={theme.background}>
      <h1>Detail Dentist id </h1>
      <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{odontologo.name}</td>
                        <td>{odontologo.email}</td>
                        <td>{odontologo.phone}</td>
                        <td>{odontologo.website}</td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default Detail