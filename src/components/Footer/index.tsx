import { StyledButton } from "../../styles/StyledButton";
import { StyledFooter } from "./styles";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="left_container">
        <p className="logo">logo</p>
        <div>
          <p>Quem Somos</p>
          <p>Informações Legais</p>
          <p>Central de ajuda</p>
          <p>Condições de uso</p>
        </div>
      </div>
      <div className="right_container">
        <div className="icons">
          <a href="#" target="_blank">
            <FaFacebook size={40} color={"var(--color-white)"} />
          </a>
          <a href="#" target="_blank">
            <FaInstagram size={40} color={"var(--color-white)"} />
          </a>
          <a href="#" target="_blank">
            <FaYoutube size={40} color={"var(--color-white)"} />
          </a>
          <a href="#" target="_blank">
            <FaLinkedin size={40} color={"var(--color-white)"} />
          </a>
        </div>
        <form action="">
          <div className="text_container">
            <p>Quer ideias exclusivas para a sua próxima estadia?</p>
            <p>Inscreva-se em nossa newsletter.</p>
          </div>
          <div className="input_container">
            <input type="text" placeholder="Endereço de E-mail" />
            <StyledButton width={231} height={54} radius={9}>Inscreva-se</StyledButton>
          </div>
        </form>
        <div className="sign_container">
          <p>Pagina elaborada por </p>
          <a href="#" target="_blank">
            K.
          </a>
          <a href="#" target="_blank">
            L.
          </a>
          <a href="#" target="_blank">
            A.
          </a>
          <a href="#" target="_blank">
            M.
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};
