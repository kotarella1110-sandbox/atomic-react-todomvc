import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'components';

const Wrapper = styled.div``;

const TodoCount = styled.span``;

const TodoCountNumber = styled.strong``;

const Filters = styled.ul``;

const FilterItem = styled.li``;

const FilterItemLink = styled.a``;

const ClearCompletedButton = styled(Button)``;

const FILTER_TITLES = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed',
};

const Footer = ({
  visibilityFilter,
  activeCount,
  setVisibilityFilter,
  completedCount,
}) => {
  const itemWord = activeCount === 1 ? 'item' : 'items';
  return (
    <Wrapper>
      <TodoCount>
        <TodoCountNumber>{activeCount || 'No'}</TodoCountNumber> {itemWord} left
      </TodoCount>
      <Filters>
        {Object.keys(FILTER_TITLES).map(filter => (
          <FilterItem key={filter}>
            <FilterItemLink
              selected={visibilityFilter === filter}
              onClick={() => setVisibilityFilter(filter)}>
              {FILTER_TITLES[filter]}
            </FilterItemLink>
          </FilterItem>
        ))}
      </Filters>
      {!!completedCount && (
        <ClearCompletedButton>Clear completed</ClearCompletedButton>
      )}
    </Wrapper>
  );
};

Footer.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
};

export default Footer;