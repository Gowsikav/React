import { useEffect, useState } from "react";
import { RES_DATA } from "../utility/constants";
import RestoCard from "./RestoCard";

export let Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(RES_DATA);

  useEffect(() => fetchData(), []);

  async function fetchData() {
  console.log("fetchData function");
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            let filteredData = listOfRestaurants.filter(
              (restaurant) => restaurant.card.card.info.avgRating >= 4.5
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
          <RestoCard resobj={restaurant} key={restaurant.card.card.info.id} />
        ))}
      </div>
    </div>
  );
};
