import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from 'components';

const setup = () => {
  const wrapper = shallow(<Footer />);

  return {
    wrapper,
  };
};

describe('Footer', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
  });
});
