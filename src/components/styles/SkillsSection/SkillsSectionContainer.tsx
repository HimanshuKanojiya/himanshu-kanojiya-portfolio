import styled from "styled-components";

export const SkillsSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};

  .skill-title {
    font-size: ${({ theme }) => theme.fontSize.mobile.h2};
    color: ${({ theme }) => theme.colors.texts.headers};
    margin-bottom: ${({ theme }) => theme.spaces.l};
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spaces.m};
  }

  @media screen and (min-width: 686px) {
    margin-top: ${({ theme }) => theme.spaces.xxl5};
    max-width: 768px;

    .skill-title {
      font-size: ${({ theme }) => theme.fontSize.desktop.h2};
      margin-bottom: ${({ theme }) => theme.spaces.xl};
    }

    .skills-list {
      flex-wrap: wrap;
      gap: ${({ theme }) => theme.spaces.l};
    }
  }

  @media screen and (min-width: 1336px) {
    max-width: 100%;

    .skills-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: ${({ theme }) => theme.spaces.l};
    }
  }
`;
