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
    expect(wrapper.dive().type()).toBe('div');

    const TodoCount = wrapper.dive().find('TodoCount');
    const TodoCountNumber = TodoCount.dive().find('TodoCountNumber');
    expect(TodoCount.dive().type()).toBe('span');
    expect(TodoCountNumber.dive().type()).toBe('strong');
  });
});
