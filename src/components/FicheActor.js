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
    <div className="main row">
      <h1>{pop.name}</h1>
      <h2>{pop.birthday}</h2>

      <div className="col">
        <img
          src={"https://image.tmdb.org/t/p/w200" + pop.profile_path}
          alt="poster"
          className="images col"
        />
        <div className="col">
          <p>{pop.overview}</p>
          <p>{pop.biography}</p>
        </div>
      </div>
    </div>
  );
};

export default FicheActor;
