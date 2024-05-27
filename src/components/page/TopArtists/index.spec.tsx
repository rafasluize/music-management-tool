import React from 'react';
import { queryRender } from 'test-utils/render';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import TopArtists from '.';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('TopArtists', () => {
  it('show list', async () => {
    queryRender(<TopArtists />);

    const skeleton = screen.getByTestId('skeleton');
    await waitForElementToBeRemoved(skeleton);

    // const artist = await screen.findAllByTestId('Led Zeppelin');

    // expect(artist).toBeInTheDocument();
  });
});
