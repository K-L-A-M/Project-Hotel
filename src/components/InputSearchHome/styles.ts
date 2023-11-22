import styled from "styled-components";

export const StyledInputSearchHome = styled.div`
    width: 100%;
    padding: 1rem 3.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    form {
        display: flex;
        align-items: center;
        background-color: var(--color-gray);
        height: 4.875rem;
        padding: 0 1.375rem 0 .875rem;
        /* padding: .875rem .8125rem .75rem 1.375rem; */
        border-radius: .625rem;

        >.half_divider {
            width: 1px;
            height: 3.25rem;
            background-color: var(--color-divider);
            margin: 0 1.25rem;
        }

        >.divider {
            width: 1px;
            height: 100%;
            background-color: var(--color-divider);
            margin: 0 .6875rem;
        }

        >.date_in{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: .375rem;
            

            >p {
                font-size: 16px;
                font-weight: 400;
                text-transform: capitalize;
            }
            
            >div>div>input {
                background: transparent;
                border: none;
                width: fit-content;
                font-size: 1.25rem;
                font-weight: 700;
                width: 100px;
                text-align: center;
                outline: none; 
    
                &::placeholder {
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--color-black-opacity);
                }
            }
        }
        

        >.date_out {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: .375rem;

            >p {
                    font-size: 16px;
                    font-weight: 400;
                    text-transform: capitalize;
                }

            >div>div>input {
                background: transparent;
                border: none;
                width: fit-content;
                font-size: 1.25rem;
                font-weight: 700;
                width: 100px;
                text-align: center;
                outline: none;

                &::placeholder {
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--color-black-opacity);
                }
            }
        }
    }
`