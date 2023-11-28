// import { useState } from "react";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/StyledButton";
import { StyledTypography } from "../../styles/StyledTypography";
import { StyledLoginPage } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  TFormLoginValues,
  formLoginSchema,
} from "../../schema/formLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_completo.png";
import { useContext, useState } from "react";
import { AdminContext } from "../../providers/AdminContext";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
  });
  const { login } = useContext(AdminContext);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TFormLoginValues> = (data) => {
    login(data, setIsLoading);
    reset();
  };

  return (
    <StyledLoginPage>
      <img src={logo} onClick={() => navigate("/")} alt="Logo Hotel" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledTypography type="title" weight={700}>
          login
        </StyledTypography>
        <Input
          inputId="email"
          label="E-mail"
          helper={errors.email?.message}
          placeholder="E-mail de login"
          {...register("email")}
        />
        <Input
          password={true}
          inputId="password"
          label="Senha"
          helper={errors.password?.message}
          placeholder="Digite a sua senha"
          {...register("password")}
        />
        <StyledButton
          type="submit"
          width={412}
          height={57}
          radius={10}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Avançar"}
        </StyledButton>
        <div className="container_register">
          <StyledTypography>Ainda não possui uma conta?</StyledTypography>
          <StyledButton
            type="button"
            color="var(--color-dark-blue)"
            colorhover="var(--color-dark-blue-houver)"
            width={412}
            height={57}
            radius={10}
            onClick={() => navigate("/register")}
          >
            Cadastrar
          </StyledButton>
        </div>
      </form>
    </StyledLoginPage>
  );
};
