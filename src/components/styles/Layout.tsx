import styled from "styled-components";

export const Layout = styled.div`
  margin-inline: ${({ theme }) => theme.spaces.s};
  min-width: ${({ theme }) => theme.breakpoint.mobileMinWidth};
  height: 100%;

  @media screen and (min-width: 686px) {
    margin-inline: ${({ theme }) => theme.spaces.l};
    height: 100%;
  }

  @media screen and (min-width: 1336px) {
    margin-inline: 196px;
    height: 100%;
  }
`;
