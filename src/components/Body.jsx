import React, { useContext, useEffect, useState } from "react";
import RestaurantCard from './ResturantCard'  
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import ResturantMenu from './ResturantMenu';
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/ContextUserInfo";

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
      const {loggedIn,setUserName}=useContext(userContext)
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
      <div className="searchBar m-4 p-4  flex items-center">
        <input
          type="text"
          className="search  px-4 py-2 border border-gray-300"
          value={resName}
          onChange={(e) => setResName(e.target.value)}
        /> 
        <button className="p-4 bg- m-4 bg-green-400 rounded-lg " onClick={handleSearch}>Search</button>
        <div>
        <button className="filter-btn bg-gray-400 px-4 py-4 m-4 rounded-lg" onClick={handleFilter}>
          Filter Restaurants
        </button>
      </div>
      {/* <div className="search p-4 m-4 flex items-center">
           <label className="text text-black">USERNAME</label>
           <input className="border border-black p-2" value={loggedIn} onChange={(e)=>setUserName(e.target.value)}></input>
      </div> */}

      </div>
      <div className="res-container flex flex-wrap">
        {resList.map((restaurant) => (
       
       <Link   key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>  
   ))}    
      </div>
    </div>
  );
};
export default Body;
