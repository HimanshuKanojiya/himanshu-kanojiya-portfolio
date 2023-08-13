import styled from "styled-components";

export const GetTechWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xs};
  font-size: ${({ theme }) => theme.fontSize.mobile.label};
  font-family: ${({ theme }) => theme.fontFamily.chakraPetch};
  font-weight: 500;
  white-space: nowrap;

  @media (min-width: 992px) {
    font-size: ${({ theme }) => theme.fontSize.desktop.label};
  }
`;
