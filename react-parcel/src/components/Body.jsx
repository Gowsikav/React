import RestoCard from "./RestoCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import useSwiggyRestaurants from "../utility/useSwiggyRestaurants";

export let Body = () => {
  const {
    filteredRestaurants,
    loading,
    error,
    filterTopRated,
  } = useSwiggyRestaurants();

  let isOnline = useOnlineStatus();

  if (!isOnline) {
    return <h1>Looks like you are offline....</h1>;
  }

  if (loading) {
    return (
      <div className="body">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="body">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="search">
        <button onClick={filterTopRated}>Top rated</button>
      </div>

      <h1>Fast Food</h1>
      <h3>
        Order in deliciously juicy and tasty items to curb your cravings!
      </h3>
      <h5>
        Restaurants to explore ({filteredRestaurants.length})
      </h5>

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