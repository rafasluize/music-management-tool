import { ErrorMessage } from 'formik';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.km4};

  > div {
    outline: ${({ theme }) => theme.border.width.thinner} solid ${({ theme }) => theme.color.text.neutral.weak};
    display: flex;
    align-items: center;

    > input {
      height: 30px;
      border: none;
      width: calc(100% - 16px);

      &:focus {
        outline: none;
      }
    }
  }

  > label {
    display: block;
    font-size: ${({ theme }) => theme.font.size.m3};
    margin-bottom: ${({ theme }) => theme.spacing.km1};
  }
`;

const ErrorMessageCustom = styled(ErrorMessage)`
  color: ${({ theme }) => theme.color.text.danger.default};
  font-size: ${({ theme }) => theme.font.size.m3};
`;

export { Wrapper, ErrorMessageCustom };
