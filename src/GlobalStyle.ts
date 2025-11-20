import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `

    @font-face {
        font-family: 'Montserrat';
        src: url('/assets/fonts/Montserrat/Montserrat-Regular.woff2') format('woff2'),
             url('/assets/fonts/Montserrat/Montserrat-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/assets/fonts/Montserrat/Montserrat-Bold.woff2') format('woff2'),
             url('/assets/fonts/Montserrat/Montserrat-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    :root {
        --background-gray: #ffffffff;
        --text-color-white: #FFF;

        --border-radius1: 7px;
        --border-radius2: 12px;

        --shadow-1: 0 0 50px rgba(0, 0, 0, 0.5);
        --shadow-2: 4 8 10px rgba(0, 0, 0, 0.5);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
        scroll-behavior: smooth;
        background: var(--background-gray);
    }  

    a {
        text-decoration: none;
    }

    label {
        display: none;
    }
`