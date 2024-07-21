import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwo, avgRating } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ") + "🤑 " + costForTwo / 100}</h2>
      <h2>{costForTwo}</h2>
      <h3>{avgRating}</h3>
      <h2>Menu</h2>
      <ul></ul>
    </div>
  );
};

export default RestaurantMenu;
