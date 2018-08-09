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

  it('TodoItem がレンダリングされていること', () => {
    const {
      props: { todos },
      wrapper,
    } = setup();
    expect(wrapper.dive().children().length).toBe(2);
    wrapper
      .dive()
      .children()
      .forEach((TodoItem, index) => {
        expect(Number(TodoItem.key())).toBe(todos[index].id);
        expect(TodoItem.prop('todo')).toBe(todos[index]);
      });
  });
});
