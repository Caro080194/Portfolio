import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle `
:root {
    /* Colors */
    --primary-color: #0C0E20;
    --secondary-color: #ffffff;
  
    /* Typography */
    --font-family: 'Alef', sans-serif;
    --heading-font-size: 5rem;
  
  /* Global Styles */
  body {
    font-family: var(--font-family);
    color: var(--primary-color);
    background-color: var(--secondary-color);
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h4, h5, h6 {
    font-family: var(--font-family);
    font-weight: bold;
    font-size: var(--heading-font-size);
  }

  h3 {
    font-family: var(--font-family);
    font-weight: bold;
    font-size: 3em;
    margin: 0;
  }
  
`;

export default GlobalStyles;
