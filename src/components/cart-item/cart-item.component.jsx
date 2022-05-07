import React from 'react';
import {CartItemContainer, CartItemImage,ItemDetails, Name} from  './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`}/>
      <ItemDetails>
        <Name as='span'>{name}</Name>
        <Name as='span'>{quantity} x ${price}</Name>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
