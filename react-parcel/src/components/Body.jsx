import { CARD_DATA } from "../utility/constants";
import RestoCard from "./RestoCard";

export let Body = () => {
  return (
    <div className="body">
      <h1>Fast Food</h1>
      <h3>Order in deliciously juicy and tasty items to curb your cravings!</h3>
      <h5>Restaurants to explore</h5>
      <div className="food-items">
        {CARD_DATA.map((restaurant) => (
          <RestoCard resobj={restaurant} key={restaurant.card.card.info.id} />
        ))}
      </div>
    </div>
  );
};
