import axios from "axios";
import React from "react";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// const BASE_URL = (base,result) =>  `https://api.themoviedb.org/3/${base}?api_key=23864b640ca2d076f531ea8f5539d1c0${result} `

const SearchMovies = () => {
  const [pop, setPop] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // Pagination
  const theme = createTheme({
    palette: {
      text: {
        primary: "#fffff",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  const handleChange = (event, value) => {
    setPage(value);
  };

  const baseSearch = () => {
    axios
      .get(
        query
          ? "https://api.themoviedb.org/3/search/movie?api_key=23864b640ca2d076f531ea8f5539d1c0&language=en-US&query=" +
              query +
              "&page=" +
              page
          : "https://api.themoviedb.org/3/movie/top_rated?api_key=23864b640ca2d076f531ea8f5539d1c0" +
              "&page=" +
              page
      )
      .then((res) => {
        setPop(res.data.results);
      });
  };

  // const search = (e) => {
  //   e.preventDefault();

  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/search/movie?api_key=23864b640ca2d076f531ea8f5539d1c0&language=en-US&query=" +
  //         query +
  //         "&page=" +
  //         page
  //     )
  //     .then((res) => {
  //       setPop(res.data.results);
  //     });
  // };
  useEffect(() => {
    baseSearch();
  }, [query, page]);

  return (
    <div>
      <form className="inputField">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher"
        />

        {/* <button onClick={search}>Submit</button> */}
      </form>
      <div className="d-flex flex-row justify-content-center my-3 ">
        <ThemeProvider theme={theme}>
          <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination
              count={50}
              page={page}
              onChange={handleChange}
              color="secondary"
              variant="text"
            />
          </Stack>
        </ThemeProvider>
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
