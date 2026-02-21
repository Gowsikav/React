import { useEffect, useState } from "react";
import { MENU } from "./constants";

const useRestaurantMenuData = () => {
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
