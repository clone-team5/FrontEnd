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
export type Option<T> = [keyof T, RegisterOptions];

export type OptionCreator = <T>(option: Option<T>) => SubOptionCreator<T>;

export type SubOptionCreator<T> = (customOpts?: RegisterOptions) => Option<T>;

export interface LoginForm {
  email: string;
  password: string;
}
export interface JoinForm extends LoginForm {
  size?: 220 | 230 | 240 | 250 | 260 | 270 | 280 | 290 | 300 | 310 | 320 | 330;
  age: [boolean, boolean];
  notification: [boolean, boolean, boolean];
  ["age.0"]: boolean;
  ["age.1"]: boolean;
  ["age.2"]: boolean;
  ["notification.0"]: boolean;
  ["notification.1"]: boolean;
}
