import React from 'react';
import { Link } from 'react-router-dom';
import {LinkTitle, CategoryPreviewContainer, Preview} from  './category-preview.styles.jsx';
import ProductCard from '../product-card/product-card.component';

function CategoryPreview({title, products}) {
  return (
    <CategoryPreviewContainer>
      <h2>
      <Link to={title}>
        <LinkTitle>{title.toUpperCase()}</LinkTitle>
      </Link>
      </h2>
      <Preview>
        {
            products
                .filter((_, idx) => idx < 4 )
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))

        }
      </Preview>
    </CategoryPreviewContainer>
  )
};

export default CategoryPreview
