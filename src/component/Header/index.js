import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="header-left" to="/">
        <div className="header-left">ReactMeals</div>
      </Link>
      <Link className="header-right" to="/cart">
        <div>
          <FontAwesomeIcon icon={faCartShopping} bounce />
          <span className="text">View Cart</span>
          <span className="quantity">0</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
