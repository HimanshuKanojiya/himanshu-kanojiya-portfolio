import styled from "styled-components";

export const ExperienceContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};

  .experience-title {
    font-size: ${({ theme }) => theme.fontSize.mobile.h2};
    color: ${({ theme }) => theme.colors.texts.headers};
    margin-bottom: ${({ theme }) => theme.spaces.l};
  }

  .experience-items {
    & > div {
      margin-bottom: ${({ theme }) => theme.spaces.m};
    }
    & > div:last-of-type {
      margin: 0;
    }
  }

  @media screen and (min-width: 686px) {
    margin-top: ${({ theme }) => theme.spaces.xxl5};
    max-width: 768px;

    .experience-title {
      font-size: ${({ theme }) => theme.fontSize.desktop.h2};
      margin-bottom: ${({ theme }) => theme.spaces.xl};
    }

    .experience-items {
      & > div {
        margin-bottom: ${({ theme }) => theme.spaces.m};
      }
      & > div:last-of-type {
        margin: 0;
      }
    }
  }

  @media screen and (min-width: 1336px) {
    max-width: ${({ theme }) => theme.breakpoint.desktopMinWidth};

    .experience-section {
      display: flex;
      gap: ${({ theme }) => theme.spaces.xl};
    }
  }
`;
