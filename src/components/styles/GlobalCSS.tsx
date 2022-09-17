import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }


    body{
        background-color: ${({ theme }) => theme.colors.background.bg1};
        font-family: "IBM Plex Sans", sans-serif;
    }

    h1{
        color: ${({ theme }) => theme.colors.texts.mainHeading};
        font-family: "Chakra Petch", sans-serif;
    }

    h2, h3{
        color: ${({ theme }) => theme.colors.texts.headers};
        font-family: "Chakra Petch", sans-serif;
    }

    p, span{
        color: ${({ theme }) => theme.colors.texts.body};
        font-family: "IBM Plex Sans", sans-serif;
    }
`;
