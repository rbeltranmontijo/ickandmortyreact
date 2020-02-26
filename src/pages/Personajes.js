import React, { useState, useEffect } from "react";
import Error from "../components/Error";
import CardPersonaje from "../components/CardPersonaje";

const Personajes = props => {
  console.log(props.location.state.episodio.characters);
  const [personajes, guardarPersonajes] = useState([]);
  useEffect(() => {
    guardarPersonajes(props.location.state.episodio.characters);
  }, []);
  if (personajes === []) {
    return <Error />;
  }
  return (
    <div className="row p-4 d-flex justify-content-center">
      {personajes === [] ? (
        <p>Hubo un error intenta de nuevo</p>
      ) : (
        personajes.map(item => <CardPersonaje key={item} episodio={item} />)
      )}
    </div>
  );
};

export default Personajes;
