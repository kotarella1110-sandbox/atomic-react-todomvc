import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from 'components';

const setup = () => {
  const wrapper = shallow(<Footer />);

  return {
    wrapper,
  };
};

describe('Footer', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const TodoCount = wrapper.dive().find('TodoCount');
    expect(TodoCount.dive().type()).toBe('span');

    const TodoCountNumber = TodoCount.dive().find('TodoCountNumber');
    expect(TodoCountNumber.dive().type()).toBe('strong');

    const todoFilters = ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'];
    const filterTitles = ['All', 'Active', 'Completed'];
    const Filters = wrapper.dive().find('Filters');
    expect(Filters.dive().type()).toBe('ul');
    expect(Filters.dive().children().length).toBe(3);
    Filters.dive()
      .children()
      .forEach((FilterItem, index) => {
        const FilterItemLink = FilterItem.dive().find('FilterItemLink');
        expect(FilterItem.key()).toBe(todoFilters[index]);
        expect(FilterItem.dive().type()).toBe('li');
        expect(FilterItemLink.dive().type()).toBe('a');
        expect(FilterItemLink.dive().prop('children')).toBe(
          filterTitles[index]
        );
      });
  });
});
