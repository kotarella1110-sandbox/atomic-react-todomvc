import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Title = styled.h1``;

const TodoTemplate = ({ title }) => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
);

TodoTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoTemplate;
