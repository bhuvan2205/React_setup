import React from "react";

const WithVegRestaurantLabel = (RestaurantCard) => {
  return (props) => (
    <div className="restaurant-wrapper">
      <label>Veg Restaurant</label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default WithVegRestaurantLabel;
