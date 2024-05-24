import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { IDataTopArtists } from './types';
import apiService from '../../config/service';

interface PayloadDeleteArtist {
  id: number;
}

const deleteArtistsById = (id?: number): Promise<IDataTopArtists> =>
  apiService.delete(`fav/${id}`).then((res) => res.data);

const useDeleteArtistById = (options?: UseMutationOptions<Promise<unknown>, Error, PayloadDeleteArtist>) =>
  useMutation({
    mutationFn: (id: number) => deleteArtistsById(id),
  });

export { useDeleteArtistById };
