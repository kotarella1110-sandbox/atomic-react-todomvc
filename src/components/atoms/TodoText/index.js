/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const InputText = styled.input.attrs({
  type: 'text',
})`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${({ editing }) =>
    !editing &&
    css`
      padding: 16px 16px 16px 60px;
      border: 0;
      background: rgba(0, 0, 0, 0.003);
      box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    `};
`;

class TodoText extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    onSave: PropTypes.func,
  };

  static defaultProps = {
    text: '',
    placeholder: '',
    editing: false,
    onSave: text => text,
  };

  state = {
    // eslint-disable-next-line react/destructuring-assignment
    text: this.props.text,
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleSubmit = e => {
    const { text } = this.state;
    const { editing, onSave } = this.props;

    if (e.keyCode === 13) {
      onSave(text);
      if (!editing) {
        this.setState({ text: '' });
      }
    }
  };

  handleBlur = () => {
    const { text } = this.state;
    const { editing, onSave } = this.props;

    if (editing) {
      onSave(text);
    }
  };

  render() {
    return (
      <InputText
        value={this.state.text}
        autoFocus
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        onBlur={this.handleBlur}
        {...this.props}
      />
    );
  }
}

export default TodoText;
