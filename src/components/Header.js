import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const { loggedIn, setIsLoggedIn } = useContext(UserContext);

  // const {items: cartItems} = useSelector((store) => store.cart); ---> Bad Practice
  const cartItems = useSelector((store) => store.cart.items);

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

        <li>
          <Link to="/cart" className="cart">
            Cart <span>{cartItems?.length}</span>
          </Link>
        </li>

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
