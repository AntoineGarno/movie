import axios from "axios";
import React from "react";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CategoriesList = () => {
  const [pop, setPop] = useState([]);
  const [id, setId] = useState("");
  const [genre, setGenre] = useState([]);
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

  const movieURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&with_genres=";

  const genreURL =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US";

  useEffect(() => {
    axios.get(movieURL + id + "&page=" + page).then((res) => {
      setPop(res.data.results);
    });
    axios.get(genreURL).then((res) => {
      setGenre(res.data.genres);
    });
  }, [id, movieURL, page]);

  return (
    <div>
      <div className="categorie my-5">
        {genre.map((genre, index) => (
          <button value={genre.id} onClick={(e) => setId(e.target.value)}>
            {genre.name}
          </button>
        ))}
      </div>
      <div className="d-flex flex-row justify-content-center m-5 ">
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

export default CategoriesList;
