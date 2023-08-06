import styled from "styled-components";

export const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.main};
  opacity: 40%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;
