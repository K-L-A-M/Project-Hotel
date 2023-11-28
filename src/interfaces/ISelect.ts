import { SelectHTMLAttributes } from "react";

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  helper?: string;
  label?: string;
  selectId?: string;
  items?: string[];
  placeholder?: string;
}
