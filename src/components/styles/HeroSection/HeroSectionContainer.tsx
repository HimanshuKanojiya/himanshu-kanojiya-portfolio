import styled from "styled-components";

export const HeroSectionContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  min-width: ${({ theme }) => theme.breakpoint.mobileMinWidth};

  .social-icons {
    margin-bottom: ${({ theme }) => theme.spaces.s};

    a {
      margin-right: ${({ theme }) => theme.spaces.s};
    }

    a:last-of-type {
      margin-right: 0;
    }
  }

  .hero-content {
    .content-secondary {
      color: ${({ theme }) => theme.colors.texts.highlight};
      font-size: ${({ theme }) => theme.fontSize.mobile.secondaryInformation};
      margin-bottom: ${({ theme }) => theme.spaces.xs};
    }

    .content-heading {
      font-size: ${({ theme }) => theme.fontSize.mobile.h1};
      color: ${({ theme }) => theme.colors.texts.mainHeading};
      margin-bottom: ${({ theme }) => theme.spaces.l};
    }

    .content-description {
      color: ${({ theme }) => theme.colors.texts.body};
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      margin-bottom: ${({ theme }) => theme.spaces.xl};
      line-height: ${({ theme }) => theme.lineHeight};
    }

    .content-cta {
      display: flex;
      flex-direction: column;

      .content-primary-action {
        width: 179px;
        height: 60px;
        color: ${({ theme }) => theme.colors.texts.highlight};
        background: transparent;
        border-radius: 2px;
        border-style: solid;
        border-width: 2px;
        border-color: ${({ theme }) => theme.colors.texts.highlight};
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: ${({ theme }) => theme.spaces.m};

        &:hover {
          background-color: ${({ theme }) => theme.colors.texts.highlight};
          color: ${({ theme }) => theme.colors.background.bg1};
          cursor: pointer;
        }
      }

      .content-secondary-action {
        text-decoration: underline;
        line-height: ${({ theme }) => theme.lineHeight};
        text-underline-offset: 4px;
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.texts.body};
      }
    }
  }

  @media screen and (min-width: 686px) {
    width: 622px;

    .hero-content {
      .content-cta {
        flex-direction: row;
        align-items: center;

        .content-primary-action {
          margin: 0;
          margin-right: ${({ theme }) => theme.spaces.xxl};
        }
      }
    }
  }

  @media screen and (min-width: 1336px) {
    width: 662px;

    .hero-content {
      .content-secondary {
        font-size: ${({ theme }) =>
          theme.fontSize.desktop.secondaryInformation};
      }

      .content-heading {
        font-size: ${({ theme }) => theme.fontSize.desktop.h1};
      }

      .content-description {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
        margin-bottom: ${({ theme }) => theme.spaces.xxl5};
      }

      .content-cta {
        flex-direction: row;
        align-items: center;

        .content-primary-action {
          margin: 0;
          margin-right: ${({ theme }) => theme.spaces.xxl};
          width: 195px;
          height: 72px;
          font-size: 24px;
        }

        .content-secondary-action {
          font-size: 24px;
        }
      }
    }
  }
`;
