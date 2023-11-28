import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 7.375rem;
  width: 100%;
  background-color: var(--color-dirty-white);
  border-bottom: var(--border);
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 12.1875rem;
  font-family: var(--font-details);

  >img {
    width: 7rem;
  }

  .menu_container {
    display: flex;
    align-items: center;
    gap: 2.8125rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      cursor: pointer;

      p {
        font-size: 20px;
      }
    }
  }

  .burguer_menu {
    height: 26px;
    width: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      display: block;
      height: 4px;
      width: 100%;
      border-radius: 10px;
      background: #0e2431;
    }

    .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    }

    .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    }

    &:hover .line1 {
      transform: rotate(45deg);
    }

    &:hover .line2 {
      transform: scale(0);
    }

    &:hover .line3 {
      transform: rotate(-45deg);
    }
  }
`;
