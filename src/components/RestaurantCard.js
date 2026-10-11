import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { id, name, areaName, avgRating, locality, cloudinaryImageId, sla } =
    restaurant?.info || {};
  const imageURL =
    id === "456789"
      ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/ok1m7mlunivczmhrhpvt"
      : `${IMAGE_BASE_URL}/${cloudinaryImageId}`;
  return (
    <Link to={`/restaurant/${id}`}>
      <div className="restaurant card">
        <img src={imageURL} alt={name} />
        <h3 className="title">{name}</h3>
        <p className="description">
          {areaName}, {locality}
        </p>

        <div className="info">
          <p className="rating">{avgRating} Rating</p>
          <p className="delivery">{sla?.deliveryTime}mins</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
