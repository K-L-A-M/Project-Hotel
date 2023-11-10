import styled from "styled-components";
import { Ibutton } from "../interfaces/Ibutton";

export const StyledButton = styled.button<Ibutton>`
    width: ${(props) => `${props.width}px` || 'auto'};
    height: ${(props) => `${props.height}px` || 'auto'};
    border-radius: ${(props) => `${props.radius}px` || '50%'};
    background-color: var(--color-blue);
    color: var(--color-white);
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    border-color: transparent;
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: var(--color-ligth-blue);
        border-color: var(--color-white);
    }
`