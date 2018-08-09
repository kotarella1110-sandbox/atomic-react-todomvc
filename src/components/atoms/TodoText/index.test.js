import React from 'react';
import { shallow } from 'enzyme';
import { TodoText } from 'components';

const setup = propOverrides => {
  const props = Object.assign(
    {
      handleEnter: jest.fn(),
      text: 'foo',
      placeholder: 'foo',
      editing: false,
      newTodo: false,
    },
    propOverrides
  );

  const wrapper = shallow(<TodoText {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('TodoText', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('input');
    expect(wrapper.dive().prop('type')).toBe('text');
    expect(wrapper.dive().prop('placeholder')).toBe('foo');
    expect(wrapper.dive().prop('value')).toBe('foo');
  });

  it('onChange で state.text が更新されること', () => {
    const { wrapper } = setup();
    wrapper.simulate('change', { target: { value: 'bar' } });
    expect(wrapper.state('text')).toBe('bar');
  });

  it('Enter を押すと入力されたテキストを引数として Props で渡されたコールバックを実行すること', () => {
    const {
      wrapper,
      props: { handleEnter },
    } = setup();
    wrapper.find('InputText').simulate('keyDown', { keyCode: 13 });
    expect(handleEnter).toHaveBeenCalledTimes(1);
    expect(handleEnter).toHaveBeenCalledWith('foo');
  });
});
