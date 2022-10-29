export const cls = (...classes: string[]) => classes.join(" ");
export const cycler = (cycle: number) => (num: number) =>
  ((num % cycle) + cycle) % cycle;
export const attachComma = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
