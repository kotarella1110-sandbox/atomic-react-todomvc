import React from 'react';
import { shallow } from 'enzyme';
import { TodoTemplate } from 'components';

const setup = () => {
  const wrapper = shallow(<TodoTemplate />);

  return {
    wrapper,
  };
};

describe('TodoTemplate', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
  });
});
