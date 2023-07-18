/* eslint-disable arrow-body-style */
import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';

import { IProductPropsCart } from '../../../../providers/types/types';
import { CartContext } from '../../../../providers/CartContext';

const CartProductCard = ({ProductInCart}:IProductPropsCart) =>{
  const{removeFromCart} = useContext(CartContext);
   return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={ProductInCart.img} alt='Hamburguer' />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>{ProductInCart.name}</StyledTitle>
        <button type='button' aria-label='Remover' onClick={()=>{removeFromCart(ProductInCart)}}>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
}

export default CartProductCard;
