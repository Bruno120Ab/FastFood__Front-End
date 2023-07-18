/* eslint-disable arrow-body-style */
import { useContext } from 'react';

import ProductCard from './ProductCard';

import { StyledProductList } from './style';

import { UserContext } from '../../providers/UserContext';

const ProductList = () => {
  const { list } = useContext(UserContext);

  return (
    <StyledProductList>
      {list?.map((Product) => (
        <ProductCard key={Product.id} ProductList={Product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
