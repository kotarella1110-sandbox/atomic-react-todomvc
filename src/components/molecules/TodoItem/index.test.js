import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '.';

describe('TodoItem', () => {
  const wrap = (props = {}) => shallow(<TodoItem {...props} />);

  it('コンポーネントがレンダリングされていること', () => {
    const wrapper = wrap();
    expect(wrapper.exists()).toBe(true);
  });
});
