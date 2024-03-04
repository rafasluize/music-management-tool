import styled from 'styled-components';

const Wrapper = styled.header`
  padding: ${({ theme }) => theme.spacing.km5} ${({ theme }) => theme.spacing.km8};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.brand.default};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.background.brand.default} 0%,
    ${({ theme }) => theme.color.background.secondary.default} 91%
  );

  h1 {
    color: ${({ theme }) => theme.color.text.neutral.inverted};
    font-size: ${({ theme }) => theme.font.size.m6};
  }
`;

const User = styled.div<{ letter: string }>`
  margin-left: auto;
  color: ${({ theme }) => theme.color.text.neutral.inverted};
  font-size: ${({ theme }) => theme.font.size.m4};

  &::after {
    content: '${({ letter }) => letter}';
    background-color: ${({ theme }) => theme.color.background.neutral.default};
    color: ${({ theme }) => theme.color.text.neutral.strong};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    padding: ${({ theme }) => theme.spacing.km3};
    margin-left: ${({ theme }) => theme.spacing.km3};
    border-radius: ${({ theme }) => theme.border.radius.circle};
    width: 40px;
    height: 40px;
  }
`;

export { Wrapper, User };
