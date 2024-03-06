import styled from 'styled-components';

const Button = styled.button<{ variant: 'neutral' | 'brand' }>`

  
    background:  ${({ theme, variant }) =>
      variant === 'brand'
        ? `
    linear-gradient(
        90deg,
        ${theme.color.background.brand.default} 0%,
        ${theme.color.background.secondary.default} 91%
      );
    `
        : `${theme.color.background.neutral.inverted};`}

    
    
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    border: 0; 
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        ${({ theme, variant }) =>
          variant === 'brand'
            ? `
            background:  linear-gradient(
            90deg,
            ${theme.color.background.secondary.default} 0%,
            ${theme.color.background.brand.default} 91%
          );
        `
            : `background:  ${theme.color.background.neutral.strong};
            color: ${theme.color.text.neutral.strong}`}
          
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `;

export { Button };
