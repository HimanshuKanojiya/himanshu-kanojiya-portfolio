import styled from "styled-components";

export const SideBarMenuContainer = styled.div`
  width: 80%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.bg3};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  .hamburger-nav {
    height: 50px;
    width: 100%;
    padding-inline: ${({ theme }) => theme.spaces.s};
    display: flex;
    align-items: center;

    .hamburger-menu-icon {
      margin-left: auto;
      display: flex;
      align-items: center;
      cursor: pointer;
      background-color: transparent;
    }
  }

  .sidebar-menu {
    margin: ${({ theme }) => `${theme.spaces.xl} 0 0 ${theme.spaces.l}`};

    .sidebar-menu-item {
      margin-bottom: ${({ theme }) => theme.spaces.m};
      list-style-type: none;

      a {
        color: ${({ theme }) => theme.colors.texts.neutral};
        font-family: "Chakra Petch", sans-serif;
        font-size: ${({ theme }) => theme.fontSize.mobile.label};
        font-weight: 600;
        opacity: 80%;
        line-height: ${({ theme }) => theme.lineHeight};
      }

      .active-link {
        opacity: 100%;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: ${({ theme }) => theme.colors.texts.highlight};
        padding-bottom: 4px;
      }
    }

    .sidebar-menu-item:last-of-type {
      margin: 0;
    }
  }

  @media screen and (min-width: 686px) {
    .hamburger-nav {
      padding-inline: ${({ theme }) => theme.spaces.l};
    }
  }
`;
