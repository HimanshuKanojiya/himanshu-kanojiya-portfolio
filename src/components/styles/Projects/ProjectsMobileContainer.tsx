import styled from "styled-components";

export const ProjectsMobileContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.l};

  .projects-list {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spaces.m};

    .project {
      position: relative;
      z-index: -1;

      .project-image {
        width: 100%;
        margin-bottom: ${({ theme }) => theme.spaces.m};
      }

      .project-logo {
        width: 40px;
        height: 40px;
        margin-bottom: ${({ theme }) => theme.spaces.xs};
      }

      .project-title {
        font-size: ${({ theme }) => theme.fontSize.mobile.h3};
        margin-bottom: ${({ theme }) => theme.spaces.xs};
      }

      .project-description {
        font-size: ${({ theme }) => theme.fontSize.mobile.body};
        margin-bottom: ${({ theme }) => theme.spaces.s};
      }

      .project-hide-full-content {
        display: -webkit-box;
        line-clamp: 3;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .project-technology {
        font-size: ${({ theme }) => theme.fontSize.mobile.secondaryInformation};
        color: ${({ theme }) => theme.colors.texts.body};
      }

      .project-used-technologies {
        display: flex;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spaces.s};
        margin-top: ${({ theme }) => theme.spaces.xs};
        margin-bottom: ${({ theme }) => theme.spaces.s};

        & li {
          display: flex;
          align-items: center;

          & img {
            margin-right: ${({ theme }) => theme.spaces.xs};
            width: 40px;
            height: 40px;
          }

          & p {
            font-family: "Chakra Petch";
            font-size: ${({ theme }) => theme.fontSize.mobile.label};
            color: ${({ theme }) => theme.colors.texts.label};
          }
        }
      }

      .project-links {
        display: flex;
        align-items: center;
        font-family: "IBM Plex Sans";
        font-size: ${({ theme }) => theme.fontSize.mobile.secondaryInformation};
        color: ${({ theme }) => theme.colors.texts.highlight};

        & a {
          display: flex;
          align-items: center;
          font-size: inherit;
          color: inherit;
          font-family: inherit;
          margin-right: ${({ theme }) => theme.spaces.s};

          & img {
            margin-left: ${({ theme }) => theme.spaces.xxs};
          }
        }

        & a:last-of-type {
          margin-right: 0;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMinWidth}) {
    .projects-list {
      .project {
        width: 652px;

        .project-image {
          margin-bottom: 0;
        }

        .project-logo {
          width: 60px;
          height: 60px;
        }

        .project-title {
          font-size: ${({ theme }) => theme.fontSize.desktop.h3};
        }

        .project-description {
          font-size: ${({ theme }) => theme.fontSize.desktop.body};
        }

        .project-technology {
          font-size: ${({ theme }) =>
            theme.fontSize.desktop.secondaryInformation};
        }

        .project-used-technologies {
          gap: ${({ theme }) => theme.spaces.s};
          margin-top: ${({ theme }) => theme.spaces.xs};
          margin-bottom: ${({ theme }) => theme.spaces.l};

          & li {
            & img {
              margin-right: ${({ theme }) => theme.spaces.xs};
              width: 40px;
              height: 40px;
            }

            & p {
              font-size: ${({ theme }) => theme.fontSize.desktop.label};
            }
          }
        }
      }
    }

    .project-overlay {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: absolute;
      top: 0;
      left: 0%;
      background: rgba(1, 3, 26, 0.8);
      width: 100%;
      height: 100%;
      padding: ${({ theme }) =>
        `0 ${theme.spaces.s} ${theme.spaces.m} ${theme.spaces.s}`};
    }
  }
`;
