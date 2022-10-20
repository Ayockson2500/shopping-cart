import { Link } from "react-router-dom";
import { menuElents } from "./navbarElements";
import { GrCart } from "react-icons/gr";
import "./navbar.scss";
import { Navbar, Container } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const NavBar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar
      sticky={"top"}
      className="bg-white shadow-sm mb-3 d-flex align-items-center justify-content-between p-4 nav-bar"
    >
      <Container>
        {menuElents.map((item, idx) => {
          return (
            <div key={idx}>
              <Link to={`${item.url}`}>{item.title}</Link>
            </div>
          );
        })}
        {cartQuantity > 0 && (
          <button onClick={openCart}>
            <GrCart className="cart-icon" />
            <div className="d-flex justify-content-center align-items-center rounded-circle bg-danger cart-counter">
              {cartQuantity}
            </div>
          </button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
