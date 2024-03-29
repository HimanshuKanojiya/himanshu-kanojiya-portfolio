import styled from "styled-components";

export const FeatureProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: ${({ theme }) => theme.spaces.l};

  & .project-left-column {
    display: flex;
    flex-direction: column;

    & .project-number {
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

    & .project-header {
      display: flex;
      gap: ${({ theme }) => theme.spaces.xxl2};
      margin-top: 0;
      white-space: nowrap;
      flex-wrap: wrap;

      & h3 {
        color: ${({ theme }) => theme.colors.texts.subHeaders};
        font-size: ${({ theme }) => theme.fontSize.mobile.h3};
      }

      & .links-to-project {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spaces.l};

        & a {
          display: flex;
          align-items: center;
          font-size: ${({ theme }) => theme.fontSize.mobile.label};
          font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
          text-decoration: none;
          color: ${({ theme }) => theme.colors.texts.label};
          gap: ${({ theme }) => theme.spaces.xs};

          & p {
            display: none;
          }

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
    }

    & .project-body {
      margin-top: ${({ theme }) => theme.spaces.s};
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
    }

    & .project-footer {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: ${({ theme }) => theme.spaces.s};
      color: ${({ theme }) => theme.colors.texts.label};
      gap: ${({ theme }) => theme.spaces.l};
    }
  }

  & .project-right-column {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 991px) {
    display: flex;
    flex-wrap: nowrap;

    & .project-left-column {
      width: 60%;

      & .project-number {
        font-size: ${({ theme }) => theme.fontSize.desktop.label};
        gap: ${({ theme }) => theme.spaces.xs};

        & p:last-of-type {
          color: ${({ theme }) => theme.colors.texts.highlight};
        }
      }

      & .project-header {
        gap: ${({ theme }) => theme.spaces.xxl2};
        margin-top: 0;
        flex-wrap: wrap;

        & h3 {
          font-size: ${({ theme }) => theme.fontSize.desktop.h3};
        }

        & .links-to-project {
          gap: ${({ theme }) => theme.spaces.l};

          & a {
            font-size: ${({ theme }) => theme.fontSize.desktop.label};
            gap: ${({ theme }) => theme.spaces.xs};

            & p {
              display: block;
            }
          }
        }
      }

      & .project-body {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
      }

      & .project-footer {
        margin-top: ${({ theme }) => theme.spaces.s};
        gap: ${({ theme }) => theme.spaces.l};
      }
    }

    & .project-right-column {
      width: 40%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
