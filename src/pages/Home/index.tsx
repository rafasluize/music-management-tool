import React from 'react';

import * as Styled from './styles';
import Card from '../../components/Card';
import TopArtists from '../../components/TopArtists';
import QuickAdd from 'components/QuickAdd';

const Home: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Card title="My artists">aaaaaaaaaaaaaaaaaaaaaaaaaaa</Card>
      <TopArtists />
      <QuickAdd />
    </Styled.Wrapper>
  );
};

export default Home;
