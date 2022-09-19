import styled from "styled-components";

export const SkillsListContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.s};

  & strong {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 20px;
    line-height: ${({ theme }) => theme.lineHeight};
    color: ${({ theme }) => theme.colors.texts.body};
    font-weight: 600;
  }

  & ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.spaces.xs};
    gap: ${({ theme }) => theme.spaces.s};

    & li {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spaces.xs};

      & p {
        font-family: "Chakra Petch", sans-serif;
        font-size: ${({ theme }) => theme.fontSize.mobile.label};
        color: ${({ theme }) => theme.colors.texts.label};
      }
    }
  }
`;
