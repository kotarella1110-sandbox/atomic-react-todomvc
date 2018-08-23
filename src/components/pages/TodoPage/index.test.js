import React from 'react';
import { shallow } from 'enzyme';
import { TodoPage } from 'components';

const setup = () => {
  const wrapper = shallow(<TodoPage />);

  return {
    wrapper,
  };
};

describe('TodoPage', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
  });
});
