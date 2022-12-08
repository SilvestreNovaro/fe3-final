import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../utils/global.context";
import { useContext } from "react";
import { useEffect } from "react";


const Card = ({ name, username, id }) => {

  const {theme, fav, setFav} = useContext(ContextGlobal)
  
  
  useEffect(() => {
    localStorage.setItem('odontologos', JSON.stringify(fav))
}, [fav])

  const addFav = ()=>{
    
    
    // const odontologosObject = JSON.parse(localStorage.getItem("odontologos") || "[]")
    const odontologo = ({
      "name":name,
      "userName": username,
      "id": id
  })
    if(fav.some(item => item.id === odontologo.id)){
    alert("El dentista ya fue agregado a favoritos");
  }else{
    setFav([...fav, odontologo])
    alert("odontologo agregado")
  }
    
    // odontologosObject.push(odontologo)
    // localStorage.setItem("odontologos", JSON.stringify(odontologosObject))
  
}

  return (
    <div className={theme.card}>
        <img className={theme.cardImg} src="/images/doctor.jpg" alt="imagen del doctor"/>
        <div className="divflex"> 
          <Link to={`/dentist/${id}`}><h3>{name}</h3></Link>
          <div>
          <h4 className={theme.cardText}>{username}</h4>
          </div> 
          <div className="display-content">
          <button onClick={addFav}  className="favButton">⭐</button>
          </div>
        </div>
    </div>
  );
};


export default Card;
