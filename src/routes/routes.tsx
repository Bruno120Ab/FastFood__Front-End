import { Routes, Route } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import { CartProvider } from '../providers/CartContext';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProtectedRoutes from '../pages/ProtectedRoutes';
import ShopPage from '../pages/ShopPage';

const Router = () => (
  <Routes>
    <Route path='/' element={ <LoginPage />  }/>
    <Route path='/register' element={ <RegisterPage /> } />
    <Route path='/shop' element={ <ProtectedRoutes /> }>
      <Route index element={<CartProvider> <ShopPage /> </CartProvider>} />
    </Route>
  </Routes>
);

export default Router;
