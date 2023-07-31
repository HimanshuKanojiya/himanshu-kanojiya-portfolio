import styled from "styled-components";

export const AboutMeContainer = styled.div`
  .about-me {
    font-size: ${({ theme }) => theme.fontSize.desktop.body};
    color: ${({ theme }) => theme.colors.texts.body};
    margin-top: ${({ theme }) => theme.spaces.xxl4};
    line-height: 1.2;
    max-width: 793px;

    & p:nth-of-type(2) {
      margin-top: ${({ theme }) => theme.spaces.xxl};
    }
  }

  .skills {
    display: flex;
    width: 100%;
    height: 700px;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    margin-top: 73px;
    margin-bottom: 104px;
    border: solid 1px ${({ theme }) => theme.colors.texts.borderColor10per};

    & div {
      flex: 1;
      height: 100%;
      border-right-style: solid;
      border-right-width: 1px;
      border-right-color: ${({ theme }) => theme.colors.texts.borderColor20per};
      padding: 34px;

      & h3 {
        font-size: ${({ theme }) => theme.fontSize.desktop.h3};
        color: ${({ theme }) => theme.colors.texts.subHeaders};
        margin: 20px 0 8px;
        margin: ${({ theme }) => `${theme.spaces.l} 0 ${theme.spaces.xs}`};
      }

      & p {
        color: var(--portfolio-text-body-color);
        font-size: var(--portfolio-text-desktop-body-size);
        margin-bottom: 12px;
        line-height: 1.2;
      }

      & ul {
        list-style-type: disc;
        line-height: 1.2;
        margin-left: 28px;
        font-size: var(--portfolio-text-desktop-body-size);
      }

      & ul li::marker {
        color: var(--portfolio-text-body-color);
      }
    }

    & div:nth-of-type(3) {
      border: 0;
    }
  }
`;
