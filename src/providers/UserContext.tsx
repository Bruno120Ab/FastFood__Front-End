import { useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  IChildren,
  IUserContext,
  ILoginFormValues,
  IRegisterFormValues,
  IUser,
  IProduct,
} from './types/types';

import Axios from '../service/axios';

export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [list, setList] = useState<IProduct[] | null>(null);

  const userAutoLogin = async () => {
    const token = localStorage.getItem('@BurguerToken:');

    if (token) {
      try {
        const response = await Axios.get('/users/profile', {
          headers: {
            auth: token,
          },
        });
        setUser(response.data.user);
        navigate('/shop');
      } catch (error) {
        // console.log(error);
      }
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await Axios.post('/login', formData);
      const token = response.data.accessToken;
      localStorage.setItem('@BurguerToken:', token);
      navigate('/shop');
      setUser(response.data.user);
    } catch (error) {
      toast.error('Reveja todos campos novamente');
    }
  };

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      await Axios.post('/users', formData);
      navigate('/');
    } catch (error) {
      // console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem('@BurguerToken:');
    navigate('/');
    setUser(null);
  };

  const renderProduct = () => {
    const token = localStorage.getItem('@BurguerToken:');

    useEffect(() => {
      const getProducts = async () => {
        try {
          const response = await Axios.get<IProduct[] | null>('/products', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setList(response.data);
          // window.location.reload();
        } catch (error) {
          // console.log(error);
        }
      };
      getProducts();
    }, []);
  };
  renderProduct();

  return (
    <UserContext.Provider
      value={{ user, list, userLogout, userAutoLogin, userLogin, userRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};
