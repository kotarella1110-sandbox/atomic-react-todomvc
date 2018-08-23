import React from 'react';
import { shallow } from 'enzyme';
import { TodoTemplate } from 'components';

const setup = () => {
  const props = {
    title: 'Title',
    header: 'Header',
    children: 'Main',
    footer: 'Footer',
  };

  const wrapper = shallow(<TodoTemplate {...props} />);

  return { props, wrapper };
};

describe('TodoTemplate', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const Title = wrapper.dive().find('Title');
    expect(Title.dive().type()).toBe('h1');
    expect(Title.dive().prop('children')).toBe('Title');
  });
});
