import { RegisterOptions } from "react-hook-form";
export interface Picture {
  urls: string;
  color: string;
}
export interface Item {
  cartegory: string;
  brand: string;
  name: string;
  price: number;
  isFast: boolean;
  imgUrl: string;
  color: string;
}
export type Option = [keyof LoginForm, RegisterOptions];

export type OptionCreator = (
  option: Option
) => (customOpts?: RegisterOptions) => Option;

export interface LoginForm {
  email: string;
  password: string;
  confirm?: string;
}
