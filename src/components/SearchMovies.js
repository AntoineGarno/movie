import axios from "axios";
import React from "react";
import Movie from "./Movie";
import { useEffect, useState } from "react";

// const BASE_URL = (base,result) =>  `https://api.themoviedb.org/3/${base}?api_key=23864b640ca2d076f531ea8f5539d1c0${result} `

const SearchMovies = () => {
  const [pop, setPop] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const baseSearch = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=23864b640ca2d076f531ea8f5539d1c0"
      )
      .then((res) => {
        setPop(res.data.results);
      });
  };

  const search = (e) => {
    e.preventDefault();

    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=23864b640ca2d076f531ea8f5539d1c0&language=en-US&query=" +
          query +
          "&page=" +
          page
      )
      .then((res) => {
        setPop(res.data.results);
      });
  };
  useEffect(() => {
    baseSearch();
  }, []);

  return (
    <div>
      <form className="inputField">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher"
        />

        <button onClick={search}>Submit</button>
      </form>
      <div>
        <button onClick={() => setPage((page) => page - 1)}>Back</button>
        <button onClick={() => setPage((page) => page + 1)}>Next</button>
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

export default SearchMovies;
