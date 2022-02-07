import "../App.css";
import { Outlet, Link } from "react-router-dom";
import Home from "../logoAgence.svg";
import Favorites from "../heart.svg";
import Menu from "../menu.svg";
import Twitter from "../twitter.svg";
import Fb from "../facebook.svg";
import Pinterest from "../pinterest.svg";
import LittleHeart from "./svg/littleHeart.svg";
import Envelope from "./svg/envelope.svg";
import Maison from "./svg/maison.svg"

export default function Details() {
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
      <main>
        <h1 style={{color:"#C2AD74", fontSize:"50px", textAlign:"center"}}>House of Holiday - Exclu</h1>
        <img src={Maison} alt="exclu" />
        <div  className="content-descriptif">
        <div>
          <div>
            <h2 style={{fontSize:"40px"}}>Maison 5 pièces</h2>
            <h3 style={{fontSize:"30px"}}>150m2</h3>
            <h4 style={{fontSize:"20px", color:"#707070"}}>Lyon</h4>
            <h3 style={{fontSize:"35px", color:"#C2AD74"}}>Prix: 250 000€</h3>
            <div className="buttons" style={{marginRight:"110px"}}>
              <button className="button" >
                <img src={LittleHeart} alt="littleheart" />
              </button>
              <button className="button">
                <img src={Envelope} alt="envelope" />
              </button>
            </div>
          </div>
        </div>
        <div className="detail">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
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
