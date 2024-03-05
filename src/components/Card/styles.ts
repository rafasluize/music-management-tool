import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.background.neutral.default};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  box-shadow: ${({ theme }) => theme.elevation.ton5};
`;

const Header = styled.div`
  border-bottom: ${({ theme }) => theme.border.width.thinner} solid
    ${({ theme }) => theme.color.background.neutral.strong};
  padding: ${({ theme }) => theme.spacing.km4};
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.color.text.secondary.default};
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.m6};

  div {
    font-weight: 700;
    font-size: ${({ theme }) => theme.font.size.m2};
    color: ${({ theme }) => theme.color.text.neutral.strong};
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.km4};
`;

export { Wrapper, Header, Content };
