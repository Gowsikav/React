import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
import { MENU } from "../utility/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(MENU.data);
  }, []);

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
