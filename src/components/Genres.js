import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";

const Genres = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.id +
          "?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data.genres));
  }, []);

  console.log(pop);

  return (
    <div className="m-0 d-flex flex-row actors justify-content-center">
      {pop.map((genre, index) => {
        return (
          <ul className="p-0">
            <li className=" font-weight-bold px-1"> {genre.name} </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Genres;
