import styled from 'styled-components';

const Wrapper = styled.header`
  padding: ${({ theme }) => theme.spacing.km4};

  text-align: center;
  background-color: ${({ theme }) => theme.color.background.neutral.strong};
`;

export { Wrapper };
