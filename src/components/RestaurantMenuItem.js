import React from "react";
import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantMenuItem = ({ item }) => {
  return (
    <li className="menu-item">
      <div className="menu-item-details">
        <h3 className="menu-item-name">{item?.name}</h3>

        {item?.price != null && (
          <p className="menu-item-price">₹{(item?.price / 100).toFixed(2)}</p>
        )}

        {item?.description && (
          <p className="menu-item-description">{item?.description}</p>
        )}
        <button className="user-button">Add</button>
      </div>

      {item?.imageId && (
        <img
          className="menu-item-image"
          src={`${IMAGE_BASE_URL}/${item?.imageId}`}
          alt={item?.name || "Menu item"}
          loading="lazy"
        />
      )}
    </li>
  );
};

export default RestaurantMenuItem;
