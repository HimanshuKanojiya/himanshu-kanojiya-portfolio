import styled from "styled-components";

export const WorkExperienceContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.xxl};

  & .experience-navigation {
    width: 100%;
    border-bottom: solid 1px
      ${({ theme }) => theme.colors.texts.borderColor20per};
    margin-bottom: ${({ theme }) => theme.spaces.l};

    & ul {
      display: flex;
      align-items: center;
      list-style-type: none;
      overflow-x: scroll;
      scrollbar-width: 0;
      white-space: nowrap;
      font-size: ${({ theme }) => theme.fontSize.mobile.label};
      color: ${({ theme }) => theme.colors.texts.label};
      font-weight: 600;
      overflow-y: hidden;
      gap: ${({ theme }) => theme.spaces.xl};

      & li {
        flex: 1;
        padding-bottom: ${({ theme }) => theme.spaces.s};
        cursor: pointer;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  & .selected-experience {
    border-bottom: 2px solid ${({ theme }) => theme.colors.texts.highlight};
  }

  & .about-experience {
    display: flex;
    flex-direction: column;

    & .about-experience-header {
      display: flex;
      flex-direction: column;

      & h3 {
        font-size: ${({ theme }) => theme.fontSize.mobile.h3};
        color: ${({ theme }) => theme.colors.texts.subHeaders};
      }

      & small {
        font-size: ${({ theme }) => theme.fontSize.mobile.secondaryInformation};
        color: ${({ theme }) => theme.colors.texts.secondaryText};
        margin-top: ${({ theme }) => theme.spaces.xxs};
      }
    }

    & .responsibilites-and-work {
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      color: ${({ theme }) => theme.colors.texts.body};
      margin-top: ${({ theme }) => theme.spaces.s};
      line-height: 1.4;
      list-style-type: square;
      max-width: 892px;
      min-height: 400px;

      & li {
        margin-left: ${({ theme }) => theme.spaces.xxl};
      }
    }
  }

  @media (min-width: 991px) {
    & .experience-navigation {
      margin-bottom: ${({ theme }) => theme.spaces.xxl2};

      & ul {
        font-size: ${({ theme }) => theme.fontSize.desktop.label};
      }
    }

    & .about-experience {
      & .about-experience-header {
        & h3 {
          font-size: ${({ theme }) => theme.fontSize.desktop.h3};
        }

        & small {
          font-size: ${({ theme }) =>
            theme.fontSize.desktop.secondaryInformation};
          margin-top: ${({ theme }) => theme.spaces.xxs};
        }
      }

      & .responsibilites-and-work {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
        margin-top: ${({ theme }) => theme.spaces.m};
      }
    }
  }
`;
