import React from 'react';
import { render } from 'test-utils/render';
import InputSearch from '.';

describe('input search', () => {
  it('snapshot', () => {
    const { container } = render(<InputSearch label="search" name="search" onChange={() => null} type="text" />);

    // eslint-disable-next-line testing-library/no-node-access
    const wrapper = container.firstElementChild;

    expect(wrapper).toMatchSnapshot();
  });
});
