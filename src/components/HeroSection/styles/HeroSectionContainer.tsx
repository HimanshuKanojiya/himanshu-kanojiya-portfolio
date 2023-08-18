import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 850px;

  & .info {
    max-width: 780px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: -6.5%;
    z-index: 1;
    padding-inline: ${({ theme }) => theme.spaces.l};

    & img {
      width: 285px;
      height: 319px;
    }

    & small {
      font-size: ${({ theme }) => theme.fontSize.mobile.label};
      color: ${({ theme }) => theme.colors.texts.label};
      margin: ${({ theme }) => `${theme.spaces.m} 0 0`};
      font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
      font-weight: 600;
      letter-spacing: 0.5px;
      text-align: center;
    }

    & .heading {
      font-size: ${({ theme }) => theme.fontSize.mobile.h1};
      color: ${({ theme }) => theme.colors.texts.primaryHeading};
      text-align: center;

      & span {
        color: ${({ theme }) => theme.colors.texts.highlight};
      }
    }

    & .description {
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      color: ${({ theme }) => theme.colors.texts.body};
      text-align: center;
      margin: ${({ theme }) => `${theme.spaces.m} 0 0`};
      max-width: 870px;
    }
  }

  & .hero-section-mouse-icon {
    display: none;
  }

  & .hero-section-mobile-cta {
    display: block;
    margin-top: auto;
  }

  @media (min-width: 991px) {
    height: 90vh;

    & .info {
      max-width: 950px;
      padding-inline: 0;
      top: -7.5%;

      & img {
        width: 260px;
        height: auto;
      }

      & small {
        font-size: ${({ theme }) => theme.fontSize.desktop.label};
        margin: ${({ theme }) => `${theme.spaces.s} 0 0`};
      }

      & .heading {
        font-size: ${({ theme }) => theme.fontSize.desktop.h1};
      }

      & .description {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
        margin: ${({ theme }) => `${theme.spaces.s} 0 0`};
      }
    }

    & .hero-section-mouse-icon {
      display: flex;
      margin-top: auto;
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

  .mouse {
    width: 30px;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.colors.texts.borderColor20per};
    border-radius: 60px;
    position: relative;

    &::before {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.colors.texts.highlight};
      border-radius: 50%;
      opacity: 1;
      animation: wheelDown 2s infinite;
    }
  }

  @keyframes wheelDown {
    to {
      opacity: 0;
      top: 30px;
    }
  }
`;
