import React from 'react';
import {CheckoutItemContainer,CheckoutItemImage, ImageContainer, Arrow, RemoveButton, Value, Span, Quantity} from './checkout-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {deleteItemFromCartButton, addItemToCart, removeItemFromCart} = useContext(CartContext);
    const removeButtonHandler = (cartItem) => {
        return deleteItemFromCartButton(cartItem)
    };
    const addItemToCartHandler = (cartItem) => {
        return addItemToCart(cartItem)
    }
    const removeItemToCartHandler = (cartItem) => {
        return removeItemFromCart(cartItem)
    }
  return (
    <CheckoutItemContainer>
        <ImageContainer>
            <CheckoutItemImage src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <Span>{name}</Span>
        <Quantity>
            <Arrow onClick={()=> removeItemToCartHandler(cartItem)}>
                &#10094;
            </Arrow>
            <Value>
                {quantity}
            </Value>
            <Arrow onClick={()=> addItemToCartHandler(cartItem)}>
                &#10095;
            </Arrow>
        </Quantity>
        <Span>{price}</Span>
        <RemoveButton onClick={() => removeButtonHandler(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;
