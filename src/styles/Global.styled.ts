import {createGlobalStyle} from 'styled-components';
import {theme} from "./Theme";


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    section, div, header, footer {
        background-color: ${theme.colors.accent};
    }


    p, h1, h2, h3, small, a, label {
        color: ${theme.colors.textBg};
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; /* 150% */
        letter-spacing: 0.64px;
    }

    section {
        padding: 130px 0;

        @media ${theme.media.mobile} {
            padding: 100px 0;
        }
    }
`