import React from 'react';
import { shallow } from 'enzyme';
import { Header, TodoText } from 'components';

const setup = () => {
  const props = {
    addTodo: jest.fn(),
    completeAll: jest.fn(),
  };

  const wrapper = shallow(<Header {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Header', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const ToggleAll = wrapper.dive().find('ToggleAll');
    expect(ToggleAll.dive().type()).toBe('input');
    expect(ToggleAll.dive().prop('type')).toBe('checkbox');
    expect(ToggleAll.dive().prop('id')).toBe('toggle-all');

    const ToggleAllLabel = wrapper.dive().find('ToggleAllLabel');
    expect(ToggleAllLabel.dive().type()).toBe('label');
    expect(ToggleAllLabel.dive().prop('htmlFor')).toBe('toggle-all');

    const StyledTodoText = wrapper.dive().find('StyledTodoText');
    expect(StyledTodoText.dive().type()).toBe(TodoText);
    expect(StyledTodoText.dive().prop('editing')).toBe(false);
    expect(StyledTodoText.dive().prop('placeholder')).toBe(
      'What needs to be done?'
    );
  });

  it('ToggleAll の onChange で completeAll が呼ばれること', () => {
    const {
      props: { completeAll },
      wrapper,
    } = setup();
    const ToggleAll = wrapper.dive().find('ToggleAll');
    ToggleAll.simulate('change');
    expect(completeAll).toHaveBeenCalledTimes(1);
  });

  it('text が空でない時 StyledTodoText の onSave で addTodo が呼ばれること', () => {
    const {
      props: { addTodo },
      wrapper,
    } = setup();
    const StyledTodoText = wrapper.dive().find('StyledTodoText');
    StyledTodoText.props().onSave('');
    expect(addTodo).toHaveBeenCalledTimes(0);
    StyledTodoText.props().onSave('foo');
    expect(addTodo).toHaveBeenCalledTimes(1);
  });
});
