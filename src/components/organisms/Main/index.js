import React from 'react';
import styled from 'styled-components';
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

export default Main;
