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

        <div className="col-4 p-4 m-2">
          <img
            src={"https://image.tmdb.org/t/p/w200" + pop.profile_path}
            alt="poster"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-7 text-start p-4 m-2">
          <h2>{pop.name}</h2>
          <h3>Biography</h3>
          <p>{pop.biography}</p>
          <p>{pop.overview}</p>
          <p>Date de naissance</p>
          <p>{pop.birthday}</p>
          <p>Lieu de naissance</p>
        </div>

        <div className="container">
          <div className="row">
            <p className="col-1">Résumé</p>
            <p className="col-2">Bande annonces</p>
            <p className="col-1">Vidéos</p>
            <p className="col-1">Photos</p>
          </div>
          
          <div className="">
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicheActor;
