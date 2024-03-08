/* eslint-disable testing-library/prefer-screen-queries */

import React from 'react';
import { render } from 'test-utils/render';
import QuickAdd from '.';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('QuickAdd', () => {
  it('error validade field empty', async () => {
    const { getByText, getByRole } = render(<QuickAdd />);

    const button = getByRole('button');

    userEvent.click(button);

    await waitFor(() => {
      expect(getByText('Please input the artist name')).toBeInTheDocument();
    });
  });
});
