import styled from "styled-components";

export const StyledInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    >label {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--color-dark-gray);
        margin-bottom: .875rem;
    }

    >div {
        width: 100%;
        position: relative;
        margin-bottom: .5rem;

        >input {
            width: 100%;
            height: 3.6875rem;
            padding: 0 0.7rem;
            border-radius: 10px;
            border: 1px solid var(--color-black);
            background-color: transparent;
            outline: none;
            font-size: 1.25rem;
        }

        >svg {
            position: absolute;
            right: .5rem;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    >p {
            color: red;
            font-size: 1rem;
        }
`