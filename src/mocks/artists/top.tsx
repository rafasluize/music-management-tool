import { HttpResponse, http } from 'msw';

const topArtists = [
  http.get(`http://localhost/topArtists`, () =>
    HttpResponse.json({
      data: [
        {
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',

          rating: '10',
          name: 'Led Zeppelin',
        },
        {
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',

          rating: '9',
          name: 'Aerosmith',
        },

        {
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',

          rating: '8',
          name: 'Metallica',
        },
        {
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',

          rating: '8',
          name: 'Pink Floyd',
        },
        {
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
          rating: '7',
          name: 'Rage Against the Machine',
        },

        {
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',

          rating: '7',
          name: 'Def Leppard',
        },

        {
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',

          rating: '7',
          name: 'David Bowie',
        },
      ],
    }),
  ),
];

export { topArtists };
