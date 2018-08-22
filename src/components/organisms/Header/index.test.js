import React from 'react';
import { shallow } from 'enzyme';
import { Header, TodoText } from 'components';

const setup = () => {
  const wrapper = shallow(<Header />);

  return {
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
});
