import React from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import {CategoriesContainer} from  './categories.styles.jsx';

const Categories = ({categories}) => (
    <CategoriesContainer>
        {categories.map(({id, title, imageUrl}) =>{
        return (
            <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
        )
        })}       
    </CategoriesContainer>
);

export default Categories
