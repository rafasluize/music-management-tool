import { HttpResponse, http } from 'msw';

const favArtists = [
  http.get(`http://localhost/fav`, () =>
    HttpResponse.json({
      data: [
        {
          name: 'David Bowie',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Coldplay',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Queen',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Radiohead',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The Rolling Stones',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The Beatles',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Muse',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The Cure',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Daft Punk',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The Weeknd',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Red Hot Chili Peppers',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Arctic Monkeys',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Blur',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Nirvana',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Ed Sheeran',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Pink Floyd',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Sia',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'U2',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Depeche Mode',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Michael Jackson',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Adele',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Bob Dylan',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The Strokes',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'R.E.M.',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Calvin Harris',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Tame Impala',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The Killers',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Lana Del Rey',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Led Zeppelin',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Foo Fighters',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Imagine Dragons',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Rihanna',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Oasis',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Arcade Fire',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Gorillaz',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The Black Keys',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Fleetwood Mac',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The xx',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Florence + the Machine',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'David Guetta',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The Clash',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The Smiths',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'The White Stripes',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Metallica',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Pixies',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Major Lazer',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Franz Ferdinand',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Beck',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'Elvis Presley',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
        {
          name: 'New Order',
          rate: Math.floor(Math.random() * 10) + 1,
          image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        },
      ],
    }),
  ),
];

export { favArtists };
