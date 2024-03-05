import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background.neutral.strong};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  padding: ${({ theme }) => theme.spacing.km4};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.km2};
`;

const Item = styled.div`
  background-color: ${({ theme }) => theme.color.background.neutral.default};
  border-radius: ${({ theme }) => theme.border.radius.small};
  padding: ${({ theme }) => theme.spacing.km3};
  display: flex;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.color.text.secondary.default};
    font-weight: 700;
    font-size: ${({ theme }) => theme.font.size.m4};
  }

  &:hover {
    outline: ${({ theme }) => theme.border.width.thinner} solid ${({ theme }) => theme.color.text.brand.default};
  }
`;

export { Wrapper, Item };
