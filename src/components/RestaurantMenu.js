import { IMAGE_BASE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

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

  const itemCards =
    restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards || [];

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

      <section className="menu-section">
        <h2 className="menu-heading">Menu</h2>

        {itemCards.length > 0 ? (
          <ul className="menu-list">
            {itemCards.map((itemCard) => {
              const item = itemCard?.card?.info;

              return (
                <li className="menu-item" key={item?.id}>
                  <div className="menu-item-details">
                    <h3 className="menu-item-name">{item?.name}</h3>

                    {item?.price != null && (
                      <p className="menu-item-price">
                        ₹{(item.price / 100).toFixed(2)}
                      </p>
                    )}

                    {item?.description && (
                      <p className="menu-item-description">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {item?.imageId && (
                    <img
                      className="menu-item-image"
                      src={`${IMAGE_BASE_URL}/${item.imageId}`}
                      alt={item?.name || "Menu item"}
                      loading="lazy"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="menu-empty">No menu items available.</p>
        )}
      </section>
    </main>
  );
};

export default RestaurantMenu;
