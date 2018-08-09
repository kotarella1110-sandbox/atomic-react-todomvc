import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from 'components';

const setup = () => {
  const props = {
    todos: [
      {
        id: 0,
        text: 'foo',
        completed: false,
      },
      {
        id: 1,
        text: 'bar',
        completed: true,
      },
    ],
    completeTodo: jest.fn(),
    deleteTodo: jest.fn(),
    editTodo: jest.fn(),
  };

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
