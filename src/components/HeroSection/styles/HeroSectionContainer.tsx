import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 90vh;

  & .info {
    max-width: 871px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: -8.5%;
    z-index: 1;

    & small {
      font-size: ${({ theme }) => theme.fontSize.desktop.label};
      color: ${({ theme }) => theme.colors.texts.label};
      margin: ${({ theme }) => `${theme.spaces.s} 0 ${theme.spaces.xxs}`};
      font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
      font-weight: 600;
    }

    & .heading {
      font-size: ${({ theme }) => theme.fontSize.desktop.h1};
      color: ${({ theme }) => theme.colors.texts.primaryHeading};
      text-align: center;
      line-height: 1.2;

      & span {
        color: ${({ theme }) => theme.colors.texts.highlight};
      }
    }

    & .description {
      font-size: ${({ theme }) => theme.fontSize.desktop.body};
      color: ${({ theme }) => theme.colors.texts.body};
      text-align: center;
      margin: ${({ theme }) => `${theme.spaces.xxs} 0 0`};
      max-width: 756px;
      line-height: 1.2;
    }
  }
`;

export const MouseIconContainer = styled.div`
  margin-top: auto;
  text-align: center;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
  cursor: pointer;

  & .mouse-line {
    display: block;
    transition: transform 250ms ease-in;
  }

  &:hover .mouse-line {
    transform: translateY(2.5px);
  }

  & p {
    margin-top: ${({ theme }) => theme.spaces.xxs};
  }
`;
