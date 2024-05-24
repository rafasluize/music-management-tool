import React, { FC, useState } from 'react';

import * as Styled from './styles';
import { Skeleton } from 'components/ui/Skeleton/styled';
import Card from 'components/ui/Card';
import { Button } from 'components/ui/Button/styles';

import InputSearch from 'components/ui/InputSearch';
import { useFavArtists } from 'services/artists';
import { IDataTopArtists } from 'services/artists/types';
import { FaSort } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';
import { useDeleteArtistById } from 'services/artists/delete';

const Myfav: FC = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(false);
  const [field, setField] = useState<'name' | 'rating'>('name');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  const { data: favArtists, isFetched, isFetching } = useFavArtists();

  const navigate = useNavigate();

  const { mutate } = useDeleteArtistById();


  const handleSort = (a: IDataTopArtists, b: IDataTopArtists) => {
    if (order === 'desc') {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    }

    if (order === 'asc') {
      return a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0;
    }

    return 0;
  };

  const applySort = (type: 'name' | 'rating') => {
    setField(type);
    setSort(true);

    setTimeout(() => {
      setOrder(order === 'desc' ? 'asc' : 'desc');
    }, 100);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
  };
  const handleAdd = () => {
    navigate('create');
  };

  const handleDelete = (id: number) => {
    mutate(id);
  };

  return (
    <Card
      title="My artists"
      sideHeader={
        <Button variant="brand" onClick={handleAdd}>
          +
        </Button>
      }
    >
      <InputSearch name="search" label="Search" type="input" onChange={handleSearch} />

      <Styled.Wrapper>
        <Styled.Thead data-testid="thead">
          <div onClick={() => applySort('name')}>
            Name
            <FaSort size="0.8rem" color="#636b7e" />
          </div>
          <div onClick={() => applySort('rating')}>
            Rating
            <FaSort size="0.8rem" color="#636b7e" />
          </div>
          <div>Actions</div>
        </Styled.Thead>
        <Styled.Content>
          {isFetched &&
            favArtists?.data
              .filter((str) => str.name.toLowerCase().includes(search))
              .sort((a, b) => {
                if (sort) return handleSort(a, b);
                return 0;
              })
              .map((item: IDataTopArtists) => (
                <Styled.Item key={item.name}>
                  <div>{item.name}</div>

                  <div>{item.rating}</div>
                  <Styled.Buttons>
                    <Button variant="neutral" onClick={() => navigate(`edit/${item.id}`)}>
                      <MdOutlineEdit />
                    </Button>

                    <Button variant="neutral" onClick={() => handleDelete(item.id)}>
                      <MdOutlineDelete />
                    </Button>
                  </Styled.Buttons>
                </Styled.Item>
              ))}

          {isFetching && <Skeleton height="500px" margin={'20px'} data-testid="skeleton" />}
        </Styled.Content>
      </Styled.Wrapper>
    </Card>
  );
};

export default Myfav;
