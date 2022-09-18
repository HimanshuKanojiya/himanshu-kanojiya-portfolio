import styled from "styled-components";

export const NavBarContainer = styled.nav`
  height: 50px;
  width: 100%;
  padding-inline: ${({ theme }) => theme.spaces.s};
  background-color: ${({ theme }) => theme.colors.background.bg2};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;

  .outerLogo {
    color: ${({ theme }) => theme.colors.texts.neutral};
    font-size: 18px;
    display: inline;

    .innerLogo {
      display: inline;
      font-size: 18px;
      font-family: "Chakra Petch", sans-serif;
      color: ${({ theme }) => theme.colors.texts.highlight};
    }
  }

  .desktopMenu {
    margin-left: auto;

    ul {
      display: flex;
      align-items: center;

      li {
        list-style-type: none;
        margin-right: ${({ theme }) => theme.spaces.m};
        font-size: ${({ theme }) => theme.fontSize.desktop.label};

        a {
          color: ${({ theme }) => theme.colors.texts.neutral};
          opacity: 80%;
          font-family: "Chakra Petch", sans-serif;
          font-size: inherit;
        }

        .activeLink {
          opacity: 100%;
          border-bottom-style: solid;
          border-bottom-width: 4px;
          border-bottom-color: ${({ theme }) => theme.colors.texts.highlight};
          padding-bottom: 14px;
        }

        button {
          background-color: transparent;
          width: 136px;
          height: 48px;
          border-radius: 2px;
          border-style: solid;
          border-width: 2px;
          border-color: ${({ theme }) => theme.colors.texts.highlight};
          color: ${({ theme }) => theme.colors.texts.highlight};
          font-family: "Chakra Petch", sans-serif;
          font-size: inherit;
          margin-left: ${({ theme }) => theme.spaces.l};
          cursor: pointer;

          &:hover {
            background-color: ${({ theme }) => theme.colors.texts.highlight};
            color: ${({ theme }) => theme.colors.background.bg1};
          }
        }
      }

      li:last-of-type {
        margin-right: 0;
      }
    }
  }

  .hamburgerMenuIcon {
    margin-left: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
  }

  @media screen and (min-width: 686px) {
    padding-inline: ${({ theme }) => theme.spaces.l};
  }

  @media screen and (min-width: 1336px) {
    height: 60px;
    padding-inline: ${({ theme }) => theme.spaces.m};

    .outerLogo {
      font-size: 20px;

      .innerLogo {
        font-size: inherit;
      }
    }
  }
`;
