import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Actors = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.id +
          "/credits?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data.cast));
  }, []);
  console.log(props);

  return (
    <div className=" row ">
      <h1>{pop.title}</h1>
      {pop
        .filter((actor) => actor.order < 5)
        .map((actor) => (
          <NavLink className="col" exact to={"/actordetails/" + actor.id}>
            <img
              className="actorImg"
              src={"https://image.tmdb.org/t/p/w200" + actor.profile_path}
              alt=""
            />
            <p>{actor.original_name}</p>
          </NavLink>
        ))}
    </div>
  );
};

export default Actors;
