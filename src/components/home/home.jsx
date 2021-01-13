import "./home.scss";
import MenuItem from "../menuItem/menuItem";
import Logo from "../../assets/logo.png";
const Home = () => {
  return (
    <div className="Home">
      <img className="logo" src={Logo}></img>
      <a href="https://wa.me/966504403040" className="order">
        اطلب الآن
      </a>
    </div>
  );
};

export default Home;
