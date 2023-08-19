import styled from "styled-components";

export const SectionWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: ${({ theme }) => theme.spaces.l};
  margin-top: 76px;
  margin-inline: auto;

  @media (min-width: 991px) {
    margin-top: 104px;
    padding-inline: 100px;
    max-width: 1536px;
  }
`;
