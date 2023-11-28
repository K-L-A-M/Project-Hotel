import styled from "styled-components";
import { Ibutton } from "../interfaces/Ibutton";

export const StyledButton = styled.button<Ibutton>`
    width: ${({width}) => `${width}px` || 'auto'};
    height: ${({height}) => `${height}px` || 'auto'};
    border-radius: ${({radius}) => `${radius}px` || '50%'};
    background-color: ${({color}) => color || 'var(--color-blue)'};
    color: var(--color-white);
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    border-color: transparent;
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: ${({colorhover}) => colorhover || "var(--color-ligth-blue)"};
        border-color: var(--color-white);
    }
`;