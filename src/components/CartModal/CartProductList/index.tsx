/* eslint-disable arrow-body-style */
import { useContext } from 'react';

import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';

const CartProductList = () => {
  const {cart, cleanCart} = useContext(CartContext);
  const total = cart.reduce((acc, num) => acc + num.price,0)

  return (
    <StyledCartProductList>
      <ul>
        {cart.map((product) => (
          <CartProductCard key={product.id} ProductInCart={product} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R${total.toFixed(2).replace('.',",")}</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={cleanCart}>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  )
};

export default CartProductList;
