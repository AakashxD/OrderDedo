// React Elemet
const heading = (
    <h1 className="root" tabIndex="1">
      Aakash Singh using JSX💕🚀
    </h1>
  );
  // react Components
  //-> class BAsed components -> fucntional components -NEW
  const elem=<span>bye babes</span>
  const Title = () => (
    
    <h1 className="head" tabIndex="5">
      {elem}
      Namste react
    </h1>
  );
   
  // React Functional Components
  // components compostions
  const HeadingComp = () => (
    <div id="box">
      <Title />
      {console.log("hii JS")}
      <h1 id="container"> hii components</h1>
    </div>
    
  );
  
  // const Head=()=> <h1> heelo new syntax</h1>
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(heading);
  // over write
  root.render(<HeadingComp />);


  
//   import React, { useEffect, useState } from "react";
// import RestaurantCard from "./ResturantCard";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   // Local state variables
//   const [resList, setResList] = useState([]);
//   const [resName, setResName] = useState("");
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const handleFilter = () => {
//     const filtered = resList.filter((res) => res.info.avgRating > 4);
//     setResList(filtered);
//   };

//   const fetchData = async (pageNum) => {
//     setLoading(true);
//     const data = await fetch(
//       `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${pageNum}`
//     );

//     const json = await data.json();
//     console.log(json);
//     setResList((prevResList) => [
//       ...prevResList,
//       ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [],
//     ]);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData(page);
//   }, [page]);

//   const handleSearch = () => {
//     const filtered = resList.filter((res) =>
//       res.info.name.toLowerCase().includes(resName.toLowerCase())
//     );
//     setResList(filtered);
//   };

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   // Conditional rendering
//   if (resList.length === 0 && !loading) {
//     return <Shimmer />;
//   }

//   return (
//     <div className="body">
//       <div className="searchBar">
//         <input
//           type="text"
//           className="search"
//           value={resName}
//           onChange={(e) => {
//             setResName(e.target.value);
//           }}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div>
//         <button className="filter-btn" onClick={handleFilter}>
//           Filter Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {resList.map((restaurant) => (
//           <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//         ))}
//       </div>
//       <div className="load-more">
//         <button onClick={handleLoadMore} disabled={loading}>
//           {loading ? "Loading..." : "Load More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Body;

