import { useEffect, useState } from "react";
import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";
import { API_BASE_URL } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fecthData = async () => {
      const apiUrl = `${API_BASE_URL}/listRestaurants`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const restaurants =
        data?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantList(restaurants);
      setFilteredRestaurantList(restaurants);
    };

    fecthData();
  }, []);

  const handleTopRated = () => {
    setFilteredRestaurantList(
      restaurants.filter((restaurant) => restaurant.rating > 4.5),
    );
  };

  const handleClearFilters = () => {
    setFilteredRestaurantList(restaurants);
  };

  const handleSearch = () => {
    const filteredRestaurants = restaurantList.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setFilteredRestaurantList(filteredRestaurants);
  };

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
          {filteredRestaurantList.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
