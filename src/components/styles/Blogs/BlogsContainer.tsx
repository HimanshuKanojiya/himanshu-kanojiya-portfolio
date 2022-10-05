import styled from "styled-components";

export const BlogsContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};
  padding-inline: ${({ theme }) => theme.spaces.s};

  .blogs-heading {
    font-size: ${({ theme }) => theme.fontSize.mobile.h2};
    color: ${({ theme }) => theme.colors.texts.headers};
    margin-bottom: ${({ theme }) => theme.spaces.xs};
  }

  .blogs-description {
    font-size: ${({ theme }) => theme.fontSize.mobile.body};
    color: ${({ theme }) => theme.colors.texts.body};
    margin-bottom: ${({ theme }) => theme.spaces.l};
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

      & .blog-description {
        font-size: ${({ theme }) => theme.fontSize.mobile.body};
        color: ${({ theme }) => theme.colors.texts.body};
        margin-bottom: ${({ theme }) => theme.spaces.s};
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
`;
