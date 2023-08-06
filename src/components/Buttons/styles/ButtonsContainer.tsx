import styled from "styled-components";

export const ContactUsButtonContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
  color: ${({ theme }) => theme.colors.texts.highlight};
  background-color: transparent;
  text-decoration: none;
  border: solid 2px ${({ theme }) => theme.colors.texts.highlight};
  width: 172px;
  height: 48px;
  font-weight: 600;

  & img {
    margin-right: ${({ theme }) => theme.spaces.xs};
  }

  & img:nth-of-type(2) {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.background.main};
    background-color: ${({ theme }) => theme.colors.texts.highlight};
  }

  &:hover img:nth-of-type(1) {
    display: none;
  }

  &:hover img:nth-of-type(2) {
    display: block;
  }
`;
