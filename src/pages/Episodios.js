import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Episodio from "../components/Episodio";
import Error from "../components/Error";

const Episodios = props => {
  //   console.log(props);
  const [episodio, guardarEpisodio] = useState([]);
  const [episodioPagina, guardarEpisodioPagina] = useState({});
  const [loading, guardarLoading] = useState({});
  const consultarApi = async () => {
    try {
      const url = props
        ? props.location.state !== undefined
          ? props.location.state.episodioPagina.next
          : "https://rickandmortyapi.com/api/episode"
        : "https://rickandmortyapi.com/api/episode";

      const resultado = await axios.get(url);

      guardarEpisodio(resultado.data.results);
      guardarEpisodioPagina(resultado.data.info);
      guardarLoading(false);
    } catch (error) {
      console.log("errorrrrrrr");
      console.log(error);
    }
  };
  useEffect(() => {
    guardarLoading(true);

    consultarApi();
  }, [props.location.state]);

  console.log(props);

  if (loading) {
    return <Error />;
  }

  return (
    <>
      <h2 className="text-center my-5">Listado de Episodios</h2>
      <div className="d-flex justify-content-center">
        <div>
          {props.location.state !== undefined ? (
            <Link to={"/"} className="mx-2 my-2 btn">
              Atras
            </Link>
          ) : null}
        </div>
        <div>
          <Link
            to={{
              pathname:
                props.location.state !== undefined
                  ? `/${props.location.state.episodioPagina.page}`
                  : `/${episodioPagina.page}`,
              state: { episodioPagina }
            }}
            className="mx-2 my-2 btn"
          >
            Siguiente
          </Link>
        </div>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha</th>
            <th scope="col">No. de Episodio</th>
            <th scope="col">Personajes</th>
          </tr>
        </thead>
        <tbody>
          {episodio === [] ? (
            <p>Hubo un error intenta de nuevo</p>
          ) : (
            episodio.map(item => <Episodio key={item.id} episodio={item} />)
          )}
        </tbody>
      </table>
    </>
  );
};

export default Episodios;
