import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
    :root{
        --ibm-plex-font: "IBM Plex Sans", sans-serif;
        --chakra-patch-font: "Chakra Petch", sans-serif;
    }

    html, #root {
        width: 100%;
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a{
        text-decoration: none;
    }

    body{
        background-color: ${({ theme }) => theme.colors.background.bg1};
        font-family: var(--ibm-plex-font);
        width: 100%;
        height: 100%;
        position: relative;
    }

    #root{
        
    }

    h1{
        color: ${({ theme }) => theme.colors.texts.mainHeading};
        font-family: var(--chakra-patch-font);
    }

    h2, h3{
        color: ${({ theme }) => theme.colors.texts.headers};
        font-family: var(--chakra-patch-font);
    }

    p, span{
        color: ${({ theme }) => theme.colors.texts.body};
        font-family: var(--ibm-plex-font);
    }
`;
