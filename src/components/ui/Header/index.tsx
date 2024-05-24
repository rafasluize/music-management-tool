import React, { FC } from 'react';

import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <Styled.Wrapper>
      <h1 onClick={() => navigate('/')}>Music Management Tools</h1>

      <Styled.User letter={'RL'}>Rafaela Luiz</Styled.User>
    </Styled.Wrapper>
  );
};

export default Header;
