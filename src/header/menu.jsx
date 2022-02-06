import { NavLink, Outlet } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  let menu = [
    {
      name: "Maison",
      Category : "Maison",
    },
    {
      name: "Appartement",
      Category : "Appartement",
    },
    {
      name: "Duplex",
      Category : "Duplex",
    },
    {
      name: "Studio",
      Category : "Studio",
    },
  ];

  return (
    <div>
      <div className="container">
        <nav className="menu-content">
          {menu.map((menu) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "pink" : "",
                };
              }}
              className="Liens"
              to={`/settings/${menu.name}`}
              key={menu.name}
            >
              {menu.Category}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
