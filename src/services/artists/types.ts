export interface IDataTopArtists {
  id: number;
  image?: string;
  rating: string;
  name: string;
  video?: string;
}

export interface TopArtistsProps {
  data: IDataTopArtists[];
}
