import axios from "axios";
import React from "react";
import ActorMovies from "./ActorMovies";
import ActorPhotos from "./ActorPhotos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgNotFound from "../images/imgNotFound.jpg";
const FicheActor = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/" +
          props.id +
          "?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data));
  }, []);

  console.log(pop);

  return (
    <div className="main container-fluid my-4">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-3 m-2 imageActorZone">
          <img
            src={"https://image.tmdb.org/t/p/w200" + pop.profile_path}
            alt="poster"
            className="img-fluid rounded-3 p-3 imageActor rounded-2"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = imgNotFound;
            }}
          />
        </div>

        <div className="imageActorZoneMobile">
          <img
            src={"https://image.tmdb.org/t/p/w200" + pop.profile_path}
            alt="poster"
            className="img-fluid rounded-3 rounded-2 imageActorMobile"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = imgNotFound;
            }}
          />
        </div>

        <div
          className="col-sm-12 col-md-6 col-lg-7 text-start my-sm-4 p-2"
          id="innerTextCard"
        >
          <h2 className="pb-1">{pop.name}</h2>
          <h3 className="py-3">Biographie</h3>
          <p className="pb-4 col-sm-10 col-md-12 col-lg-10">{pop.biography}</p>
          <strong>
            <p>Date de naissance</p>
          </strong>
          <p>{pop.birthday}</p>
          <strong>
            <p>Lieu de naissance</p>
          </strong>
        </div>

        <div className="row">
          <hr className="hr mt-3" />
          <div className="row">
            <div
              className="d-inline-flex flex-row justify-content-evenly filmographie col-6 py-3"
              id="connuPour"
            >
              <h4 className="py-2 ">Connu pour</h4>
              <span class="mt-4 degrade-horizontal"></span>
            </div>
          </div>
          <div className="row col-lg-12 col-sm-6 mx-4">
            <div className="col-1"></div>
            <div className=" col-10 d-flex flex-row my-5">
              <ActorMovies id={props.id} />
              <div className="col-1"></div>
            </div>
          </div>

          <hr className="hr2" />

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5 d-inline-flex flex-row justify-content-evenly filmographie ">
              <h4 className="py-2 ">Filmographie</h4>
              <span class="mt-4 degrade-horizontal"></span>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-9 d-flex flex-row tableFilmographie">
            <table id="tableActor" className="p-2 px-3 col-sm-12 col-md-12 col-lg-8 text-start">
              <tr className="bg-dark">
                <th className="col-10">Acteur</th>
                <th className="col-2">Date</th>
              </tr>
              <tr>
                <td className="p-3">
                  Jeanne du Barry (pre-production)
                  <br />
                  Louis XV
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="p-3">
                  Puffins (TV Mini Series short) (filming)
                  <br />
                  Johnny Puff
                  <br />
                  - Let's Dance ... Johnny Puff
                  <br />
                  - Fishing Competition ... Johnny Puff
                  <br />
                  - Whistle it off ... Johnny Puff
                  <br />
                  - A very special band ... Johnny Puff
                  <br />
                  - Tac's glasses ... Johnny Puff
                  <br />
                  Show all 70 episodes
                </td>
                <td className="text-start">2021-2022</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>2022</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>2017</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>2011</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="row">
          <div
            className="col-6 d-inline-flex flex-row justify-content-evenly filmographie"
            id="filmographie"
          >
            <h4 className="py-2 ">Photos</h4>
            <span class="mt-4 mx-5 degrade-horizontal"></span>
          </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-6 m-4 ">
          <div className="col-sm-1 col-lg-1"></div>
          <div className="col-sm-12 col-md-6 col-lg-9 d-flex flex-row">
          <div className="col-sm-1 col-md-3 col-lg-1"></div>
            <ActorPhotos id={props.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicheActor;
