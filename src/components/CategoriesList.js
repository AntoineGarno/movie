import axios from "axios";
import React from "react";
import Movie from "./Movie";
import { useEffect, useState } from "react";

const CategoriesList = () => {
  const [pop, setPop] = useState([]);
  const [id, setId] = useState("");
  const [genre, setGenre] = useState([]);

  const movieURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&with_genres=";

  const genreURL =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US";

  useEffect(() => {
    axios.get(movieURL + id).then((res) => {
      setPop(res.data.results);
    });
    axios.get(genreURL).then((res) => {
      setGenre(res.data.genres);
    });
  }, [id, movieURL]);

  return (
    <div>
      <div className=" categorie">
        {genre.map((genre, index) => (
          <button value={genre.id} onClick={(e) => setId(e.target.value)}>
            {genre.name}
          </button>
        ))}
      </div>

      {
        <div className="row target main">
          {pop.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      }
    </div>
  );
};

export default CategoriesList;
