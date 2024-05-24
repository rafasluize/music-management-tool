import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import apiService from '../../config/service';

interface PayloadSaveArtist {
  artistName: string;
  video: string;
  rating: number;
  image: string;
}

const saveArtist = async (payload: PayloadSaveArtist) => {
  const response = await apiService.post(`artist`, {
    data: payload,
  });

  return response.data;
};

const useSaveArtist = (options?: UseMutationOptions<Promise<unknown>, Error, PayloadSaveArtist>) =>
  useMutation({
    mutationFn: (payload: PayloadSaveArtist) => saveArtist(payload),
  });

export { useSaveArtist };
