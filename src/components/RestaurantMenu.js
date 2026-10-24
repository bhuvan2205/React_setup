import { IMAGE_BASE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const { restaurantInfo } = useRestaurantMenu(id);

  const {
    name,
    areaName,
    locality,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla,
  } = restaurantInfo?.cards?.[2]?.card?.card?.info || {};

  const categories =
    restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const validCategories = categories?.filter(
    (category) => !!category?.card?.card?.title,
  );

  if (!restaurantInfo) {
    return <div className="menu-shimmer"></div>;
  }

  return (
    <main className="restaurant-menu">
      <section className="restaurant-header">
        <div className="restaurant-details">
          <h1 className="restaurant-name">{name}</h1>

          <p className="restaurant-cuisines">{cuisines?.join(", ")}</p>

          <p className="restaurant-location">
            {areaName}, {locality}
          </p>

          <div className="info">
            {avgRating && <p className="rating">{avgRating} Rating</p>}

            {sla?.deliveryTime && (
              <p className="delivery">{sla.deliveryTime} mins</p>
            )}
          </div>
        </div>

        {cloudinaryImageId && (
          <img
            className="restaurant-image"
            src={`${IMAGE_BASE_URL}/${cloudinaryImageId}`}
            alt={name || "Restaurant"}
          />
        )}
      </section>

      {validCategories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          category={category}
          showItems={showIndex === index}
          setShowIndex={() => {
            if (index === showIndex) {
              setShowIndex(null);
            } else {
              setShowIndex(index);
            }
          }}
        />
      ))}
    </main>
  );
};

export default RestaurantMenu;
