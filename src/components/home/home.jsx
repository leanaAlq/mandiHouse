import "./home.scss";
import MenuItem from "../menuItem/menuItem";
import Logo from "../../assets/logo.png";
const Home = () => {
  return (
    <div className="Home">
      <img className="logo" src={Logo}></img>
      <button className="order">اطلب الآن </button>
    </div>
  );
};

export default Home;
