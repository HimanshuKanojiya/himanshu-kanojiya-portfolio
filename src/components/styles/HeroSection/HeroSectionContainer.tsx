import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  margin-inline: ${({ theme }) => theme.spaces.s};
  min-width: ${({ theme }) => theme.breakpoint.mobileMinWidth};

  .socialIcons {
    margin-bottom: ${({ theme }) => theme.spaces.s};

    a {
      margin-right: ${({ theme }) => theme.spaces.s};
    }

    a:last-of-type {
      margin-right: 0;
    }
  }

  .heroContent {
    .contentSecondary {
      color: ${({ theme }) => theme.colors.texts.highlight};
      font-size: ${({ theme }) => theme.fontSize.mobile.secondaryInformation};
      margin-bottom: ${({ theme }) => theme.spaces.xs};
    }

    .contentHeading {
      font-size: ${({ theme }) => theme.fontSize.mobile.h1};
      color: ${({ theme }) => theme.colors.texts.mainHeading};
      margin-bottom: ${({ theme }) => theme.spaces.l};
    }

    .contentDescription {
      color: ${({ theme }) => theme.colors.texts.body};
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      margin-bottom: ${({ theme }) => theme.spaces.xl};
      line-height: ${({ theme }) => theme.lineHeight};
    }

    .contentCTA {
      display: flex;
      flex-direction: column;

      .contentPrimaryAction {
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

      .contentSecondaryAction {
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
    margin-inline: ${({ theme }) => theme.spaces.l};
    width: 622px;

    .heroContent {
      .contentCTA {
        flex-direction: row;
        align-items: center;

        .contentPrimaryAction {
          margin: 0;
          margin-right: ${({ theme }) => theme.spaces.xxl};
        }
      }
    }
  }

  @media screen and (min-width: 1336px) {
    margin-inline: 196px;
    width: 662px;

    .heroContent {
      .contentSecondary {
        font-size: ${({ theme }) =>
          theme.fontSize.desktop.secondaryInformation};
      }

      .contentHeading {
        font-size: ${({ theme }) => theme.fontSize.desktop.h1};
      }

      .contentDescription {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
        margin-bottom: ${({ theme }) => theme.spaces.xxl5};
      }

      .contentCTA {
        flex-direction: row;
        align-items: center;

        .contentPrimaryAction {
          margin: 0;
          margin-right: ${({ theme }) => theme.spaces.xxl};
          width: 195px;
          height: 72px;
          font-size: 24px;
        }

        .contentSecondaryAction {
          font-size: 24px;
        }
      }
    }
  }
`;