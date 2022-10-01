import styled from "styled-components";

export const SkillCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bg2};
  padding: ${({ theme }) => theme.spaces.s};
  max-width: 560px;
  height: fit-content;

  .skillLogo {
    margin-bottom: ${({ theme }) => theme.spaces.s};

    & img {
      width: 40px;
      height: 40px;
    }
  }

  .skillContent {
    .skillHeading {
      font-size: ${({ theme }) => theme.fontSize.mobile.h3};
      color: ${({ theme }) => theme.colors.texts.headers};
      margin-bottom: ${({ theme }) => theme.spaces.xs};
    }

    .aboutSkill {
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      color: ${({ theme }) => theme.colors.texts.body};
    }

    .readMoreAboutSKill {
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

    .skillLogo {
      margin: 0;
      margin-right: ${({ theme }) => theme.spaces.s};

      img {
        width: 61px;
        height: 61px;
      }
    }

    .skillContent {
      display: flex;
      flex-direction: column;
      margin-top: 13px;

      .skillHeading {
        font-size: ${({ theme }) => theme.fontSize.desktop.h3};
      }

      .aboutSkill {
        font-size: ${({ theme }) => theme.fontSize.desktop.body};
        margin-bottom: ${({ theme }) => theme.spaces.xs};
      }
    }
  }
`;
