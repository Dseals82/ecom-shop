import React from 'react';
import {ProductCardContainer, ProductCardImg, Footer, Name, Price} from './product-card.styles.jsx';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    return addItemToCart(product)
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
