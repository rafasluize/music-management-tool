import 'whatwg-fetch'

import '@testing-library/jest-dom';

import 'jest-styled-components';

import { server } from 'mocks/server';

 
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())