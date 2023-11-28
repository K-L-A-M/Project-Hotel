import { Dispatch, SetStateAction, createContext } from "react";
import { IAdminContext } from "../interfaces/IAdminContext";
import { IProviderProps } from "../interfaces/IProviderProps";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { IUserRegister } from "../interfaces/IUserRegister";
import { TFormLoginValues } from "../schema/formLoginSchema";

export const AdminContext = createContext({} as IAdminContext);

export const AdminProvider = ({children}: IProviderProps) => {
    const navigate = useNavigate();

    const userRegister = async (FormData: IUserRegister, setIsLoading: Dispatch<SetStateAction<boolean>>) => {
        try {
            setIsLoading(true);
            await api.post("/users/", FormData, { withCredentials: true });
            toast.success("Usuario Cadastrado com sucesso!");
            navigate("/login");
        } catch (error) {
            toast.error("Ops! Algo deu errado ao registrar o novo usuario!");
        } finally {
            setIsLoading(false)
        }
    }

    const login = async (FormData:TFormLoginValues, setIsLoading: Dispatch<SetStateAction<boolean>>) => {
        try {
            setIsLoading(true);
            const data = await api.post("/login/", FormData, { withCredentials: true });
            console.log(data);
            toast.success("Login realizado");
        } catch (error) {
            toast.error("Ops! Algo deu errado ao registrar o novo usuario!");
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <AdminContext.Provider value={{
            userRegister,
            login
        }}>
            {children}
        </AdminContext.Provider>
    )
}