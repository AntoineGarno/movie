import axios from "axios";
import React from "react";
import ActorMovies from "./ActorMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="main container-fluid">
      <div className="row">
        <div className="col-3 p-4 m-3">
          <img
            src={"https://image.tmdb.org/t/p/w200" + pop.profile_path}
            alt="poster"
            className="img-fluid rounded-3 p-3 imageActor"
          />
        </div>

        <div className="col-8 text-start p-4 m-3">
          <h2 className="pb-1">{pop.name}</h2>
          <h3 className="py-3">Biography</h3>
          <p className="pb-4">{pop.biography}</p>
          <p>Date de naissance</p>
          <p>{pop.birthday}</p>
          <p>Lieu de naissance</p>
          <p className="text-danger">METTRE LIEU DE NAISSANCE CI DANS API</p>
        </div>

        <div className="row">
          <ul className="col-5 d-flex justify-content-evenly flex-row p-1 liActor">
            <li className="pt-1">Résumé</li>
            <li className="pt-1">Bande annonces</li>
            <li className="pt-1">Vidéos</li>
            <li className="pt-1">Photos</li>
          </ul>

          <div className="col-7 px-4">
            <ul className="col-8 d-flex justify-content-end flex-row p-1 ml-4">
              <li className="px-4 py-2 mx-3 actoreBadge">Acteur</li>
              <li className="px-4 py-2 mx-3 actoreBadge">Producteur</li>
              <li className="px-4 py-2 mx-3 actoreBadge">Directeur</li>
            </ul>
          </div>

          <hr className="hr" />
          <div className="row">
            <div className="col-5 mx-2  d-inline-flex flex-row justify-content-evenly filmographie">
              <h4 className="py-2 mx-4">Connu pour</h4>
              <span class="mt-4 degrade-horizontal"></span>
            </div>
          </div>
          <div className="row col-lg-12 col-sm-6 mx-4 ">
            <div className="col-1"></div>
            <div className=" col-10 d-flex flex-row">
              <ActorMovies id={props.id} />
              <div className="col-1"></div>
            </div>
          </div>

          <hr className="hr2" />

          <div className="row">
            <div className="col-5 d-inline-flex flex-row justify-content-evenly filmographie ">
              <h4 className="py-2 mx-4">Filmographie</h4>
              <span class="mt-4 degrade-horizontal"></span>
            </div>
            <div className="col-1 d-flex flex-row">
              <div className="col-6 py-2">ARROW LEFT</div>
              <div className="col-6 py-2">ARROW RIGHT</div>
            </div>
          </div>

          <div className="col-9 d-flex flex-row tableFilmographie">
            <table id="tableActor" className="p-2 px-3 col-8 text-start">
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
          <div className="col-5 mx-2  d-inline-flex flex-row justify-content-evenly filmographie">
            <h4 className="py-2 mx-4">Photos</h4>
            <span class="mt-4 degrade-horizontal"></span>
          </div>
        </div>
        <div className="row col-lg-12 col-sm-6 m-4 ">
          <div className="col-1"></div>
          <div className=" col-10 d-flex flex-row">
            <ActorMovies id={props.id} />
            <div className="col-1"></div>
          </div>
        </div>
        <footer>
          <div></div>
        </footer>
      </div>
    </div>
  );
};

export default FicheActor;
