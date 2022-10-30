import { OptionCreator } from "./types";

export const cls = (...classes: string[]) => classes.join(" ");
export const cycler = (cycle: number) => (num: number) =>
  ((num % cycle) + cycle) % cycle;
export const attachComma = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const optionCreator: OptionCreator =
  (option) =>
  (customOpts = {}) => {
    const [name, opts] = option;
    return [name, { ...opts, ...customOpts }];
  };

export const regOptEnter = {
  email: optionCreator([
    "email",
    {
      required: "email이 입력되지 않았습니다.",
      pattern: {
        value:
          /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
        message: "email 형식을 확인해주세요",
      },
    },
  ]),
  password: optionCreator([
    "password",
    {
      required: "비밀번호를 입력해주세요",
      pattern: {
        value: /(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])/i,
        message: "영문, 숫자, 특수문자를 조합해서 입력해주세요.",
      },
      minLength: {
        value: 4,
        message: "비밀번호는 최소 4자 이상 입력해 주세요",
      },
    },
  ]),
  confirm: optionCreator([
    "confirm",
    {
      required: "중복확인이 필요합니다",
    },
  ]),
};
