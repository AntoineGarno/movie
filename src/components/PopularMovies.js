import axios from "axios";
import React from "react";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const PopularMovies = () => {
  const [pop, setPop] = useState([]);
  const [page, setPage] = useState(1);

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
    <div className="col main m-5">
      {
        <div className="row target">
          {pop.map((movie, index) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      }
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
    </div>
  );
};

export default PopularMovies;
