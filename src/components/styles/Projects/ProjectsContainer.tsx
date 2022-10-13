import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};

  .projects-top-section {
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spaces.l};

    .projects-heading {
      font-size: ${({ theme }) => theme.fontSize.mobile.h2};
      color: ${({ theme }) => theme.colors.texts.headers};
      margin-bottom: ${({ theme }) => theme.spaces.xs};
    }

    .projects-description {
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      color: ${({ theme }) => theme.colors.texts.body};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMinWidth}) {
    margin-top: ${({ theme }) => theme.spaces.xxl5};

    .projects-top-section {
      display: flex;
      flex-direction: column;
      margin-bottom: ${({ theme }) => theme.spaces.l};

      .projects-heading {
        font-size: ${({ theme }) => theme.fontSize.desktop.h2};
        margin-bottom: ${({ theme }) => theme.spaces.xs};
      }

      .projects-description {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktopMinWidth}) {
    .projects-top-section {
      flex-direction: row;

      .projects-description {
        max-width: 829px;
        margin-left: auto;
      }
    }
  }
`;
