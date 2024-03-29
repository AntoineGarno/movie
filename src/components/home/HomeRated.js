import axios from "axios";
import React from "react";
import Movie from "../Movie";
import { useEffect, useState } from "react";

const HomeRated = () => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=23864b640ca2d076f531ea8f5539d1c0"
      )
      .then((res) => setPop(res.data.results.slice(0, 14)));
  }, []);

  return (
    <div className=" main  ">
      <div className=" justify-content-center row target">
        {pop.map((movie, index) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default HomeRated;
