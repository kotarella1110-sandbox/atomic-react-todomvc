import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Title = styled.h1``;

const Header = styled.header``;

const Main = styled.main``;

const TodoTemplate = ({ title, header, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Header>{header}</Header>
    <Main>{children}</Main>
  </Wrapper>
);

TodoTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default TodoTemplate;
