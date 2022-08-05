import React from 'react';
import {CheckoutItemContainer,CheckoutItemImage, ImageContainer, Arrow, RemoveButton, Value, Span, Quantity} from './checkout-item.styles.jsx';
//import { useContext } from 'react';
//import { CartContext } from '../../context/cart.context';
import { useSelector } from 'react-redux';
import {selectCartItems } from '../../store/cart/cart.selector.js';
import {deleteItemFromCartButton, addItemToCart, removeItemFromCart} from '../../store/cart/cart.action';
import {useDispatch} from 'react-redux';

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const {name, imageUrl, price, quantity} = cartItem;
    //const {deleteItemFromCartButton, addItemToCart, removeItemFromCart} = useContext(CartContext);
    

    
    const removeButtonHandler = (cartItem) => {
        return dispatch(deleteItemFromCartButton(cartItems, cartItem))
    }
    const addItemToCartHandler = (cartItem) => {
        return dispatch(addItemToCart(cartItems, cartItem))
    }
    const removeItemToCartHandler = (cartItem) => {
        return dispatch(removeItemFromCart(cartItems,cartItem))
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
