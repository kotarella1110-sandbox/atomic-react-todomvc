import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TodoList } from 'components';

const Wrapper = styled.div`
  position: relative;
  border-top: 1px solid #e6e6e6;
`;

const Main = props => (
  <Wrapper>
    <TodoList {...props} />
  </Wrapper>
);

Main.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default Main;
