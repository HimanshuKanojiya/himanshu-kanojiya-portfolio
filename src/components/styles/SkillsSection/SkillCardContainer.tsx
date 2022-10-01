import styled from "styled-components";

export const SkillCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bg2};
  padding: ${({ theme }) => theme.spaces.s};

  .skillLogo {
    width: 40px;
    height: 40px;
    margin-bottom: ${({ theme }) => theme.spaces.s};

    & img {
      width: 100%;
      height: 100%;
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
`;
