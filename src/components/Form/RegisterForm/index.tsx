import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../Input';

import { StyledForm } from '../../../styles/form';
import { StyledButton } from '../../../styles/button';

import { schemaRegister } from '../../../validators/Validator';

import { IRegisterFormValues } from '../../../providers/types/types';
import { UserContext } from '../../../providers/UserContext';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<IRegisterFormValues>({resolver: yupResolver(schemaRegister)}); 
  const { userRegister } = useContext(UserContext);
  
  return (
    <StyledForm onSubmit={handleSubmit(userRegister)}>
      <Input label='Email' type='email' register={register("email")} error={errors.email} />
      <Input label='Nome'   type='text' register={register("name")}  error={errors.name} />
      <Input label='Senha'   type='password' register={register("password")} error={errors.password} />
      <Input label='Confirmar senha'   type='password' register={register("confirmPassword")} error={errors.confirmPassword} />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
};

export default RegisterForm;
