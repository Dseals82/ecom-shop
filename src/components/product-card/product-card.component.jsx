import React from 'react';
import {ProductCardContainer, ProductCardImg, Footer, Name, Price} from './product-card.styles.jsx';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
//import { useContext } from 'react';
//import { CartContext } from '../../context/cart.context';
import { addItemToCart } from '../../store/cart/cart.action.js';
import { useSelector } from 'react-redux';
import {selectCartItems } from '../../store/cart/cart.selector.js';
import { useDispatch } from 'react-redux';


const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;
  //const { addItemToCart } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch()
  
  const addProductToCart = () => {
    console.log('add product')
    dispatch(addItemToCart(cartItems, product))
  }
  return (
    <ProductCardContainer>
      <ProductCardImg alt={`${name}`} src={imageUrl}  />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to Cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
