import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const TodoCount = styled.span``;

const TodoCountNumber = styled.strong``;

const Filters = styled.ul``;

const FilterItem = styled.li``;

const FilterItemLink = styled.a``;

const FILTER_TITLES = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed',
};

const Footer = () => (
  <Wrapper>
    <TodoCount>
      <TodoCountNumber />
    </TodoCount>
    <Filters>
      {Object.keys(FILTER_TITLES).map(filter => (
        <FilterItem key={filter}>
          <FilterItemLink>{FILTER_TITLES[filter]}</FilterItemLink>.
        </FilterItem>
      ))}
    </Filters>
  </Wrapper>
);

export default Footer;
