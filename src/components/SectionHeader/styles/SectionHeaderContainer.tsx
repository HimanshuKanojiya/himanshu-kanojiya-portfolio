import styled from "styled-components";

export const SectionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: ${({ theme }) => theme.fontSize.desktop.h2};
  color: ${({ theme }) => theme.colors.texts.subHeaders};

  & h2 {
    white-space: nowrap;
  }

  & .heading-border {
    width: 100%;
    border: solid 1px ${({ theme }) => theme.colors.texts.body};
  }
`;
