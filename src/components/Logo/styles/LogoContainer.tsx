import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xxs};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
  font-size: ${({ theme }) => theme.fontSize.desktop.label};
  color: ${({ theme }) => theme.colors.texts.label};
  white-space: nowrap;

  & strong {
    font-weight: 600;
  }
`;
