import React from 'react';
import { shallow } from 'enzyme';
import { TodoItem, Button, TodoText } from 'components';

const setup = editing => {
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

  if (editing) {
    wrapper.setState({ editing });
  }

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

  it('Toggle の onChange で completeTodo が呼ばれること', () => {
    const {
      props: { completeTodo },
      wrapper,
    } = setup();
    wrapper.find('Toggle').simulate('change');
    expect(completeTodo).toHaveBeenCalledTimes(1);
    expect(completeTodo).toHaveBeenCalledWith(0);
  });

  it('DestroyButton の onClick で deleteTodo が呼ばれること', () => {
    const {
      props: { deleteTodo },
      wrapper,
    } = setup();
    const DestroyButton = wrapper.dive().find('DestroyButton');
    DestroyButton.simulate('click');
    expect(deleteTodo).toHaveBeenCalledTimes(1);
    expect(deleteTodo).toHaveBeenCalledWith(0);
  });

  it('Label の onDoubleClick で state.editing が true になること', () => {
    const { wrapper } = setup();
    const Label = wrapper.dive().find('Label');
    Label.simulate('doubleClick');
    expect(wrapper.state('editing')).toBe(true);
  });

  it('state.editing=true の時 StyledTodoText がレンダリングされていること', () => {
    const { wrapper } = setup(true);
    const StyledTodoText = wrapper.dive().find('StyledTodoText');
    expect(wrapper.prop('editing')).toBe(true);
    expect(StyledTodoText.dive().type()).toBe(TodoText);
    expect(StyledTodoText.dive().prop('text')).toBe('foo');
  });

  it('state.editing=true の時 StyledTodoText の onSave で editTodo が呼ばれること', () => {
    const {
      props: { editTodo },
      wrapper,
    } = setup(true);
    const StyledTodoText = wrapper.dive().find('StyledTodoText');
    StyledTodoText.props().onSave('bar');
    expect(editTodo).toHaveBeenCalledTimes(1);
    expect(editTodo).toHaveBeenCalledWith(0, 'bar');
  });
});
