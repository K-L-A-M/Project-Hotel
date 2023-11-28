import styled from "styled-components";

export const StyledSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > label {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-dark-gray);
    margin-bottom: 0.875rem;
  }

  > select {
    width: 100%;
    height: 3rem;
    padding: 0 0.7rem;
    border-radius: 10px;
    border: 1px solid var(--color-black);
    background-color: transparent;
    outline: none;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    max-width: 25.75rem;
  }

  > p {
    text-transform: lowercase;
  }
`;
