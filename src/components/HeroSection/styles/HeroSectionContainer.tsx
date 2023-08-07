import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 90vh;

  & .info {
    max-width: 780px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: -8.5%;
    z-index: 1;
    padding-inline: ${({ theme }) => theme.spaces.l};

    & img {
      width: 285px;
      height: 319px;
    }

    & small {
      font-size: ${({ theme }) => theme.fontSize.mobile.label};
      color: ${({ theme }) => theme.colors.texts.label};
      margin: ${({ theme }) => `${theme.spaces.xl} 0 ${theme.spaces.xs}`};
      font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
      font-weight: 600;
    }

    & .heading {
      font-size: ${({ theme }) => theme.fontSize.mobile.h1};
      color: ${({ theme }) => theme.colors.texts.primaryHeading};
      text-align: center;
      line-height: 1.2;

      & span {
        color: ${({ theme }) => theme.colors.texts.highlight};
      }
    }

    & .description {
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      color: ${({ theme }) => theme.colors.texts.body};
      text-align: center;
      margin: ${({ theme }) => `${theme.spaces.m} 0 0`};
      max-width: 756px;
      line-height: 1.2;
    }
  }

  & .hero-section-mouse-icon {
    display: none;
  }

  & .hero-section-mobile-cta {
    display: block;
    margin-top: auto;
  }

  @media (min-width: 992px) {
    & .info {
      max-width: 871px;
      padding-inline: 0;

      & img {
        width: 285px;
        height: 319px;
      }

      & small {
        font-size: ${({ theme }) => theme.fontSize.desktop.label};
        margin: ${({ theme }) => `${theme.spaces.s} 0 ${theme.spaces.xxs}`};
      }

      & .heading {
        font-size: ${({ theme }) => theme.fontSize.desktop.h1};
      }

      & .description {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
        margin: ${({ theme }) => `${theme.spaces.xxs} 0 0`};
      }
    }

    & .hero-section-mouse-icon {
      display: block;
    }

    & .hero-section-mobile-cta {
      display: none;
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
