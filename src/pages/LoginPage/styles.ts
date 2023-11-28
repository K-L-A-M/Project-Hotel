import styled from "styled-components";

export const StyledLoginPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: calc(100vh - 32.3125rem);
    padding-top: 2rem;
    padding-bottom: 8rem;
    
    >img {
        margin-bottom: 2rem;
        width: 10rem;
        cursor: pointer;
    }

    >form {
        border: var(--border);
        border-radius: .625rem;
        padding: 2rem 3.5rem 2.5rem 3.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.375rem;

        >p:first-child {
            margin-bottom: 1rem;
        }

        >button:first-of-type {
            margin-top: .5625rem;
            margin-bottom: .1875rem;
        }

        >.container_register {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .25rem;
        }
        
    }
`