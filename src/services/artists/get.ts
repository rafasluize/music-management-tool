import { useQuery } from '@tanstack/react-query';
import { TopArtistsProps } from './types';
import apiService from '../../config/service';

const getTopArtists = (): Promise<TopArtistsProps> => apiService.get(`topArtists`).then((res) => res.data);

const useTopArtists = () =>
  useQuery({
    queryKey: ['topArtists'],
    queryFn: getTopArtists,
  });

export { useTopArtists };
