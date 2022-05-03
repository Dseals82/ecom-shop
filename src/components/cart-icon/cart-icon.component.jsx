import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/img/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = ({onClick}) => {
  const { cartCount } = useContext(CartContext)
  return (
    <div onClick={onClick} className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
