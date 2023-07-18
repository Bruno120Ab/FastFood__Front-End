/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
import { StyledLoginPage } from './style';
import { StyledButtonLink } from '../../styles/button';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

import LoginForm from '../../components/Form/LoginForm';
import IllustrationBox from '../../components/IllustrationBox';

import ShopPage from '../ShopPage';

const LoginPage = () => {
  const token = localStorage.getItem("@BurguerToken:")
  
  return (
   <>
   {
     token ? (<ShopPage />) : (
     <StyledLoginPage>
      <StyledContainer>
        <div className='flexGrid'>
          <div className='left'>
            <StyledGridBox className='formBox'>
              <StyledTitle tag='h2' $fontSize='three'>
                Login
              </StyledTitle>
              <LoginForm />
              <StyledParagraph textAlign='center' fontColor='gray'>
                Crie sua conta para saborear muitas delícias e matar sua fome!
              </StyledParagraph>
              <StyledButtonLink to='/register' $buttonSize='default' $buttonStyle='gray'> Cadastrar </StyledButtonLink>
            </StyledGridBox>
          </div>
          <div className='right'>
            <IllustrationBox />
          </div>
        </div>
      </StyledContainer>
    </StyledLoginPage>)
   }
   </>
  )
};

export default LoginPage;
