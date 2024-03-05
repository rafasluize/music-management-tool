import React, { FC } from 'react';

import * as Styled from './styles';
import { ICard } from './types';

const Card: FC<ICard> = ({ children, title, sideHeader }) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        {title}

        {sideHeader && <div>{sideHeader}</div>}
      </Styled.Header>

      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  );
};

export default Card;
