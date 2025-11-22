import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root {
        --background-gray: #ffffffff;
        --text-color-white: #FFF;

        --border-radius1: 7px;
        --border-radius2: 12px;

        --shadow-1: 0 0 50px rgba(0, 0, 0, 0.5);
        --shadow-2: 4 8 10px rgba(0, 0, 0, 0.5);

        --font-title: 'Merriweather', sans-serif;
        --font-main: 'Roboto', sans-serif;

        --font-size-base: 1.6rem; /* 16px */

        /* Display / Hero */
        --font-size-display-lg: 4.8rem; /* 48px */
        --font-size-display-md: 4rem;   /* 40px */
        --font-size-display-sm: 3.6rem; /* 36px */

        /* Headings */
        --font-size-h1: 3.2rem; /* 32px */
        --font-size-h2: 2.4rem; /* 24px */
        --font-size-h3: 2rem;   /* 20px */
        --font-size-h4: 1.8rem; /* 18px */
        --font-size-h5: 1.6rem; /* 16px */
        --font-size-h6: 1.4rem; /* 14px */

        /* Body Text */
        --font-size-body-lg: 1.8rem; /* textos um pouco maiores */
        --font-size-body-md: 1.6rem; /* padrão */
        --font-size-body-sm: 1.4rem; /* textos menores */
        --font-size-body-xs: 1.2rem; /* notas e detalhes */

        /* UI Elements */
        --font-size-button-lg: 1.6rem;
        --font-size-button-md: 1.4rem;
        --font-size-button-sm: 1.2rem;

        /* Captions, labels, etc. */
        --font-size-caption: 1.2rem;
        --font-size-label: 1.2rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--text-color-white);
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