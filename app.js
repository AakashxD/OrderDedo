import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhq5rZN9TJAHFwnhgwyBYZa73GF6Xbx6Q-Q&s"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = {
  "restaurants": [
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
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.4 km",
          "iconType": "ICON_TYPE_EMPTY"
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
        "veg": true,
        "parentId": "319582",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 4.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.4 km",
          "iconType": "ICON_TYPE_EMPTY"
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
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
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
    }
  ]
};

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="img-card"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>Delivery Time: {sla.deliveryTime} mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="res-container">
        {resList.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>All rights reserved by AakashxD</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
