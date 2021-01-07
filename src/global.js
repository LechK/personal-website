import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
  body {    
    background: ${({ theme }) => theme.lightGrey};
    color: ${({ theme }) => theme.darkGrey};    
    text-rendering: optimizeLegibility;
    font-family: 'Josefin Sans', sans-serif;
  }
`;
