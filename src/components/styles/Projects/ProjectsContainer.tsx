import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};

  .projects-top-section {
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spaces.l};

    .projects-heading {
      font-size: ${({ theme }) => theme.fontSize.mobile.h2};
      color: ${({ theme }) => theme.colors.texts.headers};
      margin-bottom: ${({ theme }) => theme.spaces.xs};
    }

    .projects-description {
      font-size: ${({ theme }) => theme.fontSize.mobile.body};
      color: ${({ theme }) => theme.colors.texts.body};
    }
  }
`;
