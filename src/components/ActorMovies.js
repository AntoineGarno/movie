import axios from "axios";
import React from "react";
import Movie from "./Movie";

import { useEffect, useState } from "react";

const ActorMovies = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/" +
          props.id +
          "/movie_credits?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data.cast));
  }, []);
  console.log(pop);

  return (
    <div className="row target">
      {pop
        .filter((movie) => movie.order < 1)
        .map((movie) => (
          <div className="col">
            <Movie movie={movie} key={movie.id} />
          </div>
        ))}
    </div>
  );
};

export default ActorMovies;
