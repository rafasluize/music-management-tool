import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.km4};
`;

const Thead = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.color.background.neutral.weak};
  div {
    width: 30%;
    padding: ${({ theme }) => theme.spacing.km3};
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    &:not(:last-child) {
      border-right: ${({ theme }) => theme.border.width.thinner} solid ${({ theme }) => theme.color.text.neutral.weak};
    }

    &:first-child {
      width: 40%;
    }
  }
`;

const Content = styled.div`
  scrollbar-width: thin;
  max-height: 550px;
  display: block;
  overflow-y: auto;
`;

const Item = styled.div`
  display: flex;

  div {
    font-size: ${({ theme }) => theme.font.size.m2};
    padding: ${({ theme }) => theme.spacing.km4};
    color: ${({ theme }) => theme.color.text.neutral.strong};

    width: 30%;

    &:first-child {
      width: 40%;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.background.secondary.weak};

    div {
      color: ${({ theme }) => theme.color.text.secondary.default};
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

export { Wrapper, Item, Thead, Content, Buttons };
