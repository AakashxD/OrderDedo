import React, { useState } from "react";
import RestaurantCard from "./ResturantCard"

const Body = () => {
  // local state variable 
  const [ResList, setResList] = useState([
    {
      "info": {
        "id": "18579",
        "name": "Bille Di Hatti",
        "cloudinaryImageId": "agg7imcn7bs2bng028zn",
        "locality": "Kamla Nagar",
        "areaName": "Kamla Nagar",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Street Food",
          "Snacks",
          "North Indian"
        ],
        "avgRating": 4.2,
        "parentId": "4639",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 5.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "5.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    },
    {
      "info": {
        "id": "279866",
        "name": "Ghar ka Khana by EatFit",
        "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
        "locality": "Laxmi Narain Street",
        "areaName": "Paharganj",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Home Food",
          "Healthy Food",
          "Indian",
          "Punjabi",
          "South Indian",
          "Rajasthani",
          "Maharashtrian",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "422576",
    
        "sla": {
          "deliveryTime": 33,
       
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          
        }
      }
    },
    {
      "info": {
        "id": "258198",
        "name": "Great Indian Khichdi by EatFit",
        "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
        "locality": "Chuna Mandi",
        "areaName": "Paharganj",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Home Food",
          "Indian",
          "North Indian",
          "Healthy Food",
          "Snacks",
          "Desserts",
          "Rajasthani",
          "South Indian",
          "Maharashtrian",
          "Sweets"
        ],
        "avgRating": 4.5,
    
        "avgRatingString": "4.5",
       
        "sla": {
          "deliveryTime": 32,
         
        }
      }
    },
    {
      "info": {
        "id": "502412",
        "name": "Suchali's Artisan Bakehouse",
        "cloudinaryImageId": "f9f262d0c80a41de4c1a890eb36d1085",
        "locality": "Chittaranjan Park",
        "areaName": "Connaught Place",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "196351",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 29,
         
          "slaString": "25-30 mins",
        
        }
      }
    },
    {
      "info": {
        "id": "45854",
        "name": "Southy",
        "cloudinaryImageId": "nwqta5tkonjagb5jdmkd",
        "locality": "Connaught Place",
        "areaName": "Connaught Place",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "889",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    },
    {
      "info": {
        "id": "49854",
        "name": "Southy",
        "cloudinaryImageId": "nwqta5tkonjagb5jdmkd",
        "locality": "Connaught Place",
        "areaName": "Connaught Place",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 3.8,
        "parentId": "889",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    }
    ,
    {
      "info": {
        "id": "45804",
        "name": "Southy",
        "cloudinaryImageId": "nwqta5tkonjagb5jdmkd",
        "locality": "Connaught Place",
        "areaName": "Connaught Place",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.8,
        "parentId": "889",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    }
    ,
    {
      "info": {
        "id": "45954",
        "name": "Southy",
        "cloudinaryImageId": "nwqta5tkonjagb5jdmkd",
        "locality": "Connaught Place",
        "areaName": "Connaught Place",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "889",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    }
    ,
    {
      "info": {
        "id": "45890",
        "name": "Southy",
        "cloudinaryImageId": "nwqta5tkonjagb5jdmkd",
        "locality": "Connaught Place",
        "areaName": "Connaught Place",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 3.7,
        "parentId": "889",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    }
    ,
    {
      "info": {
        "id": "45867",
        "name": "Southy",
        "cloudinaryImageId": "nwqta5tkonjagb5jdmkd",
        "locality": "Connaught Place",
        "areaName": "Connaught Place",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 2,
        "parentId": "889",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    }
    
  ]);

  const handleFilter = () => {
    const filtered = ResList.filter((res) => res.info.avgRating > 4);
    setResList(filtered);
  };

  return (
    <div className="body">
      <div className="searchBar">
        <input type="text" placeholder="Search" />
        <button className="filter-btn" onClick={handleFilter}>
          Filter Restaurants
        </button>
      </div>
      <div className="res-container">
        {ResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
