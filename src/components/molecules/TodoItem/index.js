import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Button, TodoText } from 'components';

const StyledTodoText = styled(TodoText)``;

const View = styled.div``;

const Label = styled.label`
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
`;

const Wrapper = styled.li`
  list-style: none;
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: 0;
  }

  ${({ editing }) =>
    editing &&
    css`
      border-bottom: 0;
      padding: 0;

      &:last-child {
        margin-bottom: -1px;
      }

      ${StyledTodoText} {
        width: 506px;
        padding: 12px 16px;
        margin: 0 0 0 43px;
      }
    `};

  ${({ completed }) =>
    completed &&
    css`
      ${Label} {
        color: #d9d9d9;
        text-decoration: line-through;
      }
    `};
`;

const Toggle = styled.input.attrs({
  type: 'checkbox',
})`
  text-align: center;
  width: 40px;

  /* auto, since non-WebKit browsers doesn't support input styling */
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: 0;
  appearance: none;
  opacity: 0;

  /*
    Hack to remove background from Mobile Safari.
    Can't use it globally since it destroys checkboxes in Firefox
  */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    background: none;
    height: 40px;
  }

  & + ${Label} {
    /*
      Firefox requires # to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
      IE and Edge requires *everything* to be escaped to render, so we do that instead of just the # - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
    */
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
  }

  &:checked + ${Label} {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
  }
`;

const DestroyButton = styled(Button)`
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;

  &:hover {
    color: #af5b5e;
  }

  &:after {
    content: '×';
  }

  ${Wrapper}:hover & {
    display: block;
  }

  &:focus {
    outline: 0;
  }
`;

const TodoItem = ({ todo, completeTodo }) => (
  <Wrapper completed={todo.completed}>
    <View>
      <Toggle checked={todo.completed} onChange={() => completeTodo(todo.id)} />
      <Label>{todo.text}</Label>
      <DestroyButton />
    </View>
  </Wrapper>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
