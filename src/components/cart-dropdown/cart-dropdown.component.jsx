import React from 'react';
import { useNavigate } from 'react-router-dom';
import {CartDropdownContainer, CartItems, EmptyMessage} from  './cart-dropdown.styles.jsx';
import CartItem from '../cart-item/cart-item.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const handleClick = () => {
       navigate("/checkout")
    }
  return (
    <CartDropdownContainer>
        <CartItems>
        {
          cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
          ) : (
            <EmptyMessage>You cart is empty</EmptyMessage>
          )
        }
        </CartItems>
        <Button buttonType={BUTTON_TYPE_CLASSES.checkout} onClick={handleClick}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
