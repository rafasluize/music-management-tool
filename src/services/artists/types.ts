export interface IDataTopArtists {
  id: number;
  image: string;
  rate: string;
  name: string;
}

export interface TopArtistsProps {
  data: IDataTopArtists[];
}
