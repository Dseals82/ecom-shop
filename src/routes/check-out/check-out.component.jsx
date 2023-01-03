import React from "react";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./check-out.styles.jsx";
//import { useContext } from 'react';
//import { CartContext } from '../../context/cart.context';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector.js";
import { useSelector } from "react-redux";
import PaymentForm from "../../components/payment-form/payment-form.component.jsx";

const CheckOut = () => {
  //const { cartItems, cartTotal} = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer className="checkout-container">
      <CheckoutHeader className="checkout-header">
        <HeaderBlock className="header-block">
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default CheckOut;
