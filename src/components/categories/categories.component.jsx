import React from 'react';
import CategoryItem from '../category-item/category-item.component';
import './categories.styles.scss';

const Categories = ({categories}) => (
    <div className="categories-container">
        {categories.map(({id, title, imageUrl}) =>{
        return (
            <CategoryItem key={id} title={title} imageUrl={imageUrl} />
        )
        })}       
    </div>
);

export default Categories
