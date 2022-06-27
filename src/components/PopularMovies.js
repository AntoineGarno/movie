import axios from "axios";
import React from "react";
import Movie from "./Movie";
import { useEffect, useState } from "react";
const PopularMovies = () => {
  const [pop, setPop] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=" +
          page
      )
      .then((res) => setPop(res.data.results));
  }, [page]);

  console.log(page);

  return (
    <div className="row main">
      <div>
        <button onClick={() => setPage(page - 1)}>Back</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      {
        <div className="row target">
          {pop.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      }
    </div>
  );
};

export default PopularMovies;
