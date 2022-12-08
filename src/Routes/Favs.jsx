import React from "react";
import Card from "../Components/Card/Card";


const Favs = () => {

  const odontologosObject = JSON.parse(localStorage.getItem("odontologos") || "[]")

  return (
    <>
      <h1>Dentists Favs</h1>
      <div  className="card-grid">
        { odontologosObject.map(odontologo=> <Card key={odontologo.id} id={odontologo.id} name={odontologo.name} username={odontologo.username} /> )}
      </div>
    </>
  );
};

export default Favs;
