import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";

export type CustomButtonProps = {
  text: string | React.ReactNode;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: React.ReactNode;
} & ButtonProps;
