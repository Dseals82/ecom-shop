import React, {} from 'react';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const handleClick = () => {
       navigate("/checkout")
    }
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
           {
            cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
           } 
        </div>
        <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
