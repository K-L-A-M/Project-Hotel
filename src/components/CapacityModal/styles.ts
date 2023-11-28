import styled from "styled-components";

export const StyledCapacityModal = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 1rem;
  background: var(--color-gray);
  
  >div {
    display: flex;
    align-items: center;
    width: 15.625rem;
    justify-content: space-between;

    >div {
        display: flex;
        align-items: center;
        justify-content: center;
        border: var(--border);

        >div {
            height: 30px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        >div:first-of-type, >div:last-of-type {
            cursor: pointer;
            transition: background 0.5s ease-in-out;
            &:hover {
                background-color: var(--color-ligth-blue);
            }
        }
    }
  }
`;
