import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.mobile.label};
  color: ${({ theme }) => theme.colors.texts.label};
  margin-bottom: ${({ theme }) => theme.spaces.xs};
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.texts.highlight};
  }
`;
