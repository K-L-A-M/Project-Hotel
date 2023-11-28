import { Dispatch, SetStateAction } from "react";
import { IUserRegister } from "./IUserRegister";
import { TFormLoginValues } from "../schema/formLoginSchema";

export interface IAdminContext {
    userRegister: (formData: IUserRegister, setIsLoading: Dispatch<SetStateAction<boolean>>) => Promise<void>;
    login: (formData: TFormLoginValues, setIsLoading: Dispatch<SetStateAction<boolean>>) => Promise<void>;
}