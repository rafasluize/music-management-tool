import { useQuery } from '@tanstack/react-query';
import { IDataTopArtists, TopArtistsProps } from './types';
import apiService from '../../config/service';

const getTopArtists = (): Promise<TopArtistsProps> => apiService.get(`topArtists`).then((res) => res.data);
const getFavArtists = (): Promise<TopArtistsProps> => apiService.get(`fav`).then((res) => {console.log('chamou'); return res.data});

const getFavArtistsById = (id?: number): Promise<IDataTopArtists> =>
  apiService.get(`fav`).then((res) => {
    if (id) {return res.data.data.filter((item: IDataTopArtists) => item.id === id)[0]}
    
    return {};
  });

const useTopArtists = () =>
  useQuery({
    queryKey: ['topArtists'],
    queryFn: getTopArtists,
  });

const useFavArtists = () =>
  useQuery({
    queryKey: ['fav'],
    queryFn: getFavArtists,
  });

const useFavArtistsById = (id: number | undefined) =>
  useQuery({
    queryKey: ['favById'],
    queryFn: () => getFavArtistsById(id),
  });

export { useTopArtists, useFavArtists, useFavArtistsById };
