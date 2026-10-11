import React, { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus([]);
  }, []);

  return (
    <div>
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
