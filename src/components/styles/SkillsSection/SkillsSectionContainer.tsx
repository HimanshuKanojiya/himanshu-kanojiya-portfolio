import styled from "styled-components";

export const SkillsSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};
  padding-inline: ${({ theme }) => theme.spaces.s};

  .skillTitle {
    font-size: ${({ theme }) => theme.fontSize.mobile.h2};
    color: ${({ theme }) => theme.colors.texts.headers};
    margin-bottom: ${({ theme }) => theme.spaces.l};
  }

  .skillsList {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 686px) {
    margin-top: ${({ theme }) => theme.spaces.xxl5};
    padding-inline: ${({ theme }) => theme.spaces.l};
    max-width: 768px;

    .skillTitle {
      font-size: ${({ theme }) => theme.fontSize.desktop.h2};
      margin-bottom: ${({ theme }) => theme.spaces.xl};
    }
  }

  @media screen and (min-width: 1336px) {
    padding-inline: 196px;
    max-width: 100%;
  }
`;