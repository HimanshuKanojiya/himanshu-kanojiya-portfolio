import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-inline: ${({ theme }) => theme.spaces.l};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.texts.borderColor10per};
  border-top: 2px solid ${({ theme }) => theme.colors.texts.highlight};
  margin-top: 76px;
  position: relative;
  min-height: 658px;

  & .contact-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -14%;
    width: 100%;
    padding: ${({ theme }) => theme.spaces.l};

    & > img {
      width: 250px;
      height: auto;
    }

    & > h2 {
      font-size: ${({ theme }) => theme.fontSize.mobile.h2};
      color: ${({ theme }) => theme.colors.texts.subHeaders};
      margin: ${({ theme }) => `${theme.spaces.xl} 0 ${theme.spaces.xs}`};
      text-align: center;
    }

    & > p {
      text-align: center;
      margin-bottom: ${({ theme }) => theme.spaces.l};
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      max-width: 900px;
    }
  }

  @media (min-width: 991px) {
    margin-top: 104px;
    margin-inline: 100px;
    max-width: 1536px;
    height: 658px;

    & .contact-body {
      padding: ${({ theme }) => theme.spaces.xxl2};

      & > img {
        width: 306px;
        height: 321px;
      }

      & > h2 {
        font-size: ${({ theme }) => theme.fontSize.desktop.h2};
        margin: ${({ theme }) => `${theme.spaces.xxl7} 0 ${theme.spaces.xs}`};
      }

      & > p {
        margin-bottom: ${({ theme }) => theme.spaces.xxl7};
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
      }
    }
  }
`;
