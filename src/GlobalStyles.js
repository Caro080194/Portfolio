import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle `
:root {
    /* Colors */
    --primary-color: #0C0E20;
    --secondary-color: #ffffff;
  
    /* Typography */
    --font-family: 'Alef', sans-serif;
    --heading-font-size: 2rem;
    --paragraph-font-size: 1rem;
  
  /* Global Styles */
  body {
    font-family: var(--font-family);
    font-size: var(--paragraph-font-size);
    color: var(--text-color);
    background-color: var(--background-color);
    margin: 0;
    padding: 0;
    position: relative;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family);
    font-weight: bold;
    margin-top: var(--spacing-large);
    margin-bottom: var(--spacing-medium);
  }
  
`;

export default GlobalStyles;
