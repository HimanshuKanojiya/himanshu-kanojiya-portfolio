import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-inline: ${({ theme }) => theme.spaces.l};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.texts.borderColor10per};
  border-top: 2px solid ${({ theme }) => theme.colors.texts.highlight};
  margin-top: 76px;
  position: relative;
  min-height: 650px;

  & .contact-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: -14%;
    width: 100%;
    line-height: 1.2;
    padding: ${({ theme }) => theme.spaces.l};

    & h2 {
      font-size: ${({ theme }) => theme.fontSize.mobile.h2};
      color: ${({ theme }) => theme.colors.texts.subHeaders};
      margin: ${({ theme }) => `${theme.spaces.xl} 0 ${theme.spaces.xs}`};
    }

    & p {
      max-width: 1098px;
      text-align: center;
      margin-bottom: ${({ theme }) => theme.spaces.l};
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
    }
  }

  @media (min-width: 991px) {
    margin-top: 104px;
    margin-inline: 100px;
    max-width: 1536px;
    height: 658px;

    & .contact-body {
      padding: ${({ theme }) => theme.spaces.xxl2};

      & h2 {
        font-size: ${({ theme }) => theme.fontSize.desktop.h2};
        margin: ${({ theme }) => `${theme.spaces.xxl7} 0 ${theme.spaces.xs}`};
      }

      & p {
        margin-bottom: ${({ theme }) => theme.spaces.xxl2};
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
      }
    }
  }
`;
