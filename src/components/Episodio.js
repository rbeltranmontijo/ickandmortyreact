import React from "react";
import { Link } from "react-router-dom";

const Episodio = ({ episodio }) => {
  console.log(episodio);
  const { name, air_date, episode } = episodio;

  return (
    <tr>
      <td>{name}</td>
      <td>{air_date}</td>
      <td>{episode}</td>
      <td className="acciones">
        <Link
          to={{
            pathname: `/personajes/${episodio.id}`,
            state: { episodio }
          }}
          className="btn btn-primary mr-2"
        >
          Ver Personajes
        </Link>
      </td>
    </tr>
  );
};

export default Episodio;
