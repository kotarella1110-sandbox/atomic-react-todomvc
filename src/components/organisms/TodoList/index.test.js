import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from 'components';

const setup = () => {
  const props = {};

  const wrapper = shallow(<TodoList {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('TodoList', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('ul');
  });
});
