import React from 'react';
import { shallow } from 'enzyme';
import { TodoItem } from 'components';

const setup = () => {
  const props = {};

  const wrapper = shallow(<TodoItem {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('TodoItem', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('li');
  });
});
