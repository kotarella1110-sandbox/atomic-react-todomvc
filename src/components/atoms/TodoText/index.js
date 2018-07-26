import React from 'react';
import styled from 'styled-components';

const InputText = styled.input.attrs({
  type: 'text',
})`
  padding: 16px 16px 16px 60px;
  border: 0;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`;

const TodoText = () => <InputText />;

export default TodoText;
