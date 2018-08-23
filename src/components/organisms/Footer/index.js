import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'components';

const Wrapper = styled.div`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;

  @media (max-width: 430px) {
    height: 50px;
  }

  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;

const TodoCount = styled.span`
  float: left;
  text-align: left;
`;

const TodoCountNumber = styled.strong`
  font-weight: 300;
`;

const Filters = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;

  @media (max-width: 430px) {
    bottom: 10px;
  }
`;

const FilterItem = styled.li`
  display: inline;
`;

const FilterItemLink = styled.a`
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;

  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  ${({ selected }) =>
    selected &&
    css`
      border-color: rgba(175, 47, 47, 0.2);
    `};
`;

const ClearCompletedButton = styled(Button)`
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const FILTER_TITLES = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed',
};

const Footer = ({
  visibilityFilter,
  completedCount,
  activeCount,
  setVisibilityFilter,
  onClearCompleted,
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
              onClick={() => setVisibilityFilter(filter)}
              selected={visibilityFilter === filter}>
              {FILTER_TITLES[filter]}
            </FilterItemLink>
          </FilterItem>
        ))}
      </Filters>
      {!!completedCount && (
        <ClearCompletedButton onClick={onClearCompleted}>
          Clear completed
        </ClearCompletedButton>
      )}
    </Wrapper>
  );
};

Footer.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
