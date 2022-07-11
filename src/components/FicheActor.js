import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";

const FicheActor = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/" +
        props.id +
        "?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data));
  }, []);

  console.log(pop);

  return (
    <div className="main container-fluid">
      <div className="row">

        <div className="col-3 p-4 m-3">
          <img
            src={"https://image.tmdb.org/t/p/w200" + pop.profile_path}
            alt="poster"
            className="img-fluid rounded p-3 imageActor"
          />
        </div>

        <div className="col-8 text-start p-4 m-3">
          <h2 className="pb-1">{pop.name}</h2>
          <h3 className="py-3">Biography</h3>
          <p className="pb-4">{pop.biography}</p>
          <p>Date de naissance</p>
          <p>{pop.birthday}</p>
          <p>Lieu de naissance</p>
          <p className="text-danger">METTRE LIEU DE NAISSANCE CI DANS API</p>
        </div>

        <div className="container">
          <div className="row ">
            <ul className="col-5 d-flex justify-content-evenly flex-row p-1  liActor">
              <li>Résumé</li>
              <li>Bande annonces</li>
              <li>Vidéos</li>
              <li>Photos</li>
            </ul>
            <ul className="col-7 d-flex justify-content-center flex-row p-1 liActor">
              <li className="col-3">Acteur</li>
              <li className="col-3">Producteur</li>
              <li className="col-3">Directeur</li>
            </ul>
          </div>
            <hr/>
        </div>
      </div>
    </div>
  );
};

export default FicheActor;