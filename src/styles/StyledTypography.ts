import styled, { css } from "styled-components";
import { Itypography } from "../interfaces/Itypography";

export const StyledTypography = styled.p<Itypography>`
    color: ${({ color }) => color || 'var(--color-black)'};

    ${({ type }) => {
        if (type === "title") {
            return css`
                font-family: var(--font-details);
                font-size: 2rem;
                text-transform: uppercase;
            `;
        } else if (type === "menu") {
            return css`
                font-family: var(--font-details);
                font-size: 1.25rem;
            `;
        } else if (type === "destaque") {
            return css`
                font-size: 1.5rem;
                font-weight: 700;
            `;
        } else if (type === "rodape") {
            return css`
                font-family: var(--font-details);
                font-size: 2rem;
            `;
        } else if (type === "detail") {
            return css`
                font-size: 0.625rem;
                text-transform: capitalize;
            `;
        } else {
            return css`
                font-size: 1.25rem;
                font-weight: 700;
            `;
        }
    }}

    ${({ weight }) => {
        return css`
            font-weight: ${weight};
        `;
    }}
`;