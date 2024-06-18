
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
  export default RestaurantCard;