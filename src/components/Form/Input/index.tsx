import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

import { IInputProps } from '../../types/types';

const Input = ({ label, type, register, error }: IInputProps) => ( // Passar por props os campos abaixo.
  <fieldset>
    <StyledTextField type={type} label={label} {...register} />
    {
      error 
      ? <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
      : null
    }
  </fieldset>
);

export default Input;
  