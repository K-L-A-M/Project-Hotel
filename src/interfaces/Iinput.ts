import { InputHTMLAttributes } from "react";

export interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
    helper ?: string;
    password?: boolean;
    label?: string;
    inputId?: string;
}