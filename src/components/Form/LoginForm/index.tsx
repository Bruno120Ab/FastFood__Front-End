import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { ILoginFormValues } from '../../../providers/types/types';
import { UserContext } from '../../../providers/UserContext';

import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

import { schemaLogin } from '../../../validators/Validator';
import Input from '../Input';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<ILoginFormValues>({resolver: yupResolver(schemaLogin)});
  const { userLogin } = useContext(UserContext)

  return (
    <StyledForm onSubmit={handleSubmit(userLogin)}>
      <Input label='Email' type='email' register={register("email")} error={errors.email} />
      <Input label='Senha' type='password' register={register("password")} error={errors.password} />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  )
};

export default LoginForm;
