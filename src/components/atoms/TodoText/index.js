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

  render() {
    return (
      <InputText
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        {...this.props}
      />
    );
  }
}

export default TodoText;
