import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    *, button, input {
        font-family: Roboto, sans-serif;
    }
    :root {
        --color-primary: #272A32;
        --color-secondary: #40444E;
        --color-tertiary: #000000;
        --color-inputs: #1C1C1F;
        --color-border: #A9A9A9;   
        --color-letters-primary: #D2D2D2;
        --color-letters-secondary: #F9F9F9;
        --color-button-reference: #FFCB06;
        --color-letters-reference: #024EA3;
        --color-scrollbar: #40444E;
    }

`;