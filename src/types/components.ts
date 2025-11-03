import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";

export type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type CustomLabelProps = {
  error?: string;
  label: string;
  htmlFor?: string;
  idValue?: string;
  icon?: string;
  className?: string;
  shouldBold?: boolean;
  hasRequiredStar?: boolean;
};

export type CustomTextAreaProps = {
  isLoading?: boolean;
  error?: string | ReactNode;
  labelStyles?: string;
  isRequired?: boolean;
  label?: string;
  maxLength?: number
} & Omit<TextAreaProps, 'size'>;

type BasePasswordFieldProps = {
  hasStrengthMeter?: boolean;
};

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type CustomButtonProps = {
  text: string | React.ReactNode;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: React.ReactNode;
} & ButtonProps;

export type CustomInputProps = {
  preAppend?: React.ReactNode;
  postAppend?: React.ReactNode;
  isLoading?: boolean;
  error?: string | ReactNode;
  inputType?: 'string' | 'number' | 'currency' | 'password';
  forgotPassword?: boolean;
} & Omit<InputProps, 'size'> &
  Omit<CustomLabelProps, 'label' | 'error'>;

  export type CustomFieldProps = {
  messageType?: {
    type: 'error' | 'success' | 'info';
    message: string;
  };
  error?: string | ReactNode;
  extra?: React.ReactNode;
  extraBottom?: React.ReactNode;
  labelStyles?: string;
  isRequired?: boolean;
  isLoading?: boolean;
} & CustomLabelProps &
  CustomInputProps &
  CustomTextAreaProps&
  BasePasswordFieldProps;