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

  it('入力したテキストが State に保持されていること', () => {
    const wrapper = wrap({ text: 'Test!' });
    wrapper.simulate('change', { target: { value: 'Test! Input!' } });
    expect(wrapper.state('text')).toBe('Test! Input!');
  });

  it('Enter を押すと入力されたテキストを引数として Props で渡されたコールバックを実行すること', () => {
    const handleEnter = jest.fn();
    const wrapper = wrap({ text: 'Test!', handleEnter });
    wrapper.find('InputText').simulate('keyDown', { keyCode: 13 });
    expect(handleEnter).toHaveBeenCalledTimes(1);
    expect(handleEnter).toHaveBeenCalledWith('Test!');
  });
});
