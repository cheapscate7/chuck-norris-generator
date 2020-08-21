import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/**
FONTS
 */
    
/**
STYLES
 */
    :root {
      font-size: 12pt;
      font-family: 'Roboto Slab', serif;
      @media (max-width: 425px) {
          font-size: 10pt;
        }
    
      
    }
    ::selection {
      ${({ theme }) => css`
          background: ${theme.colors.highlight_1_contrast};
      `};
    }
    
    body {
        border: 0;
        margin: 0;
        transition: background-color 0.2s ease-in-out;
        ${({ theme }) => css`
            background-color: ${theme.colors.background};
            color: ${theme.colors.foreground};
        `};
    }
    
    h1 {
      margin: 0;
      ${({ theme }) => css`
          font-size: ${theme.fontSizes.large};
      `};
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    button {
      border: 0;
      background-color: inherit;
      cursor: pointer;
    }
`;

export default GlobalStyle;
