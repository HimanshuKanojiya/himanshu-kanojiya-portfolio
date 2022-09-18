import styled from "styled-components";

export const MenuOverlayContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.bg2};
  opacity: 70%;
  position: fixed;
  left: 0;
  top: 0;
`;
