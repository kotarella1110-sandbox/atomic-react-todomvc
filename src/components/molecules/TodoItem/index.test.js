import React from 'react';
import { shallow } from 'enzyme';
import { TodoItem, Button } from 'components';

const setup = () => {
  const props = {
    todo: {
      id: 0,
      text: 'foo',
      completed: false,
    },
    editTodo: jest.fn(),
    deleteTodo: jest.fn(),
    completeTodo: jest.fn(),
  };

  const wrapper = shallow(<TodoItem {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('TodoItem', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    const View = wrapper.find('View');
    const Toggle = wrapper.find('Toggle');
    const Label = wrapper.find('Label');
    const DestroyButton = wrapper.find('DestroyButton');
    expect(wrapper.dive().type()).toBe('li');
    expect(View.dive().type()).toBe('div');
    expect(Toggle.dive().prop('type')).toBe('checkbox');
    expect(Toggle.dive().prop('checked')).toBe(false);
    expect(Label.dive().type()).toBe('label');
    expect(Label.dive().text()).toBe('foo');
    expect(DestroyButton.dive().type()).toBe(Button);
  });
});
