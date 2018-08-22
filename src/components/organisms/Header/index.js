import React from 'react';
import styled from 'styled-components';
import { TodoText } from 'components';

const StyledTodoText = styled(TodoText)``;

const Wrapper = styled.div`
  ${StyledTodoText}::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  ${StyledTodoText}::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  ${StyledTodoText}::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
`;

const ToggleAllLabel = styled.label.attrs({
  htmlFor: 'toggle-all',
})``;

const ToggleAll = styled.input.attrs({
  type: 'checkbox',
  id: 'toggle-all',
})`
  text-align: center;
  border: 0;
  opacity: 0;
  position: absolute;

  /*
    Hack to remove background from Mobile Safari.
    Can't use it globally since it destroys checkboxes in Firefox
  */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    background: none;
  }

  & + ${ToggleAllLabel} {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: 14px;
    left: -13px;
    transform: rotate(90deg);
    z-index: 3;
  }

  & + ${ToggleAllLabel}:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  &:checked + ${ToggleAllLabel}:before {
    color: #737373;
  }
`;

const Header = () => (
  <Wrapper>
    <ToggleAll />
    <ToggleAllLabel />
    <StyledTodoText placeholder="What needs to be done?" />
  </Wrapper>
);

export default Header;
