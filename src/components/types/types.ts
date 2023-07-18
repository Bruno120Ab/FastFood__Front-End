import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps{
  label: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}
