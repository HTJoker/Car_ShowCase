import { MouseEventHandler } from "react";

export type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
};

export type SearchComapnyProps = {
  company: string;
  setCompany: (company: string) => void;
};

export type CustomFilterProps = {
  title: string;
};
