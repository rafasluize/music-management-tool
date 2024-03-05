import { setupServer } from 'msw/node';
import { testHandlers } from './handlers';

const server = setupServer(...testHandlers);

export { server };
