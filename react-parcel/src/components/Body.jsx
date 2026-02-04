import { useState, useEffect } from "react";
import RestoCard from "./RestoCard";
import { Link } from "react-router-dom";

export let Body = () => {
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
      let offset = 0;

      for (let i = 0; i < 5; i++) {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=${offset}&page_type=null`,
        );
        const data = await response.json();

        console.log(`Page ${i} Response:`, data);

        const restaurants =
          data?.data?.cards
            ?.filter((card) =>
              card?.card?.card?.["@type"]?.includes("Restaurant"),
            )
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
    } catch (error) {
      console.log("Error fetching restaurants:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTopRated = () => {
    const filtered = listOfRestaurants.filter(
      (restaurant) => restaurant.card.card.info.avgRating >= 4.5,
    );
    setFilteredRestaurants(filtered);
  };

  if (loading)
    return (
      <div className="body">
        <h2>Loading...</h2>
      </div>
    );
  if (error)
    return (
      <div className="body">
        <h2>Error: {error}</h2>
      </div>
    );

  return (
    <div className="body">
      <div className="search">
        <button onClick={handleTopRated}>Top rated</button>
      </div>
      <h1>Fast Food</h1>
      <h3>Order in deliciously juicy and tasty items to curb your cravings!</h3>
      <h5>Restaurants to explore ({filteredRestaurants.length})</h5>
      <div className="food-items">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.card.card.info.id}`}
              key={restaurant.card.card.info.id}
            >
              <RestoCard resobj={restaurant} />
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};
