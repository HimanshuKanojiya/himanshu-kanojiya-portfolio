import styled from "styled-components";

export const ProjectsContainer = styled.div`
  .description {
    margin-top: ${({ theme }) => theme.spaces.xxl4};
    font-size: ${({ theme }) => theme.fontSize.desktop.body};
    color: ${({ theme }) => theme.colors.texts.body};
    line-height: 1.4;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
  margin-top: ${({ theme }) => theme.spaces.xxl3};
  font-size: ${({ theme }) => theme.fontSize.desktop.body};
  color: ${({ theme }) => theme.colors.texts.body};

  & .project {
    position: relative;

    & .left-column {
      width: 50%;

      & img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }

      & .image-overlay {
        background-color: ${({ theme }) => theme.colors.background.tertiary};
        opacity: 20%;
        width: 100%;
        height: 100%;
      }
    }

    & .right-column {
      position: absolute;
      left: 45%;
      top: -5%;
      width: 45%;

      & .project-titles {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        & strong {
          font-size: ${({ theme }) => theme.fontSize.desktop.label};
          color: ${({ theme }) => theme.colors.texts.highlight};
          font-weight: 600;
        }

        & h3 {
          font-size: ${({ theme }) => theme.fontSize.desktop.h3};
          color: ${({ theme }) => theme.colors.texts.subHeaders};
          margin-top: ${({ theme }) => theme.spaces.xxs};
        }
      }

      & .project-desc {
        height: auto;
        padding: 18px;
        line-height: 1.2;
        margin-top: ${({ theme }) => theme.spaces.m};
        background-color: ${({ theme }) => theme.colors.background.secondary};
        border: solid 1px ${({ theme }) => theme.colors.texts.borderColor10per};
      }

      & .tech-used-in-project {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: ${({ theme }) => theme.spaces.m};
        margin-top: ${({ theme }) => theme.spaces.s};
        font-size: 14px;
        width: 100%;

        & li {
          display: flex;
          align-items: center;
          white-space: nowrap;
          gap: 4px;
        }

        & li svg {
          width: 20px;
          height: 20px;
        }
      }

      & .code-links {
        text-align: end;
        margin-top: ${({ theme }) => theme.spaces.xxl};

        & svg {
          width: 28px;
          height: 28px;

          &:hover {
            fill: ${({ theme }) => theme.colors.texts.highlight};
          }

          &:last-of-type {
            margin-left: ${({ theme }) => theme.spaces.m};
          }
        }
      }
    }
  }
`;
