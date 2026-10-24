import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";
import { useRestaurant } from "../hooks/useRestaurant";
import useOnlineStatus from "../hooks/useOnlineStatus";
import WithVegRestaurantLabel from "./HOC/WithVegRestaurantLabel";
import { Fragment } from "react/jsx-runtime";

const Body = () => {
  const {
    handleSearch,
    handleClearFilters,
    handleTopRated,
    restaurantList,
    filteredRestaurantList,
    searchQuery,
    setSearchQuery,
  } = useRestaurant();

  const { onlineStatus } = useOnlineStatus();

  const VegRestaurantLabelCard = WithVegRestaurantLabel(RestaurantCard);

  if (!onlineStatus) {
    return <h1>You are offline! Please check your Internet connection</h1>;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="filter">
        <button className="filter-button" onClick={handleTopRated}>
          Top Rated
        </button>
        <button className="filter-button" onClick={handleClearFilters}>
          Clear Filters
        </button>
      </div>

      {restaurantList.length === 0 && <ShimmerCards />}

      {filteredRestaurantList?.length > 0 && (
        <div className="restaurants">
          {filteredRestaurantList?.map((restaurant) => (
            <Fragment key={restaurant?.info?.id}>
              {restaurant?.info?.veg ? (
                <VegRestaurantLabelCard restaurant={restaurant} />
              ) : (
                <RestaurantCard restaurant={restaurant} />
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
