import React from "react";
import Card from "../Components/Card/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  // const cualquierNombre = localStorage.getItem(odontologoObject)
  const odontologosObject = JSON.parse(localStorage.getItem("odontologos") || "[]")

  return (
    <>
      <h1>Dentists Favs</h1>
      
      <div  className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        { odontologosObject.map(odontologo=> <Card key={odontologo.id} id={odontologo.id} name={odontologo.name} username={odontologo.username} /> )}
      </div>
    </>
  );
};

export default Favs;
