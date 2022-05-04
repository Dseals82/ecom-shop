import React from 'react';
import './checkout-item.styles.scss';
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
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=> removeItemToCartHandler(cartItem)}>
                &#10094;
            </div>
            <span className='value'>
                {quantity}
            </span>
            <div className='arrow' onClick={()=> addItemToCartHandler(cartItem)}>
                &#10095;
            </div>
        </span>
        <span className='price'>{price}</span>
        <div onClick={() => removeButtonHandler(cartItem)} className='remove-button'>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;
