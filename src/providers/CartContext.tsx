import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

import { IChildren, ICartContext, IProduct, ICart } from './types/types';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IChildren) => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  const cleanCart = () => {
    setCart([]);
    toast.success('Carrrinho está limpo');
  };

  const addToCart = (product: ICart) => {
    if (cart.some((products) => products.name === product.name)) {
      toast.error(`Este produto ${product.name} já foi adicionado no carrinho`);
    } else {
      toast.success('Produto adicionado no Carrinho');
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product: IProduct) => {
    const removeProduct = cart.filter((products) => products.id !== product.id);
    setCart(removeProduct);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        modal,
        setCart,
        closeModal,
        openModal,
        cleanCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
