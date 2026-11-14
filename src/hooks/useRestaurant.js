import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/constants";

export const useRestaurant = () => {
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
      restaurantList.filter((restaurant) => restaurant.info?.avgRating > 4.5),
    );
  };

  const handleClearFilters = () => {
    setFilteredRestaurantList(restaurantList);
  };

  const handleSearch = () => {
    const filteredRestaurants = restaurantList.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setFilteredRestaurantList(filteredRestaurants);
  };

  return {
    handleSearch,
    handleClearFilters,
    handleTopRated,
    restaurantList,
    filteredRestaurantList,
    searchQuery,
    setSearchQuery,
  };
};
