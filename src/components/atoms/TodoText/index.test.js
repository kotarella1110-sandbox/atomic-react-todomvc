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

  it('Props で渡したテキストが State に保持されていること', () => {
    const wrapper = wrap({ text: 'Test!' });
    expect(wrapper.state('text')).toBe('Test!');
  });
});
