import axios from "axios";
import React from "react";
import Movie from "../Movie";
import { useEffect, useState } from "react";

const HomePopular = () => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US"
      )
      .then((res) => setPop(res.data.results.slice(0, 14)));
  }, []);

  return (
    <div className="row main">
      {
        <div className="justify-content-center row target">
          {pop.map((movie, index) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      }
    </div>
  );
};

export default HomePopular;
