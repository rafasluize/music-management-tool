import React from 'react';
import { render } from 'test-utils/render';
import Footer from '.';

describe('footer', () => {
  it('snapshot', () => {
    const { container } = render(<Footer />);

    // eslint-disable-next-line testing-library/no-node-access
    const wrapper = container.firstElementChild;

    expect(wrapper).toMatchSnapshot();
  });
});
