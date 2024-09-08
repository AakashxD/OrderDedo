
const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
    console.log(resData.info);
    return (
      <div className="res-card m-4 p-4 w-[250px] rounded-lg  bg-gray-100 hover:bg-gray-200" >
        <img
          className="img-card"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating: {avgRating}</h4>
        <h4>Delivery Time: {sla.deliveryTime} mins</h4>
      </div>
    );
  };

  // higher Order Component 
  // input - resturant ==> ResturantCardPromoted 

  
  export default RestaurantCard;