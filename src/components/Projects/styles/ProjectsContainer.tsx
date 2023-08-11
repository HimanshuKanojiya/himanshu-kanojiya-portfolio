import styled from "styled-components";

export const ProjectsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.xxl};

  & .about-projects {
    font-size: ${({ theme }) => theme.fontSize.mobile.body};
    color: ${({ theme }) => theme.colors.texts.body};
    max-width: 100%;
  }

  & .featured-projects {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: ${({ theme }) => theme.spaces.xxl};
    gap: 80px;

    & .reverse-column {
      flex-direction: row-reverse;
    }
  }

  & .other-projects {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spaces.l};
    margin-top: ${({ theme }) => theme.spaces.xxl4};
  }

  @media (min-width: 991px) {
    & .about-projects {
      font-size: ${({ theme }) => theme.fontSize.desktop.body};
      max-width: 80%;
    }

    & .featured-projects {
      gap: 80px;
    }

    & .other-projects {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ theme }) => theme.spaces.xxl3};
      margin-top: 80px;
    }
  }
`;
