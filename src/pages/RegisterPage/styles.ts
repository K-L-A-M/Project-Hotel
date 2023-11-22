import styled from "styled-components";

export const StyledRegisterPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: calc(100vh - 32.3125rem);
    padding-top: 2rem;
    padding-bottom: 8rem;

    >p {
        margin-bottom: 2.5rem;
        cursor: pointer;
    }

    >form {
        border: var(--border);
        border-radius: .625rem;
        padding: 5rem 5.375rem 5.5625rem 5.4375rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.375rem;

        >p:first-child {
            margin-bottom: 2.625rem;
        }

        >button:first-of-type {
            margin-top: .5625rem;
            margin-bottom: .1875rem;
        }

        >.container_login {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .25rem;
        }
        
    }
`