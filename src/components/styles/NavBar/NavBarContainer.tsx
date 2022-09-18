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

  .hamburgerMenuIcon {
    margin-left: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
  }
`;
