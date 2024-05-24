import styled from 'styled-components';

const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.km5} ${({ theme }) => theme.spacing.km8};

  background-color: ${({ theme }) => theme.color.background.neutral.default};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  box-shadow: ${({ theme }) => theme.elevation.ton5};
`;

export { Wrapper };
