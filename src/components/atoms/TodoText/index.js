/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputText = styled.input.attrs({
  type: 'text',
})`
  padding: 16px 16px 16px 60px;
  border: 0;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`;

class TodoText extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    handleEnter: PropTypes.func,
  };

  state = {
    text: this.props.text,
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.props.handleEnter(this.state.text);
    }
  };

  render() {
    return (
      <InputText
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        {...this.props}
      />
    );
  }
}

TodoText.defaultProps = {
  text: '',
  handleEnter: text => text,
};

export default TodoText;
