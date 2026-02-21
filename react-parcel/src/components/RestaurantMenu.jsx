import { useParams } from "react-router-dom";
import Menu from "./Menu";
import useRestaurantMenuData from "../utility/useRestaurantMenuData";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu=useRestaurantMenuData();

  return (
    <div>
      <h2>Restaurant Menu</h2>
      <p>Showing menu for restaurant ID: {resId}</p>
      {menu.map((singleMenu) => (
        <Menu data={singleMenu} key={singleMenu.id} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
