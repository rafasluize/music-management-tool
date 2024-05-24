import React from 'react';
import { render } from 'test-utils/render';
import Header from '.';
import { BrowserRouter } from 'react-router-dom';

describe('header', () => {
  it('snapshot', () => {
    const { container } = render(<BrowserRouter><Header /></BrowserRouter>);

    // eslint-disable-next-line testing-library/no-node-access
    const wrapper = container.firstElementChild;

    expect(wrapper).toMatchSnapshot();
  });
});
