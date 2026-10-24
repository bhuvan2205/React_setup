import { useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";
import DownArrow from "../Icons/DownArrow";
import UpArrow from "../Icons/UpArrow";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const itemCards = category?.card?.card?.itemCards;
  return (
    <section className="menu-section">
      <div
        className="menu-heading"
        onClick={() => {
          setShowIndex();
        }}
      >
        <h2>
          {category?.card?.card?.title} (
          {category?.card?.card?.itemCards?.length})
        </h2>
        <span>{!showItems ? <DownArrow /> : <UpArrow />}</span>
      </div>
      {category?.card?.card?.itemCards.length > 0 ? (
        <>
          {showItems && (
            <ul className="menu-list">
              {itemCards.map((itemCard) => {
                const item = itemCard?.card?.info;

                return <RestaurantMenuItem item={item} key={item?.id} />;
              })}
            </ul>
          )}
        </>
      ) : (
        <p className="menu-empty">No menu items available.</p>
      )}
    </section>
  );
};

export default RestaurantCategory;
