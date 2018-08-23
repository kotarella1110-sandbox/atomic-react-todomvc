import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Title = styled.h1``;

const Header = styled.header``;

const Main = styled.main``;

const Footer = styled.footer``;

const TodoTemplate = ({ title, header, children, footer }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Header>{header}</Header>
    <Main>{children}</Main>
    <Footer>{footer}</Footer>
  </Wrapper>
);

TodoTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TodoTemplate;
