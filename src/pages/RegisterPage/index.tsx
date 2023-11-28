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
import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../providers/AdminContext";
import { formatCPF } from "../../utils/cpfUtils";
import { formatPhoneNumber } from "../../utils/phoneUtils";
import { Select } from "../../components/Select";
import { countries } from "countries-list";
import logo from "../../assets/logo_completo.png";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { userRegister } = useContext(AdminContext);

  const onSubmit: SubmitHandler<TFormRegisterValues> = (data) => {
    const updatedData = {
      username: "Usuario",
      email: data.email,
      password: data.password,
      name: `${data.firstName} ${data.lastName}`,
      contact: data.contact,
      cpf: data.cpf,
      nationality: data.nationality,
      emergency_contact: "Pendente",
      type_user: "US",
    };
    userRegister(updatedData, setIsLoading);

    reset();
  };

  // const handleCPFChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const formattedCPF = formatCPF(e.target.value);
  //   // Atualiza o valor do campo com o CPF formatado
  //   e.target.value = formattedCPF;
  // };

  // const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const formattedPhoneNumber = formatPhoneNumber(e.target.value);
  //   // Atualiza o valor do campo com o número de telefone formatado
  //   e.target.value = formattedPhoneNumber;
  // };

  const nationalities = Object.values(countries).map(
    (nationality) => nationality.name
  );

  return (
    <StyledRegisterPage>
      <img src={logo} alt="Logo Hotel" onClick={()=>navigate("/")}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledTypography type="title" weight={700}>
          Cadastro
        </StyledTypography>
        <Input
          inputId="firstName"
          label="Primeiro Nome"
          placeholder="Digite o seu primeiro nome"
          helper={errors.firstName?.message}
          {...register("firstName")}
        />
        <Input
          inputId="lastName"
          label="Sobrenome"
          placeholder="Digite o seu sobrenome"
          helper={errors.lastName?.message}
          {...register("lastName")}
        />
        <Input
          inputId="email"
          label="E-mail"
          placeholder="Digite o seu email"
          helper={errors.email?.message}
          {...register("email")}
        />
        <Input
          inputId="cpf"
          label="CPF"
          placeholder="xxx.xxx.xxx-xx"
          helper={errors.cpf?.message}
          {...register("cpf")}
          // onChange={handleCPFChange}
        />
        <Select
          selectId="nationality"
          label="Nacionalidade"
          helper={errors.nationality?.message}
          items={nationalities}
          placeholder="Selecione a nacionalidade"
          {...register("nationality")}
        />
        <Input
          inputId="contact"
          label="Celular de contato"
          placeholder="(xx) xxxxx-xxxx"
          helper={errors.contact?.message}
          {...register("contact")}
          // onChange={handlePhoneChange}
        />
        <Input
          inputId="password"
          label="Senha"
          placeholder="Digite sua senha"
          helper={errors.password?.message}
          {...register("password")}
        />
        <Input
          inputId="confirm"
          label="Confirme sua senha"
          placeholder="Confirme sua senha"
          helper={errors.confirm?.message}
          {...register("confirm")}
        />
        <StyledButton
          type="submit"
          width={412}
          height={57}
          radius={10}
          disabled={isLoading}
        >
          {isLoading ? "Cadastrando..." : "Cadastrar"}
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
            onClick={() => navigate("/login")}
          >
            Login
          </StyledButton>
        </div>
      </form>
    </StyledRegisterPage>
  );
};
