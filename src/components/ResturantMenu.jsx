import { useState, useEffect } from "react";
import Shimer from "./Shimmer";

const ResturantMenu = () => {
  const [ResInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  const restaurantInfo = ResInfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0];
  const { name, cuisine, costForTwoMessage, itemCards } = restaurantInfo || {};

  return ResInfo === null ? (
    <Shimer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        <p>
          {cuisine?.join(", ")} - {costForTwoMessage}
        </p>
      </h2>
      <ul>
        {itemCards?.map((item, index) => (
          <li key={index}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
