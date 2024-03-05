import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  padding: ${({ theme }) => theme.spacing.km5} ${({ theme }) => theme.spacing.km8};
  gap: ${({ theme }) => theme.spacing.km5};

  > section:first-child {
    grid-area: artists;
    height: 100%;
  }
  > section:nth-child(2) {
    grid-area: top;
  }

  > section:nth-child(3) {
    grid-area: add;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg.minWidth}) {
    grid-template-areas:
      'artists top'
      'artists add';
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md.maxWidth}) {
    grid-template-areas:
      'artists'
      'top'
      'add';
  }
`;

export { Wrapper };
