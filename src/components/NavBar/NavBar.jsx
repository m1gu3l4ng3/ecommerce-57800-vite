import logo from "../../assets/logo.png";
import menucolor from "../../assets/menucolor.jpg";
import gray from "../../assets/gray.png";
import blackwhite from "../../assets/blackwhite.png";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="" />
      </Link>

      <ul className="categories">
        <Link to="/categoria/color" className="category">
          <p>Dibujos a color</p>
          <div className="img-categories">
            <img src={menucolor} alt="" />
          </div>
        </Link>
        <Link to="/categoria/bn" className="category">
          <p>Dibujos a blanco y negro</p>
          <div className="img-categories">
            <img src={blackwhite} alt="" />
          </div>
        </Link>
        <Link to="/categoria/grises" className="category">
          <p>Dibujos a escala de grises</p>
          <div className="img-categories">
            <img src={gray} alt="" />
          </div>
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
