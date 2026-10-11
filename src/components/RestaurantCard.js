import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, areaName, avgRating, locality, cloudinaryImageId, sla } =
    restaurant?.info || {};
  return (
    <div className="restaurant card">
      <img src={`${IMAGE_BASE_URL}/${cloudinaryImageId}`} alt={name} />
      <h3 className="title">{name}</h3>
      <p className="description">
        {areaName}, {locality}
      </p>

      <div className="info">
        <p className="rating">{avgRating} Rating</p>
        <p className="delivery">{sla?.deliveryTime}mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
