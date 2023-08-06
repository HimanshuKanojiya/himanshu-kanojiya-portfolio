import styled from "styled-components";

export const AboutMeContainer = styled.div`
  & .about-me {
    font-size: ${({ theme }) => theme.fontSize.mobile.body};
    color: ${({ theme }) => theme.colors.texts.body};
    margin-top: ${({ theme }) => theme.spaces.xxl};
    line-height: 1.2;
    max-width: 793px;

    & p:nth-of-type(2) {
      margin-top: ${({ theme }) => theme.spaces.xxl};
    }
  }

  .skills {
    display: flex;
    width: 100%;
    height: fit-content;
    margin-top: ${({ theme }) => theme.spaces.xxl4};
    gap: ${({ theme }) => theme.spaces.l};
    flex-wrap: wrap;

    & div {
      width: 100%;
      height: 100%;
      padding: ${({ theme }) => theme.spaces.l};
      background-color: ${({ theme }) => theme.colors.background.secondary};
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      border: solid 1px ${({ theme }) => theme.colors.texts.borderColor10per};
      overflow: hidden;

      & img {
        width: 40px;
        height: 40px;
      }

      & h3 {
        font-size: ${({ theme }) => theme.fontSize.mobile.h3};
        color: ${({ theme }) => theme.colors.texts.subHeaders};
        margin: ${({ theme }) => `${theme.spaces.m} 0 ${theme.spaces.xs}`};
        line-height: 1.2;
      }

      & p {
        color: ${({ theme }) => theme.colors.texts.body};
        margin-bottom: ${({ theme }) => theme.spaces.s};
        line-height: 1.2;
      }

      & ul {
        list-style-type: square;
        line-height: 1.2;
        margin-left: 28px;
      }

      & ul li::marker {
        color: ${({ theme }) => theme.colors.texts.body};
      }
    }

    & div:nth-of-type(3) {
      border: 0;
    }
  }

  @media (min-width: 991px) {
    & .about-me {
      font-size: ${({ theme }) => theme.fontSize.desktop.body};
      margin-top: ${({ theme }) => theme.spaces.xxl4};
    }

    & .skills {
      margin-top: 73px;
      gap: 0;
      height: 700px;
      border: solid 1px ${({ theme }) => theme.colors.texts.borderColor10per};

      & div {
        flex: 1;
        padding: 34px;
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
        border: 0;
        border-right-style: solid;
        border-right-width: 1px;
        border-right-color: ${({ theme }) =>
          theme.colors.texts.borderColor20per};

        & img {
          width: 61px;
          height: 61px;
        }

        & h3 {
          font-size: ${({ theme }) => theme.fontSize.desktop.h3};
          margin: ${({ theme }) => `${theme.spaces.l} 0 ${theme.spaces.xs}`};
        }
      }
    }
  }
`;
