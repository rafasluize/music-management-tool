import Card from '../Card';
import React, { FC } from 'react';
import { useTopArtists } from '../../services/artists';
import { IDataTopArtists } from '../../services/artists/types';

import * as Styled from './styles';
import { Skeleton } from 'components/Skeleton/styled';

const TopArtists: FC = () => {
  const { data: topArtists, isFetched, isFetching } = useTopArtists();

  return (
    <Card title="Top 5" sideHeader="Highest rate">
      {isFetched && (
        <Styled.Wrapper>
          {topArtists?.data.map((item: IDataTopArtists) => (
            <Styled.Item key={item.name}>
              <span>{item.name}</span>

              <span>{item.rate}</span>
            </Styled.Item>
          ))}
        </Styled.Wrapper>
      )}

      {isFetching && <Skeleton height="374px" />}
    </Card>
  );
};

export default TopArtists;
