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
    width: 100vw;
    overflow-x: hidden;
  }
  
`;

export default GlobalStyles;
