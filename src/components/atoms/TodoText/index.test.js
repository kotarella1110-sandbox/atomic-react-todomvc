import React from 'react';
import { shallow } from 'enzyme';
import TodoText from '.';

describe('TodoText', () => {
  const wrap = (props = {}) => shallow(<TodoText {...props} />);

  it('コンポーネントがレンダリングされていること', () => {
    const wrapper = wrap();
    expect(wrapper.exists()).toBe(true);
  });

  it('InputText コンポーネントがレンダリングされていること', () => {
    const wrapper = wrap();
    expect(wrapper.find('InputText').exists()).toBe(true);
  });
});
