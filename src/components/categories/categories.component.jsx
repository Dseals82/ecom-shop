import React from 'react';
import CategoryItem from '../category-item/category-item.component';

const Categories = ({categories}) => (
    <div className="categories-container">
        {categories.map(({id, title, imageUrl}) =>{
        return (
            <CategoryItem id={id} title={title} imageUrl={imageUrl} />
        )
        })}       
    </div>
);

export default Categories
