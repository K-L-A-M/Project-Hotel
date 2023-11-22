import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    :root {
        /* fonts */

        --font-main: 'Inter', sans-serif;
        --font-details: 'Poppins', sans-serif;

        /* colors */

        --color-darkBlue: #0A093C;
        --color-black: #000000;
        --color-black-opacity: #00000060;
        --color-dark-gray: #756969;
        --color-gray: #F8EFEF;
        --color-blue: #6D6BEB;
        --color-dark-blue: #282767;
        --color-dark-blue-houver: #28276799;
        --color-ligth-blue: #6D6BEB99;
        --color-dirty-white:#F3F3F3;
        --color-white: #FFFFFF;
        --color-white-opacity: #FFFFFF50;
        --color-divider: #B8B6B6;

        /* border */

        --border: .0625rem solid #000000;

        /* shadow */

        --shadow: 0rem .25rem .25rem 0rem rgba(0, 0, 0, 0.25);
    }

    body {

        max-width: 100vw;
        min-height: 100vh;
        background-color: var(--color-white);
        font-family: var(--font-main); 
        font-weight: 400;
    }
`