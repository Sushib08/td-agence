import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./header/home";
import Achats from "./header/achats";
import Ventes from "./header/ventes";
import Locations from "./header/locations";
import Favoris from "./header/favoris";
import Menu from "./header/menu";
import Exclu from "./exclu";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="menu" element={<Menu />} />
      </Route>
      <Route path="home" element={<Home />} />
      <Route path="achats" element={<Achats />}></Route>
      <Route path="ventes" element={<Ventes />} />
      <Route path="locations" element={<Locations />} />
      <Route path="favoris" element={<Favoris />} />
      <Route path="exclu" element={<Exclu />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
