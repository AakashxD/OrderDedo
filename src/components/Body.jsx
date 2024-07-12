import React, { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard"
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import ResturantMenu from "./ResturantMenu"
const Body = () => {
  // local state variable
  const [ResList, setResList] = useState([]);
  const [ResName, setResName] = useState("");

  const handleFilter = () => {
    const filtered = ResList.filter((res) => res.info.avgRating > 4);
    setResList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      const restaurants =
        json?.data?.cards?.find(
          (card) => card.card.card.gridElements?.infoWithStyle?.restaurants
        )?.card.card.gridElements.infoWithStyle.restaurants || [];
      setResList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filtered = ResList.filter((res) =>
      res.info.name.toLowerCase().includes(ResName.toLowerCase())
    );
    setResList(filtered);
  };

  if (ResList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="searchBar">
        <input
          type="text"
          className="search"
          value={ResName}
          onChange={(e) => setResName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <button className="filter-btn" onClick={handleFilter}>
          Filter Restaurants
        </button>
      </div>
      <div className="res-container">
        {ResList.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
