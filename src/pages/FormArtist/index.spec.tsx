import React from 'react';
import { queryRender } from 'test-utils/render';
import { screen, waitFor } from '@testing-library/react';
import FormArtist from '.';
import userEvent from '@testing-library/user-event';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Form', () => {
  it('render form', async () => {
    queryRender(<FormArtist />);

    const button = screen.getByText('Add');

    expect(button).toBeInTheDocument();

    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Please input the video valid')).toBeInTheDocument();
    });
  });
});
