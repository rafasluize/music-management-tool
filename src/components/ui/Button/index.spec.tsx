import React from 'react';
import { render } from 'test-utils/render';
import { Button } from './styles';

describe('button', () => {
  it('neutral', () => {
    const { container } = render(<Button variant="neutral">text</Button>);

    // eslint-disable-next-line testing-library/no-node-access
    const wrapper = container.firstElementChild;

    expect(wrapper).toMatchSnapshot();
  });

  it('brand', () => {
    const { container } = render(<Button variant="brand">text</Button>);

    // eslint-disable-next-line testing-library/no-node-access
    const wrapper = container.firstElementChild;

    expect(wrapper).toMatchSnapshot();
  });
});
