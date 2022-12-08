import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../utils/global.context";
import { useContext } from "react";


const Card = ({ name, username, id, fav, setFav }) => {

  const {theme, handleTheme} = useContext(ContextGlobal)
  
  const addFav = (object)=>{
    const odontologosObject = JSON.parse(localStorage.getItem("odontologos") || "[]")
    const odontologo = ({
      "name":name,
      "userName": username,
      "id": id
  })
    odontologosObject.push(odontologo)
    localStorage.setItem("odontologos", JSON.stringify(odontologosObject))
  }

  return (
    <div className={theme.card}>
        <img className={theme.cardImg} src="/images/doctor.jpg" alt="imagen del doctor"/>
        <div> 
          <Link to={`/dentist/${id}`}><h3>{name}</h3></Link> 
          <h4 className={theme.cardText}>{username}</h4>
          <button onClick={addFav}  className="favButton">⭐</button>
        </div>
    </div>
  );
};


export default Card;
