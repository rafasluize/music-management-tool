import { useQuery } from '@tanstack/react-query';
import { TopArtistsProps } from './types';
import apiService from '../../config/service';

const getTopArtists = (): Promise<TopArtistsProps> => apiService.get(`topArtists`).then((res) => res.data);
const getFavArtists = (): Promise<TopArtistsProps> => apiService.get(`fav`).then((res) => res.data);

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

export { useTopArtists, useFavArtists };
