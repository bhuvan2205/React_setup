import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Cart", path: "/cart" },
];

const Header = () => {
  const { loggedIn, setIsLoggedIn } = useContext(UserContext);

  return (
    <div className="header">
      <Link to="/">
        <img
          src={LOGO_URL}
          alt="logo"
          className="logo"
          width={100}
          height={100}
        />
      </Link>

      <ul className="nav-items">
        {routes?.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}

        <button
          className="button"
          onClick={() => setIsLoggedIn((prev) => !prev)}
        >
          {loggedIn ? "Logout" : "Login"}
        </button>
      </ul>
    </div>
  );
};

export default Header;
