import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/constants";

export const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `${API_BASE_URL}/listRestaurantMenu/${resId}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      setRestaurantInfo(data?.data);
    };

    fetchData();
  }, []);

  return { restaurantInfo };
};
