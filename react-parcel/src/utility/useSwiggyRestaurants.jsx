import { useState, useEffect } from "react";

const useSwiggyRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const fetchAllRestaurants = async () => {
    try {
      setLoading(true);
      let allRestaurants = [];
      const seenIds = new Set();
      let offset = 0;

      for (let i = 0; i < 5; i++) {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=${offset}&page_type=null`
        );

        const data = await response.json();

        const restaurants =
          data?.data?.cards
            ?.filter((card) =>
              card?.card?.card?.["@type"]?.includes("Restaurant")
            )
            .filter((card) => {
              const id = card.card.card.info.id;
              if (seenIds.has(id)) return false;
              seenIds.add(id);
              return true;
            })
            .map((card) => ({
              card: {
                card: {
                  info: card.card.card.info,
                },
              },
            })) || [];

        allRestaurants = [...allRestaurants, ...restaurants];

        offset = data?.data?.pageOffset?.nextOffset;
        if (!offset) break;
      }

      setListOfRestaurants(allRestaurants);
      setFilteredRestaurants(allRestaurants);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterTopRated = () => {
    const filtered = listOfRestaurants.filter(
      (restaurant) => restaurant.card.card.info.avgRating >= 4.5
    );
    setFilteredRestaurants(filtered);
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    loading,
    error,
    filterTopRated,
  };
};

export default useSwiggyRestaurants;