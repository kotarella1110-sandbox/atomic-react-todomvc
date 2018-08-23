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

    const Header = wrapper.dive().find('Header');
    expect(Header.dive().type()).toBe('header');
    expect(Header.dive().prop('children')).toBe('Header');

    const Main = wrapper.dive().find('Main');
    expect(Main.dive().type()).toBe('main');
    expect(Main.dive().prop('children')).toBe('Main');

    const Footer = wrapper.dive().find('Footer');
    expect(Footer.dive().type()).toBe('footer');
    expect(Footer.dive().prop('children')).toBe('Footer');
  });
});
