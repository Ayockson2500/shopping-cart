import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "../components/CartItem";
import { storeItems } from "./data/items";
import formatCurrency from "../utils/formatCurrency";
import { Link } from "react-router-dom";

type shoppingCartProps = {
  isOpen?: boolean;
};

const ShoppingtCart = ({ isOpen }: shoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-">
              Total: &nbsp;
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(
                    (storeItem) => storeItem.id === cartItem.id
                  );
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
      <div>
        {/* <Link to="/checkout">Check Out</Link> */}
      </div>
    </>
  );
};

export default ShoppingtCart;
