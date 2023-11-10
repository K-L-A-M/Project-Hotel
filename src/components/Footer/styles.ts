import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-darkBlue);
  width: 100%;
  padding: 4.6875rem 2rem 6.875rem 11rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  color: var(--color-white);
  font-family: var(--font-details);

  .left_container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.3125rem;

    > .logo {
      text-transform: uppercase;
      font-size: 2.25rem;
    }

    > div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 2.375rem;

      > p {
        font-size: 2rem;
      }
    }
  }

  .right_container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .icons {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2.1875rem;
    }

    > form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4375rem;
      margin-bottom: 10rem;

      > .text_container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > p {
          font-size: 1.5rem;
          font-weight: 700;
        }
      }

      > .input_container {
        display: flex;
        align-items: center;
        gap: 1rem;

        > input {
          border: none;
          border-bottom: 0.0625rem solid var(--color-blue);
          background-color: transparent;
          width: 342px;
          padding: 0.5rem 1rem;
          color: white;
          outline: none;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-white);

          &::placeholder {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-white-opacity);
          }
        }
      }
    }
    > .sign_container {
      display: flex;
      align-items: center;
      color: var(--color-white-opacity);

      > p {
        margin-right: 0.5rem;
      }

      > a {
        margin-left: 0.2rem;
        text-decoration: none;
        color: var(--color-white-opacity);
      }
    }
  }
`;
