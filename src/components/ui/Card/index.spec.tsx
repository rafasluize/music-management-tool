import React from 'react';
import { render } from 'test-utils/render';
import Card from '.';

describe('card', () => {
  it('snapshot', () => {
    const { container } = render(<Card title="title here">text</Card>);

    // eslint-disable-next-line testing-library/no-node-access
    const wrapper = container.firstElementChild;

    expect(wrapper).toMatchSnapshot();
  });

  it('title render', () => {
    const { getByText } = render(<Card title="title here">text</Card>);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText('title here');

    expect(title).toBeInTheDocument();
  });

  it('sideHeader render', () => {
    const { getByText } = render(
      <Card title="title here" sideHeader="text here">
        text
      </Card>,
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const title = getByText('text here');

    expect(title).toBeInTheDocument();
  });
});
