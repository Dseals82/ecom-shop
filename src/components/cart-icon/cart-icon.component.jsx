import React from 'react';
import {CartIconContainer, ItemCount, ShoppingCartIcon} from './cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = ({onClick}) => {
  const { cartCount } = useContext(CartContext)
  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingCartIcon />
      <ItemCount as='span'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
