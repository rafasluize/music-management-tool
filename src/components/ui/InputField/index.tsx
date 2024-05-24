import React, { FC } from 'react';
import { IInput } from './types';
import * as Styled from './styles';
import { Field, useFormikContext } from 'formik';

const InputField: FC<IInput> = ({ label, name, type, value }) => {
  const { handleChange } = useFormikContext();

  return (
    <Styled.Wrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        id={name}
        type={type}
        name={name}
        onChange={handleChange(name)}
        data-testid={`test-${name}`}
        value={value}
      />

      <Styled.ErrorMessageCustom className="error" name={name} component="div" />
    </Styled.Wrapper>
  );
};

export default InputField;
