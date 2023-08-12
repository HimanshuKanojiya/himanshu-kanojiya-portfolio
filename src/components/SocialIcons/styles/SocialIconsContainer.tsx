import styled from "styled-components";

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;
  z-index: 2;

  & a {
    text-decoration: none;
    opacity: 100%;
    color: ${({ theme }) => theme.colors.texts.label};
    display: flex;
  }
`;
