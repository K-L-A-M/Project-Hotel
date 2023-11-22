import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { StyledTypography } from "../../styles/StyledTypography";
import { StyledRegisterPage } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TFormRegisterValues,
  formRegisterSchema,
} from "../../schema/formRegisterSchema";
import { StyledButton } from "../../styles/StyledButton";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const formatCPF = (value: string): string => {
    // Remove characters que não são dígitos
    const cleanedValue = value.replace(/\D/g, "");
  
    // Adiciona a formatação do CPF
    const cpfArray = cleanedValue.split("");
    cpfArray.splice(3, 0, ".");
    cpfArray.splice(7, 0, ".");
    cpfArray.splice(11, 0, "-");
  
    return cpfArray.join("").slice(0, 14); // Limita o comprimento para o tamanho máximo do CPF
  };

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TFormRegisterValues> = (data) => {
    console.log(data);
    reset();
  };

  const handleCPFChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedCPF = formatCPF(e.target.value);
    // Atualiza o valor do campo com o CPF formatado
    e.target.value = formattedCPF;
  };
  
  return (
    <StyledRegisterPage>
      <StyledTypography type="logo" weight={700} onClick={()=>navigate('/')}>logo</StyledTypography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledTypography type="logo" weight={700}>Registro</StyledTypography>
        <Input
          inputId="name"
          label="Seu Nome aqui"
          placeholder="Digite o seu nome..."
          helper={errors.name?.message}
          {...register("name")}
        />
        <Input
          inputId="email"
          label="Seu email aqui"
          placeholder="Digite o seu email..."
          helper={errors.email?.message}
          {...register("email")}
        />
        <Input
          inputId="cpf"
          label="Seu CPF aqui"
          placeholder="Digite o seu CPF..."
          helper={errors.cpf?.message}
          {...register("cpf")}
          onChange={handleCPFChange}
        />
        <Input
          inputId="address"
          label="Seu endereço aqui"
          placeholder="Digite o seu endereço..."
          helper={errors.address?.message}
          {...register("address")}
        />
        <Input
          inputId="password"
          label="Sua senha aqui"
          placeholder="Digite o sua senha..."
          helper={errors.password?.message}
          {...register("password")}
        />
        <Input
          inputId="confirm"
          label="Confirme sua senha aqui"
          placeholder="confirme sua senha..."
          helper={errors.confirm?.message}
          {...register("confirm")}
        />
        <StyledButton type="submit" width={412} height={57} radius={10}>
          Avançar
        </StyledButton>
        <div className="container_login">
          <StyledTypography>Já tem uma conta logue aqui</StyledTypography>
          <StyledButton
            type="button"
            color="var(--color-dark-blue)"
            colorhover="var(--color-dark-blue-houver)"
            width={412}
            height={57}
            radius={10}
            onClick={() => navigate('/login')}
          >
            Login
          </StyledButton>
        </div>
      </form>
    </StyledRegisterPage>
  );
};
