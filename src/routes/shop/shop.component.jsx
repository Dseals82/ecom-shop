import React, { useContext,  } from 'react';
import './shop.styles.scss';
import { ProductsContext } from '../../context/products.context';
import ProductCard from '../../components/product-cart/product-card.component';


const  Shop = () => {
const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop
