import { favArtists, saveArtist, topArtists } from './artists';

const handlers = [...topArtists, ...favArtists, ...saveArtist];
const testHandlers = [...handlers];

export { testHandlers, handlers };
