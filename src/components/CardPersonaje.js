import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const CardPersonaje = props => {
  console.log(props);
  const [personaje, guardarPersonaje] = useState({});
  const consultarApi = async () => {
    try {
      const resultado = await axios.get(props.episodio);
      console.log(resultado.data);
      guardarPersonaje(resultado.data);
    } catch (error) {
      //   console.log("errorrrrrrr");
      console.log(error);
    }
  };
  useEffect(() => {
    consultarApi();
  }, []);
  return (
    <>
      {!personaje ? (
        <Spinner animation="border" />
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={personaje.image} />
          <Card.Body>
            <Card.Title className="text-center">{personaje.name}</Card.Title>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default CardPersonaje;
