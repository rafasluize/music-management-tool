import React, { FC } from 'react';

import * as Styled from './styles';

const Header: FC = () => (
  <Styled.Wrapper>
    <h1>Music Management Tools</h1>

    <Styled.User letter={'RL'}>Rafaela Luiz</Styled.User>
  </Styled.Wrapper>
);

export default Header;
