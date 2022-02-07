import { useState } from "react";
import React from "react";
import "../App.css";
import "./service.css";
import { Outlet, Link } from "react-router-dom";
import Home from "../logoAgence.svg";
import Favorites from "../heart.svg";
import Menu from "../menu.svg";
import Twitter from "../twitter.svg";
import Fb from "../facebook.svg";
import Pinterest from "../pinterest.svg";
import Id from "./id.svg";

export default function Services() {
  const inputRef = React.createRef(null);

  let [words, setWords] = useState();

  let [button, setButton] = useState(false);

  const append = (value) => {
    if (value.trim()) {
      setWords(value);
      inputRef.current.value = "";
      setButton(true);
    }
    console.log(value);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <header>
        <nav>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "130px",
            }}
          >
            <Link to="/home">
              {" "}
              <img src={Home} alt="home" className="home" />
            </Link>
            <div className="choices">
              <Link to="/achats" className="liens">
                Achats
              </Link>{" "}
              <Link to="/ventes" className="liens">
                Ventes
              </Link>{" "}
              <Link to="/locations" className="liens">
                Locations
              </Link>{" "}
              <Link to="/favorites" className="liens">
                {" "}
                <img src={Favorites} alt="favorites" />
              </Link>
              <Link to="/menu">
                {" "}
                <img src={Menu} alt="menu" />
              </Link>
            </div>
          </div>
        </nav>
        <Outlet />
      </header>
      <main className="main">
        {!button ? (
          <div className="service-content">
            <h1
              style={{
                fontFamily: "serif",
                textAlign: "center",
                marginBottom: "80px",
              }}
            >
              Pour accéder à votre espace Artimmo, utilisez vos identifiants
              habituels.
            </h1>
            <div className="content-id">
              <div className="id">
                <img src={Id} alt="id" style={{ marginRight: "20px" }} />{" "}
                <input
                  maxLength="14"
                  placeholder="identifiant"
                  className="inputId"
                  ref={inputRef}
                />
              </div>
              <button
                className="connexion"
                onClick={() => append(inputRef.current.value)}
              >
                Connexion
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div>{button ? <p className="text">Bienvenue {words}</p> : ""}</div>
      </main>
      <footer
        style={{
          height: "50px",
        }}
      >
        <div className="infos">
          <div className="infos-services">
            <Link to="/history" className="liens">
              Notre histoire
            </Link>{" "}
            <Link to="/services" className="liens">
              Services clients
            </Link>{" "}
            <Link to="/agences" className="liens">
              Nos agences
            </Link>{" "}
          </div>
          <div className="contacts">
            <Link to="/twitter" className="liens">
              {" "}
              <img src={Twitter} alt="twitter" />
            </Link>
            <Link to="/facebook" className="liens">
              {" "}
              <img src={Fb} alt="facebook" />
            </Link>
            <Link to="/pinterest" className="liens">
              {" "}
              <img src={Pinterest} alt="pinterest" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
