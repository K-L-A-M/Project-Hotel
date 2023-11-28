import styled from "styled-components";

export const StyledInputSearchHome = styled.div`
  width: 100%;
  padding: 2.25rem 0 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 57px;
    > div {
      display: flex;
      align-items: center;
      background-color: var(--color-gray);
      height: 4.875rem;
      padding: 0 1.375rem 0 0.875rem;
      border-radius: 0.625rem;
      border: var(--border);

      .half_divider {
        width: 1px;
        height: 3.25rem;
        background-color: var(--color-divider);
        margin: 0 1.25rem;
      }

      .divider {
        width: 1px;
        height: 100%;
        background-color: var(--color-divider);
        margin: 0 0.6875rem;
      }

      > .date_in {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.375rem;

        > div > div > input {
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

      > .date_out {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.375rem;

        > div > div > input {
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

      > .capacity_container {
        position: relative;
        min-width: 24rem;
        width: fit-content;
        height: 100%;
        display: flex;
        align-items: center;

        > .capacity_display {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem 0;

          > div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-transform: capitalize;

            > .ball_divider {
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background-color: black;
            }
          }
        }
      }
    }
  }
`;
