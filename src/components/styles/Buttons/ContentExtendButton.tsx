import styled from "styled-components";

export const ContentExtendButton = styled.button`
  display: flex;
  font-family: "Chakra Petch", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.mobile.label};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.texts.highlight};
  margin-top: ${({ theme }) => theme.spaces.xs};
  cursor: pointer;
  margin-left: auto;

  & p {
    display: flex;
    align-items: center;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }

  @media screen and (min-width: 686px) {
    font-size: ${({ theme }) => theme.fontSize.desktop.label};
    margin-top: ${({ theme }) => theme.spaces.s};
  }
`;
