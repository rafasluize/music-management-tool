import React from 'react';

import * as Styled from './styles';
import TopArtists from '../../components/page/TopArtists';
import QuickAdd from 'components/page/QuickAdd';
import Myfav from 'components/page/MyFav';

const Home: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Myfav />
      <TopArtists />
      <QuickAdd />
    </Styled.Wrapper>
  );
};

export default Home;
