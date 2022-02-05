import Home from "../logoAgence.svg";
import Favorites from "../heart.svg";
import Menu from "../menu.svg";
import Twitter from "../twitter.svg";
import Fb from "../facebook.svg";
import Pinterest from "../pinterest.svg";
import Glass from "./glass.svg";
import { Link } from "react-router-dom";
import "./achats.css";
import { getList } from "./list";
import Lodging1 from "./lodging1.svg";
import LittleHeart from "./littleHeart.svg";
import Envelope from "./envelope.svg";

export default function Achats() {
  let achats = getList();
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
      </header>
      <main>
        <div className="achat-content">
          <h1 style={{ color: "#C2AD74", fontSize: "35px" }}>Achats</h1>
          <div className="search">
            <input maxLength="14" placeholder="Rechercher..." />
            <button className="glass">
              <img src={Glass} className="glass" alt="glass" />
            </button>
          </div>
        </div>
        <div>
          <div className="lodging-content">
            {achats.map((achat) => (
              <div className="choice-lodging">
                <Link to={`/achats/${achat.title}`} key={achat.title}>
                  <img src={Lodging1} alt="lodging" />
                </Link>
                <div className="info-lodging">
                  <h2 className="info1">{achat.title}</h2>
                  <div className="info2">{achat.price}</div>
                </div>
                <div className="info3">{achat.localisation}</div>
                <div className="buttons">
                <Link to="/pinterest" className="button">
              {" "}
              <img src={LittleHeart} alt="littleheart" />
            </Link>
            <Link to="/Envelope" className="button">
              {" "}
              <img src={Envelope} alt="envelope" />
            </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
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
