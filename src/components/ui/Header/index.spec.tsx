import React from 'react';
import { render } from 'test-utils/render';
import Header from '.';

describe('header', () => {
  it('snapshot', () => {
    const { container } = render(<Header />);

    // eslint-disable-next-line testing-library/no-node-access
    const wrapper = container.firstElementChild;

    expect(wrapper).toMatchSnapshot();
  });
});
