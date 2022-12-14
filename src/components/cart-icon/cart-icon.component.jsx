import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggelIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggelIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">2</span>
    </div>
  );
};

export default CartIcon;
