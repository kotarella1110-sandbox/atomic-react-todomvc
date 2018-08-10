import React from 'react';
import { shallow } from 'enzyme';
import { Main } from 'components';

const setup = () => {
  const wrapper = shallow(<Main />);

  return {
    wrapper,
  };
};

describe('Main', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
  });
});
