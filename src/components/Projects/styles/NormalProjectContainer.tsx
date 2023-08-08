import styled from "styled-components";

export const NormalProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 400px;
  height: 307px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: solid 1px ${({ theme }) => theme.colors.texts.borderColor10per};
  padding: ${({ theme }) => theme.spaces.l};

  & .project-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.mobile.label};
    color: ${({ theme }) => theme.colors.texts.label};
    font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
    font-weight: 600;
    gap: ${({ theme }) => theme.spaces.xs};

    & .line {
      width: 40px;
      height: 1px;
      border: 1px solid ${({ theme }) => theme.colors.texts.highlight};
    }

    & p:last-of-type {
      color: ${({ theme }) => theme.colors.texts.highlight};
    }
  }

  & .project-body {
    & h3 {
      font-size: ${({ theme }) => theme.fontSize.mobile.h3};
      margin-block: ${({ theme }) => theme.spaces.xs};
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    & p {
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  & .project-footer {
    margin-top: ${({ theme }) => theme.spaces.xxl2};
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spaces.l};
    font-family: ${({ theme }) => theme.fontFamily.chakraPetch};

    & a {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: ${({ theme }) => theme.fontSize.mobile.label};
      color: ${({ theme }) => theme.colors.texts.label};
      flex-wrap: nowrap;
      gap: ${({ theme }) => theme.spaces.xs};
      white-space: nowrap;

      & svg {
        width: 20px;
        height: 20px;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.texts.highlight};

        & svg {
          fill: ${({ theme }) => theme.colors.texts.highlight};
        }
      }
    }
  }

  @media (min-width: 991px) {
    height: 340px;
    padding: ${({ theme }) => theme.spaces.xxl2};

    & .project-header {
      font-size: ${({ theme }) => theme.fontSize.desktop.label};
    }

    & .project-body {
      & h3 {
        font-size: ${({ theme }) => theme.fontSize.desktop.h3};
        margin: ${({ theme }) => `${theme.spaces.s} 0 ${theme.spaces.s}`};
      }

      & p {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
      }
    }

    & .project-footer {
      & a {
        font-size: ${({ theme }) => theme.fontSize.desktop.label};

        & svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
