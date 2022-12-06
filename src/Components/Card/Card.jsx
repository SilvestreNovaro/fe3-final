import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

let favoritos = [{name: "lucia", username: "lulua"}] 

const agregarAFavoritos = () => {
  localStorage.setItem("favsKey", JSON.stringify(favoritos))
}
agregarAFavoritos();
console.log(localStorage)


  const buscarFavoritoEnStorage = () => {
    localStorage.getItem("favsKey", JSON.stringify(favoritos))
  }

  const agregarFavoritoAStorage = (id) => {
  /*  const favorito = buscarFavoritoEnStorage(); */
    const favoritoEncontrado = favoritos.find(element => {
      return element.id === id});
    if(favoritoEncontrado !== null && favoritoEncontrado !== ""){
      localStorage.setItem("favoritos", JSON.stringify(favoritoEncontrado))
    } else {
      return null;
    }
  }
  console.log(agregarFavoritoAStorage(1));


  const estaEnFavoritos = () => {
    const favorito = buscarFavoritoEnStorage();
    if(favorito == null){
      console.log("El usuario no existe en el storage") //addFav(); 
    } else {
      console.log(favorito) //deleteFav();
    }
  }
  console.log(estaEnFavoritos());

  const deleteFav = () => {

  }

  return (
    <div className={styles.card}>
        <img className={styles.cardImg} src="/images/doctor.jpg" alt="imagen del doctor"/>
        <div className="card-body"> 
          <Link to={`/dentist/${id}`}><h3>{name}</h3></Link> 
          <h4 className={styles.cardText}>{username}</h4>
          <button onClick={estaEnFavoritos ? deleteFav : addFav} className="favButton">add favorite</button>
        </div>
        
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}    
    </div>
  );
};

export default Card;
