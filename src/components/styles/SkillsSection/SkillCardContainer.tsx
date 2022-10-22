import styled from "styled-components";

export const SkillCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bg2};
  padding: ${({ theme }) => theme.spaces.s};
  width: 100%;
  height: fit-content;

  .skill-logo {
    margin-bottom: ${({ theme }) => theme.spaces.s};

    & img {
      width: 40px;
      height: 40px;
    }
  }

  .skill-content {
    .skill-heading {
      font-size: ${({ theme }) => theme.fontSize.mobile.h3};
      color: ${({ theme }) => theme.colors.texts.headers};
      margin-bottom: ${({ theme }) => theme.spaces.xs};
    }

    .about-skill {
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      color: ${({ theme }) => theme.colors.texts.body};
    }

    .read-more-about-skill {
      display: -webkit-box;
      line-clamp: 3;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media screen and (min-width: 686px) {
    padding: ${({ theme }) => theme.spaces.l};
    display: flex;

    .skill-logo {
      margin: 0;
      margin-right: ${({ theme }) => theme.spaces.s};

      img {
        width: 61px;
        height: 61px;
      }
    }

    .skill-content {
      display: flex;
      flex-direction: column;
      margin-top: 13px;

      .skill-heading {
        font-size: ${({ theme }) => theme.fontSize.desktop.h3};
      }

      .about-skill {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
        margin-bottom: ${({ theme }) => theme.spaces.xs};
      }

      .read-more-about-sKill {
        display: -webkit-box;
        line-clamp: 4;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
