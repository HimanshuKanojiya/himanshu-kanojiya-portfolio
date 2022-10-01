import styled from "styled-components";

export const ExperienceContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};
  padding-inline: ${({ theme }) => theme.spaces.s};

  .experienceTitle {
    font-size: ${({ theme }) => theme.fontSize.mobile.h2};
    color: ${({ theme }) => theme.colors.texts.headers};
    margin-bottom: ${({ theme }) => theme.spaces.l};
  }

  .experienceItems {
    & > div {
      margin-bottom: ${({ theme }) => theme.spaces.m};
    }
    & > div:last-of-type {
      margin: 0;
    }
  }

  @media screen and (min-width: 686px) {
    margin-top: ${({ theme }) => theme.spaces.xxl5};
    padding-inline: ${({ theme }) => theme.spaces.l};
    max-width: 768px;

    .experienceTitle {
      font-size: ${({ theme }) => theme.fontSize.desktop.h2};
      margin-bottom: ${({ theme }) => theme.spaces.xl};
    }

    .experienceItems {
      & > div {
        margin-bottom: ${({ theme }) => theme.spaces.m};
      }
      & > div:last-of-type {
        margin: 0;
      }
    }
  }

  @media screen and (min-width: 1336px) {
    padding-inline: 196px;
    max-width: 100%;

    .experienceSection {
      display: flex;
      gap: ${({ theme }) => theme.spaces.xl};
    }
  }
`;
