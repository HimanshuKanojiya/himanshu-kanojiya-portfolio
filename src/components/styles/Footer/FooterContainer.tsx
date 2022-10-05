import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.mobile.label};
  color: ${({ theme }) => theme.colors.texts.label};
  margin-top: ${({ theme }) => theme.spaces.xxl2};
  padding-bottom: ${({ theme }) => theme.spaces.s};
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.texts.highlight};
  }
`;
