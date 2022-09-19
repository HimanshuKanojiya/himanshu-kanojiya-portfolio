import styled from "styled-components";

export const ExperienceContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};
  padding-inline: ${({ theme }) => theme.spaces.s};

  .experienceTitle {
    font-size: ${({ theme }) => theme.fontSize.mobile.h2};
    color: ${({ theme }) => theme.colors.texts.headers};
  }

  .experienceItems {
    margin-top: ${({ theme }) => theme.spaces.l};

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

    .experienceItem:last-of-type {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 686px) {
    margin-top: ${({ theme }) => theme.spaces.xxl5};
    padding-inline: ${({ theme }) => theme.spaces.l};

    .experienceTitle {
      font-size: ${({ theme }) => theme.fontSize.desktop.h2};
    }
  }
`;
