import styled from "styled-components";

export const ResponsibilityListContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.s};
  font-size: ${({ theme }) => theme.fontSize.mobile.body};
  color: ${({ theme }) => theme.colors.texts.body};

  p,
  ol,
  li {
    color: inherit;
    font-size: inherit;
    line-height: ${({ theme }) => theme.lineHeight};
  }

  ol {
    margin-top: ${({ theme }) => theme.spaces.xs};
    margin-left: ${({ theme }) => theme.spaces.m};
  }
`;
