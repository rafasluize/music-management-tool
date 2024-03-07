import React, { FC } from 'react';
import { IInputSearch } from './types';
import * as Styled from './styles';
import { MdSearch } from 'react-icons/md';

const InputSearch: FC<IInputSearch> = ({ label, name, type, onChange }) => {
  return (
    <Styled.Wrapper>
      {label && <label htmlFor={name}>{label}</label>}

      <div>
        <input id={name} type={type} name={name} onChange={onChange} />
        <MdSearch color="#babec9" />
      </div>
    </Styled.Wrapper>
  );
};

export default InputSearch;
