import styled from "styled-components";

export const SectionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & h2 {
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSize.mobile.h2};
    color: ${({ theme }) => theme.colors.texts.highlight};
  }

  & .heading-border {
    width: 100%;
    border: solid 1px ${({ theme }) => theme.colors.texts.body};
    opacity: 30%;
  }

  @media (min-width: 991px) {
    gap: 20px;

    & h2 {
      font-size: ${({ theme }) => theme.fontSize.desktop.h2};
    }
  }
`;
