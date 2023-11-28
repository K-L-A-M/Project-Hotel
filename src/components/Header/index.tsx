import { StyledHeader } from "./styles";
import { FaRegHeart } from 'react-icons/fa';
import { PiUserCircleFill } from 'react-icons/pi';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_simples.png"

export const Header = () => {
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <img src={logo} alt="Logo Hotel" />
            <nav className="menu_container">
                <div>
                   <FaRegHeart size={22} />
                   <p>Favoritos</p>
                </div>
                <div onClick={()=>navigate("/login")}>
                    <PiUserCircleFill size={34} />
                    <p>Fazer Login</p>
                </div>
                <div>
                    <div className="burguer_menu">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    <p>Menu</p>
                </div>
            </nav>
        </StyledHeader>
    )
}