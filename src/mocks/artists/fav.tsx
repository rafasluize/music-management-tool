import { HttpResponse, http } from 'msw';

const allPosts = new Map();

const data = {
  data: [
    {
      id: 1212,
      name: 'David Bowie',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 5454,

      name: 'Coldplay',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 4484,

      name: 'Queen',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    // {
    //   name: 'Radiohead',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'The Rolling Stones',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'The Beatles',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Muse',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'The Cure',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Daft Punk',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'The Weeknd',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Red Hot Chili Peppers',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Arctic Monkeys',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Blur',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Nirvana',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Ed Sheeran',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Pink Floyd',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Sia',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'U2',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Depeche Mode',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Michael Jackson',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Adele',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Bob Dylan',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'The Strokes',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'R.E.M.',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Calvin Harris',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Tame Impala',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'The Killers',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    // {
    //   name: 'Lana Del Rey',
    //   rating: Math.floor(Math.random() * 10) + 1,
    //   image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    // },
    {
      id: 78787,

      name: 'Led Zeppelin',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 877,

      name: 'Foo Fighters',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 7774,

      name: 'Imagine Dragons',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 212121,

      name: 'Rihanna',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 2323,

      name: 'Oasis',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 43434,

      name: 'Arcade Fire',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 555,

      name: 'Gorillaz',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 876543,

      name: 'The Black Keys',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 123445,

      name: 'Fleetwood Mac',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 321,

      name: 'The xx',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },

    {
      id: 765432,

      name: 'The White Stripes',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
    {
      id: 34567,

      name: 'Metallica',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },

    {
      id: 2345,

      name: 'New Order',
      rating: Math.floor(Math.random() * 10) + 1,
      image: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
    },
  ],
};

const favArtists = [
  http.get(`http://localhost/fav`, () => HttpResponse.json(data)),

  http.delete('http://localhost/fav/:id', ({ params }) => {
    // All request path params are provided in the "params"
    // argument of the response resolver.
    const { id } = params;

    // Let's attempt to grab the post by its ID.
    const deletedPost = allPosts.get(id);

    // Respond with a "404 Not Found" response if the given
    // post ID does not exist.
    if (!deletedPost) {
      return new HttpResponse(null, { status: 404 });
    }

    // Delete the post from the "allPosts" map.
    allPosts.delete(id);

    // Respond with a "200 OK" response and the deleted post.
    return HttpResponse.json(deletedPost);
  }),
];

export { favArtists };
