import styled from "styled-components";

export const BlogsContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};
  padding-inline: ${({ theme }) => theme.spaces.s};

  .blogs-container {
    font-size: ${({ theme }) => theme.fontSize.mobile.h2};
    color: ${({ theme }) => theme.colors.texts.headers};
    margin-bottom: ${({ theme }) => theme.spaces.l};
  }
`;
