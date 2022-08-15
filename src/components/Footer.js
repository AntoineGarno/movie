import React from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";

const Footer = () => {
  return (
    <div className="footer mt-5 p-3">
      <div className="">
        <div className="m-2 text-muted">
          <p className="mt-4">
            Data des titres de film, crédits, et images obtenue par TMDB |Video,
            poster art et bande annonces obtenue par TMDB
          </p>
          <p>
            ® Ariane Bordeleau | Antoine Garneau | Maxime Routhier-Linteau ®
          </p>
        </div>

        <div className="">
          <a href="#">
            <img src={facebook} alt="Facebook" className="text-secondary" />
          </a>
          <a href="#">
            <img src={instagram} alt="Instagram" className="" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" className="" />
          </a>
        </div>
        <div className="row m-2 p-1">
          <p>Carrières | FAQ | À Propos de AMDB | Aide et support | Contact</p>
          <p>
            | Ne pas vendre mes informations | Politique de confidentialité |
            Paramètres des Cookies | Terme d'utilisation | TMDB
          </p>
          <p className="text-muted">
            © 2022 AMDB, FILM DATABASE COMPANY. TOUS DROITS RÉSERVÉS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
