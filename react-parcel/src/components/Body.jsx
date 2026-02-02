import { useState } from "react";
import { RES_DATA } from "../utility/constants";
import RestoCard from "./RestoCard";
import { Link } from "react-router-dom";

export let Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(RES_DATA);

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            let filteredData = listOfRestaurants.filter(
              (restaurant) => restaurant.card.card.info.avgRating >= 4.5,
            );
            setListOfRestaurants(filteredData);
          }}
        >
          Top rated
        </button>
      </div>
      <h1>Fast Food</h1>
      <h3>Order in deliciously juicy and tasty items to curb your cravings!</h3>
      <h5>Restaurants to explore</h5>
      <div className="food-items">
        {listOfRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.card.card.info.id}`}
            key={restaurant.card.card.info.id}
          >
            <RestoCard resobj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
