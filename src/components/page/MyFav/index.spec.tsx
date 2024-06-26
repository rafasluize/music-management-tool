/* eslint-disable testing-library/prefer-screen-queries */

import React from 'react';
import { queryRender } from 'test-utils/render';
import { waitForElementToBeRemoved } from '@testing-library/react';
import Myfav from '.';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Myfav', () => {
  it('show list', async () => {
    const { getByTestId } = queryRender(<Myfav />);

    expect(getByTestId('thead')).toBeInTheDocument();

    const skeleton = getByTestId('skeleton');
    await waitForElementToBeRemoved(skeleton);

    // const artist = await screen.findAllByTestId('Led Zeppelin');

    // expect(artist).toBeInTheDocument();
    //   await waitFor(()=> {

    //     debug()
    //   })
  });
});
