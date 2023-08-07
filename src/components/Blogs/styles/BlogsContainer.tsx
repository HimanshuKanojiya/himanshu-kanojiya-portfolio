import styled from "styled-components";

export const BlogsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.xxl};

  & .blogs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spaces.l};
    width: 100%;

    & .blog {
      display: flex;
      flex-direction: column;
      flex: 1;
      max-width: 400px;
      height: 307px;
      background-color: ${({ theme }) => theme.colors.background.secondary};
      border: solid 1px ${({ theme }) => theme.colors.texts.borderColor10per};
      padding: ${({ theme }) => theme.spaces.l};
      line-height: 1.2;

      & svg {
        width: 40px;
        height: 40px;
      }

      & h3 {
        margin: ${({ theme }) => `${theme.spaces.m} 0 ${theme.spaces.xs}`};
        color: ${({ theme }) => theme.colors.texts.subHeaders};
        font-size: ${({ theme }) => theme.fontSize.mobile.h3};
      }

      & p {
        color: ${({ theme }) => theme.colors.texts.body};
        font-size: ${({ theme }) => theme.fontSize.mobile.body};
      }

      & a {
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: ${({ theme }) => theme.spaces.xs};
        margin-top: auto;
        font-size: ${({ theme }) => theme.fontSize.mobile.label};
        font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
        color: ${({ theme }) => theme.colors.texts.label};
        font-weight: 600;

        & svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  @media (min-width: 991px) {
    margin-top: ${({ theme }) => theme.spaces.xxl4};

    & .blogs {
      gap: ${({ theme }) => theme.spaces.xxl3};

      & .blog {
        padding: ${({ theme }) => theme.spaces.xxl2};
        height: 381px;

        & h3 {
          margin: ${({ theme }) => `${theme.spaces.m} 0 ${theme.spaces.xs}`};
          font-size: ${({ theme }) => theme.fontSize.desktop.h3};
        }

        & p {
          font-size: ${({ theme }) => theme.fontSize.desktop.body};
        }

        & a {
          margin-top: auto;
          font-size: ${({ theme }) => theme.fontSize.desktop.label};
        }
      }
    }
  }
`;
