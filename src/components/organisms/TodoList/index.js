import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TodoItem } from 'components';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TodoList = ({ todos, ...props }) => (
  <Wrapper>
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} {...props} />)}
  </Wrapper>
);

TodoList.propTypes = {
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

export default TodoList;
