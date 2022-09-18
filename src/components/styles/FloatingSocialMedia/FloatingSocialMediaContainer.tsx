import styled from "styled-components";

export const FloatingSocialMediaContainer = styled.div`
  position: fixed;
  right: 56px;
  bottom: 0;

  .socialIcons {
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      margin-bottom: ${({ theme }) => theme.spaces.m};

      img {
        width: 41px;
        height: 33px;
        opacity: 80%;

        &:hover {
          opacity: 100%;
        }
      }
    }
  }

  .verticalBorder {
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.texts.highlight};
    background-color: ${({ theme }) => theme.colors.texts.highlight};
    opacity: 80%;
    height: 240px;
    width: 0px;
    margin: auto;
  }
`;
