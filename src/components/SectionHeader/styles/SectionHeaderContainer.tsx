import styled from "styled-components";

export const SectionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.texts.subHeaders};

  & h2 {
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSize.mobile.h2};
  }

  & .heading-border {
    width: 100%;
    border: solid 1px ${({ theme }) => theme.colors.texts.body};
  }

  @media (min-width: 991px) {
    gap: 20px;

    & h2 {
      font-size: ${({ theme }) => theme.fontSize.desktop.h2};
    }
  }
`;
