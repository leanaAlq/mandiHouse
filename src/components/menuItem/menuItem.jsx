import "./menuItem.scss";
import RedMeat from "../../assets/red-meat.png"; // Tell webpack this JS file uses this image

const MenuItem = () => {
  return (
    <div className="MenuItem">
      <div className="info">
        <span className="name">مندي لحم</span>
        <span className="price">40 ريال </span>
        <p className="description"></p>
      </div>
      <img src={RedMeat} alt="" className="preview" />
    </div>
  );
};

export default MenuItem;
