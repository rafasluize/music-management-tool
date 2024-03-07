import React, { FC } from 'react';

import * as Styled from './styles';

const Footer: FC = () => {
  const date = new Date().getFullYear();
  return <Styled.Wrapper>{date} - All Rights Reserved</Styled.Wrapper>;
};

export default Footer;
