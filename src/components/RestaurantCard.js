const RestaurantCard = ({ restaurant }) => {
  const { name, description, rating, deliveryTime, image } = restaurant || {};
  return (
    <div className="restaurant card">
      <img src={image} alt={name} />
      <h3 className="title">{name}</h3>
      <p className="description">{description}</p>

      <div className="info">
        <p className="rating">{rating} Rating</p>
        <p className="delivery">{deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
