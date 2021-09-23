import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --text-title: #363F5F;
        --text-body: #969cb3;
        --shape: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;  // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%;  // 14px
        }
    }

    body {
        background: var(--shape);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, p, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, a, strong {
        font-weight: 600
    }

    a {
        cursor: pointer;
    }

    button {
        opacity: 0.6;
        cursor: not-allowed;
    }
`