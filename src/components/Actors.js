import axios from "axios";
import React from "react";
import imgNotFound from "../images/imgNotFound.jpg";

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
  }, [refreshPage]);
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="row actors justify-content-center">
      {pop
        .filter((actor) => actor.order < 4)
        .map((actor) => {
          return (
            <NavLink
              className="col flex flex-column actorDetails"
              exact
              to={"/actordetails/" + actor.id}
            >
              <img
                className="actorImg "
                src={"https://image.tmdb.org/t/p/w200" + actor.profile_path}
                alt=""
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = imgNotFound;
                }}
              />
              <p className="bg-dark barActor">{actor.original_name}</p>
            </NavLink>
          );
        })}
    </div>
  );
};

export default Actors;
