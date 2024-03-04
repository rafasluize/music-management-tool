import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x:hidden;
    background-color: ${({ theme }) => theme.color.background.neutral.weak};
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family.body};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.base};
    
  }

  a {
    text-decoration: none
  }
`;

export default GlobalStyle;
