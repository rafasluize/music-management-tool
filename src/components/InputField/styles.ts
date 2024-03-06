import { ErrorMessage } from 'formik';
import styled from 'styled-components';

const Wrapper = styled.div`
margin-bottom: ${({ theme }) => theme.spacing.km4};

   > label {
    display: block;
  font-size: ${({ theme }) => theme.font.size.m3};
  margin-bottom: ${({ theme }) => theme.spacing.km1};



   }

   > input {
    width: 100%;
  height: 30px;

  &:focus {
    outline: ${({ theme }) => theme.border.width.thinner} solid ${({ theme }) => theme.color.text.brand.default};

  }


s

   }
`;

const ErrorMessageCustom = styled(ErrorMessage)`
  color: ${({ theme }) => theme.color.text.danger.default};
  font-size: ${({ theme }) => theme.font.size.m3};
`;

export { Wrapper, ErrorMessageCustom };
