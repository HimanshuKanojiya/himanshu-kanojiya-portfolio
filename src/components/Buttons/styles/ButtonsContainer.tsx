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
  transition-property: all;
  transition-duration: 450ms;
  transition-timing-function: cubic-bezier(0.075, 0, 0.165, 1);

  & img {
    margin-right: ${({ theme }) => theme.spaces.xs};
  }

  & img:nth-of-type(2) {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.background.main};
    background-color: ${({ theme }) => theme.colors.texts.highlight};

    & p {
      display: none;
    }
  }

  &:hover img:nth-of-type(1) {
    display: none;
  }

  &:hover img:nth-of-type(2) {
    display: block;
    transform: translate(10%, 0) scale(1);
  }
`;

export const LinkedInButtonContainer = styled.button`
  background-color: transparent;
  border: solid 1px ${({ theme }) => theme.colors.texts.highlight};
  color: ${({ theme }) => theme.colors.texts.highlight};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.mobile.body};
  font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition-property: all;
  transition-duration: 450ms;
  transition-timing-function: cubic-bezier(0.075, 0, 0.165, 1);

  & a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spaces.xs};
    padding: ${({ theme }) => theme.spaces.m};

    & svg {
      width: 28px;
      height: 28px;
      transform: none;
    }

    & p {
      margin: 0;
      padding: 0;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.background.main};
    background-color: ${({ theme }) => theme.colors.texts.highlight};

    & a {
      color: inherit;

      & svg {
        fill: ${({ theme }) => theme.colors.background.main};
        transform: translate(calc(306px / 2 - 30px), 0) scale(1.5);
      }

      & p {
        opacity: 0;
      }
    }
  }

  @media (min-width: 991px) {
    font-size: ${({ theme }) => theme.fontSize.desktop.body};
  }
`;
