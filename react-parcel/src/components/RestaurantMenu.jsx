import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  return (
    <div>
      <h2>Restaurant Menu</h2>
      <p>Showing menu for restaurant ID: {resId}</p>
    </div>
  );
};

export default RestaurantMenu;