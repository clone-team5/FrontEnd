export const cls = (...classes: string[]) => classes.join(" ");
export const cycler = (cycle: number) => (num: number) =>
  ((num % cycle) + cycle) % cycle;
