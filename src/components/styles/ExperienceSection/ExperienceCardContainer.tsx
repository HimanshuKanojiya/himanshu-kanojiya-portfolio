import styled from "styled-components";

export const ExperienceCardContainer = styled.div`
  .experienceItem {
    width: 100%;
    min-height: 170px;
    background-color: ${({ theme }) => theme.colors.background.bg3};
    padding: ${({ theme }) => theme.spaces.s};
    margin-bottom: ${({ theme }) => theme.spaces.m};
    border-radius: 2px;

    .jobTitle {
      color: ${({ theme }) => theme.colors.texts.headers};
      font-size: ${({ theme }) => theme.fontSize.mobile.h3};
      margin-top: ${({ theme }) => theme.spaces.xs};
    }

    .companyName {
      font-family: "Chakra Petch", sans-serif;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.texts.headers};
      opacity: 80%;

      & span {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        opacity: 70%;
      }
    }

    .responsibilities {
      margin-top: ${({ theme }) => theme.spaces.s};
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      color: ${({ theme }) => theme.colors.texts.body};

      p,
      ol,
      li {
        color: inherit;
        font-size: inherit;
        line-height: ${({ theme }) => theme.lineHeight};
      }

      ol {
        margin-top: ${({ theme }) => theme.spaces.xs};
        margin-left: ${({ theme }) => theme.spaces.m};
      }
    }

    .seeMoreAboutThisJob {
      display: flex;
      font-family: "Chakra Petch", sans-serif;
      font-size: ${({ theme }) => theme.fontSize.mobile.label};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.texts.highlight};
      margin-top: ${({ theme }) => theme.spaces.xs};
      cursor: pointer;
      margin-left: auto;

      & p {
        display: flex;
        align-items: center;
        font-size: inherit;
        font-family: inherit;
        color: inherit;
      }
    }
  }

  @media screen and (min-width: 686px) {
    .experienceItem {
      & > img {
        width: 72px;
        height: 72px;
      }

      .jobTitle {
        font-size: ${({ theme }) => theme.fontSize.desktop.h3};
      }

      .companyName {
        font-size: 18px;

        & span {
          font-size: 18px;
        }
      }

      .responsibilities {
        margin-top: ${({ theme }) => theme.spaces.s};
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
      }

      .seeMoreAboutThisJob {
        font-size: ${({ theme }) => theme.fontSize.desktop.label};
        margin-top: ${({ theme }) => theme.spaces.s};
      }
    }
  }

  @media screen and (min-width: 1336px) {
    .experienceItem {
      background-color: transparent;
      padding: 0;
    }
  }
`;
