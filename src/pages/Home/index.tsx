import React from 'react';

import * as Styled from './styles';
import Card from '../../components/Card';
import TopArtists from '../../components/TopArtists';

const Home: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Card title="My artists">aaaaaaaaaaaaaaaaaaaaaaaaaaa</Card>
      <TopArtists />
      <Card title="Quick add">aaaaaaaaaaaaaaaaaaaaaaaa</Card>
    </Styled.Wrapper>
  );
};

export default Home;
