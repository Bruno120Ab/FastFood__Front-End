import { FieldError } from "react-hook-form";

export interface IUser{
  _id: string;
  name: string;
  email: string; 
}

export interface ICart{
  id: number;
  img: string;
  name: string;
  price: number;
  category: string;
}

export interface IProductInCart{
  Product: ICart
}

export interface IProduct{
  id: number;
  img: string;
  name: string;
  price: number;
  category: string;
}

export interface IProductPropsShop {
  ProductList: IProduct;
}

export interface IProductPropsCart {
  ProductInCart: IProduct;
}

export interface ILoginFormValues{
  email: string;
  password: string;
}

export interface IRegisterFormValues{
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  error?: FieldError;
}

export interface IChildren{
  children: React.ReactNode;
}

export interface IUserContext{
  user: IUser | null;
  list: IProduct[] | null;
  userLogin:(formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
  userRegister:(formData: IRegisterFormValues) => Promise<void>;
  userAutoLogin:() => Promise<void>;
}

export interface ICartContext{
  cart: ICart[];
  modal: boolean;
  setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
  openModal: () => void;
  closeModal: () => void;
  cleanCart: () => void;
  addToCart: (product: ICart) => void;
  removeFromCart: (product: IProduct) => void;
}

