import { StyledHeader } from "./styles";
import { FaRegHeart } from 'react-icons/fa';
import { PiUserCircleFill } from 'react-icons/pi';

export const Header = () => {
    return (
        <StyledHeader>
            <p className="logo">logo</p>
            <nav className="menu_container">
                <div>
                   <FaRegHeart size={22} />
                   <p>Favoritos</p>
                </div>
                <div>
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