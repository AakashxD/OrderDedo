
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwo, avgRating } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const menuItems = resInfo?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Restaurant Information */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
        <h2 className="text-xl text-gray-600 mb-2">
          {cuisines?.join(", ")} | 🤑 ₹{costForTwo / 100} for two
        </h2>
        <h3 className="text-lg text-gray-500">Average Rating: ⭐ {avgRating}</h3>
      </div>

      {/* Button Section */}
      <div className="text-center mt-6">
        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenu;
