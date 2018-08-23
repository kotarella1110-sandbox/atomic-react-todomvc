import React from 'react';
import { shallow } from 'enzyme';
import { TodoPage, TodoTemplate } from 'components';

const setup = () => {
  const wrapper = shallow(<TodoPage />);

  return {
    wrapper,
  };
};

describe('TodoPage', () => {
  it('コンポーネントがレンダリングされているか', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe(TodoTemplate);
  });
});
