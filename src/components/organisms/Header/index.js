import React from 'react';
import styled from 'styled-components';
import { TodoText } from 'components';

const Wrapper = styled.div``;

const ToggleAll = styled.input.attrs({
  type: 'checkbox',
  id: 'toggle-all',
})``;

const ToggleAllLabel = styled.label.attrs({
  htmlFor: 'toggle-all',
})``;

const StyledTodoText = styled(TodoText)``;

const Header = () => (
  <Wrapper>
    <ToggleAll />
    <ToggleAllLabel />
    <StyledTodoText placeholder="What needs to be done?" />
  </Wrapper>
);

export default Header;
