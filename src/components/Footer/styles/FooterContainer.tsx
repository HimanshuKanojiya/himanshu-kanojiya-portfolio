import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.l};
  margin-block: 100px 50px;

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
    font-size: ${({ theme }) => theme.fontSize.mobile.label};
    color: ${({ theme }) => theme.colors.texts.body};
    font-weight: 500;
    gap: ${({ theme }) => theme.spaces.xxs};
    white-space: nowrap;
    flex-wrap: wrap;

    & li {
      display: flex;
      align-items: center;

      & img {
        margin-right: ${({ theme }) => theme.spaces.xxs};
        width: 24px;
        height: 24px;
      }

      & .square-dot {
        width: 8px;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.texts.label};
        display: none;
      }

      & p span {
        color: ${({ theme }) => theme.colors.texts.highlight};
      }
    }
  }

  @media (min-width: 700px) {
    & ul {
      flex-direction: row;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize.desktop.label};
      gap: ${({ theme }) => theme.spaces.m};

      & li {
        & .square-dot {
          display: block;
        }
      }
    }
  }
`;
