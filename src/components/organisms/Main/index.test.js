import React from 'react';
import { shallow } from 'enzyme';
import { Main, TodoList } from 'components';

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
        completed: false,
      },
    ],
    completeTodo: jest.fn(),
    deleteTodo: jest.fn(),
    editTodo: jest.fn(),
  };

  const wrapper = shallow(<Main {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Main', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('div');
    expect(
      wrapper
        .dive()
        .children()
        .type()
    ).toBe(TodoList);
  });
});
