import React from 'react';
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from  './check-out.styles.jsx'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const CheckOut = () => {
    const { cartItems, cartTotal} = useContext(CartContext);

  
  return (
    <CheckoutContainer className='checkout-container'>
      <CheckoutHeader className='checkout-header'>
          <HeaderBlock className='header-block'>
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
      {
          cartItems.map((cartItem)=> (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
      }
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default CheckOut
