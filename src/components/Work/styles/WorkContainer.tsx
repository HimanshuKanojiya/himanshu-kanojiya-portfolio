import styled from "styled-components";

export const WorkContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spaces.xxl4};

  & .navigation-menu {
    width: 40%;

    & .menu-item {
      display: flex;
      flex-direction: row;
      gap: ${({ theme }) => theme.spaces.xxl};
      margin-bottom: 16px;

      & .left-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.spaces.s};

        & .icon {
          width: 24px;
          height: 24px;
          background-color: ${({ theme }) => theme.colors.texts.body};
          border: 0;
        }

        & .active-icon {
          background-color: ${({ theme }) => theme.colors.texts.highlight};
        }

        & .active-icon + .line {
          border: solid 1px ${({ theme }) => theme.colors.texts.highlight};
        }

        & .line {
          height: 120px;
          width: 1px;
          border: solid 1px ${({ theme }) => theme.colors.texts.body};
          transition: border 450ms linear;
        }
      }

      & .right-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & h3 {
          color: ${({ theme }) => theme.colors.texts.subHeaders};
          font-size: ${({ theme }) => theme.fontSize.desktop.h3};
        }

        & small {
          color: ${({ theme }) => theme.colors.texts.label};
          font-size: ${({ theme }) => theme.fontSize.desktop.label};
          line-height: 1.2;
        }

        & button {
          font-size: ${({ theme }) => theme.fontSize.desktop.label};
          line-height: 1.2;
          color: ${({ theme }) => theme.colors.texts.body};
          margin-top: ${({ theme }) => theme.spaces.m};
          width: auto;
          border: 0;
          background: none;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }

  & .about-the-work {
    width: 70%;
    font-size: ${({ theme }) => theme.fontSize.desktop.body};
    color: ${({ theme }) => theme.colors.texts.body};
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border: solid 1px ${({ theme }) => theme.colors.texts.borderColor10per};
    padding: ${({ theme }) => theme.spaces.xl};
    line-height: 1.2;
    height: 538px;

    & ul {
      list-style: disc;
      margin-left: ${({ theme }) => theme.spaces.xl};
    }
  }
`;
