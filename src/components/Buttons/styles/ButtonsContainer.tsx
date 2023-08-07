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

export const LinkedInButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xs};
  padding: ${({ theme }) => theme.spaces.m};
  background-color: transparent;
  border: solid 1px ${({ theme }) => theme.colors.texts.highlight};
  color: ${({ theme }) => theme.colors.texts.highlight};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.mobile.body};
  font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  & svg {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 991px) {
    font-size: ${({ theme }) => theme.fontSize.desktop.body};
  }
`;
