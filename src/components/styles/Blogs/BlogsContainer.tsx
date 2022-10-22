import styled from "styled-components";

export const BlogsContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};

  .blogs-top-section {
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spaces.l};

    .blogs-heading {
      font-size: ${({ theme }) => theme.fontSize.mobile.h2};
      color: ${({ theme }) => theme.colors.texts.headers};
      margin-bottom: ${({ theme }) => theme.spaces.xs};
    }

    .blogs-description {
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      color: ${({ theme }) => theme.colors.texts.body};
    }
  }

  .blogs-list {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spaces.m};

    & .blog {
      display: flex;
      flex-direction: column;

      & .blog-image {
        max-width: 357px;
        height: 241px;
        object-fit: contain;
        margin-bottom: ${({ theme }) => theme.spaces.s};
      }

      & small {
        font-size: ${({ theme }) => theme.fontSize.mobile.secondaryInformation};
        color: ${({ theme }) => theme.colors.texts.label};
        margin-bottom: ${({ theme }) => theme.spaces.xxs};
      }

      .blog-title {
        font-size: ${({ theme }) => theme.fontSize.mobile.h3};
        color: ${({ theme }) => theme.colors.texts.headers};
        margin-bottom: ${({ theme }) => theme.spaces.xs};
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      & .blog-description {
        font-size: ${({ theme }) => theme.fontSize.mobile.body};
        color: ${({ theme }) => theme.colors.texts.body};
        margin-bottom: ${({ theme }) => theme.spaces.s};
        display: -webkit-box;
        line-clamp: 3;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      & .blog-cta {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.texts.highlight};
        font-size: ${({ theme }) => theme.fontSize.mobile.secondaryInformation};

        & img {
          margin-left: ${({ theme }) => theme.spaces.xs};
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMinWidth}) {
    margin-top: ${({ theme }) => theme.spaces.xxl5};

    .blogs-top-section {
      .blogs-heading {
        font-size: ${({ theme }) => theme.fontSize.desktop.h2};
      }

      .blogs-description {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
      }
    }

    .blogs-list {
      flex-direction: row;
      flex-wrap: wrap;
      gap: ${({ theme }) => theme.spaces.s};

      .blog {
        max-width: 375px;

        & .blog-image {
          width: 100%;
          margin-bottom: ${({ theme }) => theme.spaces.m};
        }

        & small {
          font-size: ${({ theme }) =>
            theme.fontSize.desktop.secondaryInformation};
          margin-bottom: ${({ theme }) => theme.spaces.s};
        }

        & .blog-title {
          font-size: ${({ theme }) => theme.fontSize.desktop.h3};
          margin-bottom: ${({ theme }) => theme.spaces.s};
        }

        & .blog-description {
          font-size: ${({ theme }) => theme.fontSize.desktop.body};
          margin-bottom: ${({ theme }) => theme.spaces.m};
        }

        & .blog-cta {
          font-size: ${({ theme }) =>
            theme.fontSize.desktop.secondaryInformation};

          & img {
            margin-left: ${({ theme }) => theme.spaces.xs};
          }
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktopMinWidth}) {
    max-width: ${({ theme }) => theme.breakpoint.desktopMinWidth};

    .blogs-top-section {
      flex-direction: row;

      .blogs-description {
        max-width: 829px;
        margin-left: auto;
      }
    }

    .blogs-list {
      display: grid;
      grid-template-columns: repeat(3, 375px);
      grid-gap: ${({ theme }) => theme.spaces.l};

      & .blog {
        max-width: 100%;
      }
    }
  }
`;
