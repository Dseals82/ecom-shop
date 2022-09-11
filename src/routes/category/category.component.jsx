import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
//import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import {CategoryContainer, CategoryContainerTitle} from './category.styles.jsx';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

const  Category = () => {
  const { category } = useParams();
  //const {categoriesMap} = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  console.log('Loading:', isLoading)
  console.log('Mapped:', categoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  },[category, categoriesMap]);

  return (
    <Fragment>
    <CategoryContainerTitle>{category.toUpperCase()}</CategoryContainerTitle>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <CategoryContainer>
        {products &&
          products.map((product) => <ProductCard key={product.id} product={product}/>)
        }
      </CategoryContainer>
        )
      }  
    </Fragment>
  )
}

export default Category
