import styled from "styled-components";

export const ExperienceMenuContainer = styled.div`
  height: 500px;
  width: 392px;
  display: inline;

  .leftNavigationMenu {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.texts.label};
    font-size: ${({ theme }) => theme.fontSize.desktop.label};
    font-family: "Chakra Petch";
    list-style-type: none;
    border-right-style: solid;
    border-right-color: ${({ theme }) => theme.colors.texts.highlight};
    border-right-width: 2px;
    height: 100%;

    & .companyList,
    a {
      color: inherit;
      font-size: inherit;
      font-family: inherit;
      width: 392px;
      white-space: nowrap;
    }

    a {
      display: flex;
      align-items: center;
      height: 60px;
      padding-left: ${({ theme }) => theme.spaces.s};
    }

    .selectedCompany {
      color: ${({ theme }) => theme.colors.texts.highlight};
      background-color: ${({ theme }) => theme.colors.background.bg2};
      border-right-style: solid;
      border-right-color: ${({ theme }) => theme.colors.texts.highlight};
      border-right-width: 2px;
    }
  }
`;
