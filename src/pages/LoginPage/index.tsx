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

export const LoginPage = () => {
  // const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TFormLoginValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <StyledLoginPage>
      <StyledTypography type="logo" weight={700} onClick={()=>navigate('/')}>
        logo
      </StyledTypography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledTypography type="logo" weight={700}>
          login
        </StyledTypography>
        <Input
          inputId="email"
          label="Seu endereco de email"
          helper={errors.email?.message}
          placeholder="Digite o seu email..."
          {...register("email")}
        />
        <Input
          password={true}
          inputId="password"
          label="Sua senha aqui"
          helper={errors.password?.message}
          placeholder="Digite a sua senha..."
          {...register("password")}
        />
        <StyledButton type="submit" width={412} height={57} radius={10}>
          Avançar
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
            onClick={()=>navigate('/register')}
          >
            Cadastre-se
          </StyledButton>
        </div>
      </form>
    </StyledLoginPage>
  );
};
