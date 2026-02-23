import { useEffect, useState } from "react";
import { MENU } from "./constants";

const useRestaurantMenuData = () => {

  console.log("useRestaurantMenuData component")
  const [menuData, setMenuData] = useState([]);

  function fetchMenu() {
    setMenuData(MENU.data);
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  return menuData;
};

export default useRestaurantMenuData;
