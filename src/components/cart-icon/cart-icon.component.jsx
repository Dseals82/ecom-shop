import React from 'react';
import {CartIconContainer, ItemCount, ShoppingCartIcon} from './cart-icon.styles.jsx';
//import { useContext } from 'react';
//import { CartContext } from '../../context/cart.context';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector.js';

const CartIcon = ({onClick}) => {
  //const { cartCount } = useContext(CartContext)
  const cartCount = useSelector(selectCartCount)
  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingCartIcon />
      <ItemCount as='span'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
