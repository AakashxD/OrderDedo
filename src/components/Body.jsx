import React, { useEffect, useState } from "react";
import RestaurantCard from './ResturantCard'  
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import ResturantMenu from './ResturantMenu';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // local state variable
  const [resList, setResList] = useState([]);
  const [resName, setResName] = useState("");

  const handleFilter = () => {
    const filtered = resList.filter((res) => res.info.avgRating > 4);
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
    const filtered = resList.filter((res) =>
      res.info.name.toLowerCase().includes(resName.toLowerCase())
    );
    setResList(filtered);
  };
 const onlineStatus=useOnlineStatus();
 if(onlineStatus===false){
  return <h1> Oops your are offline ,please check your internet connection</h1>
 }
  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="searchBar">
        <input
          type="text"
          className="search"
          value={resName}
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
        {resList.map((restaurant) => (
       
       <Link   key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
    
   ))}
       
      </div>
    </div>
  );
};

export default Body;
