import styled from "styled-components";

export const HeaderNavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  padding-inline: ${({ theme }) => theme.spaces.l};
  color: ${({ theme }) => theme.colors.texts.label};
  font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 60px;

  & .desktop-menu-container {
    display: none;
    align-items: center;
    max-width: 1536px;
    width: 100%;
    height: 100%;
    margin-inline: auto;

    & .portfolio-nav-menu-links {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spaces.xl};
      margin-left: auto;
      position: relative;
      z-index: 2;

      & a {
        font-weight: 600;
        text-decoration: none;
        opacity: 80%;
        color: ${({ theme }) => theme.colors.texts.label};
      }
    }

    & .social-media-menu-links {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spaces.xl};
      margin-inline: calc(${({ theme }) => theme.spaces.xxl2} + 2px);
    }

    & .active-link {
      & a {
        opacity: 100%;
        color: ${({ theme }) => theme.colors.texts.highlight};
      }
    }
  }

  & .mobile-menu-container {
    margin-left: auto;

    & .mobile-hamburger-button {
      background-color: transparent;
      border: 0;
      outline: 0;

      & svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 1100px) {
    & .desktop-menu-container {
      display: flex;
      font-size: ${({ theme }) => theme.fontSize.desktop.label};
    }

    & .mobile-menu-container {
      display: none;
    }
  }
`;

export const MobileMenuContainer = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  width: 320px;
  height: 100%;
  padding: ${({ theme }) =>
    `${theme.spaces.s} ${theme.spaces.l} 0 ${theme.spaces.xxl2}`};
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.texts.body};
  font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
  font-size: ${({ theme }) => theme.fontSize.mobile.body};

  & .close-hamburger-menu {
    display: block;
    margin-left: auto;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    & svg {
      width: 40px;
      height: 40px;
    }
  }

  & .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: ${({ theme }) => theme.spaces.xxl2};

    & .menu-item {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spaces.m};

      & a {
        display: block;
        text-decoration: none;
        color: inherit;
        padding-block: 10px;
        cursor: pointer;
      }
    }
  }
`;
