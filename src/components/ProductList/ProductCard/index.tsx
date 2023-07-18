/* eslint-disable arrow-body-style */
import { useContext } from 'react';

import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';

import { IProductPropsShop } from '../../../providers/types/types';
import { CartContext } from '../../../providers/CartContext';

const ProductCard = ({ProductList}:IProductPropsShop) => {
  const{addToCart} = useContext(CartContext)

  return (
    <StyledProductCard>
    <div className='imageBox'>
      <img src={ProductList.img} alt='Hamburguer' />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
        {ProductList.name}
      </StyledTitle>
      <StyledParagraph className='category'>{ProductList.category}</StyledParagraph>
      <StyledParagraph className='price'>R$ {ProductList.price.toFixed(2).replace(".",",")}</StyledParagraph>
      <StyledButton  onClick={()=>{addToCart(ProductList)}} $buttonSize='medium' $buttonStyle='green'>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
  )
};

export default ProductCard;
