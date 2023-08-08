import styled from "styled-components";

export const GlobalStyles = styled.section`
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.texts.body};
  font-family: ${({ theme }) => theme.fontFamily.ibmPlexSans};
  font-size: ${({ theme }) => theme.fontSize.desktop.body};

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  strong,
  label {
    font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.desktop.h1};
    color: ${({ theme }) => theme.colors.texts.primaryHeading};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.desktop.h2};
    color: ${({ theme }) => theme.colors.texts.subHeaders};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.desktop.h3};
    color: ${({ theme }) => theme.colors.texts.primaryHeading};
  }

  a {
    color: ${({ theme }) => theme.colors.texts.highlight};
  }

  p,
  ul,
  li,
  a {
    line-height: 150%;
  }

  @media (width < 881px) {
    html,
    body {
      font-size: ${({ theme }) => theme.fontSize.desktop.body};
    }

    h1 {
      font-size: ${({ theme }) => theme.fontSize.desktop.h1};
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.desktop.h2};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSize.desktop.h3};
    }
  }
`;
