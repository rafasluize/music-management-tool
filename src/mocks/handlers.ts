import { favArtists, topArtists } from './artists';

const handlers = [...topArtists, ...favArtists];
const testHandlers = [...handlers];

export { testHandlers, handlers };
