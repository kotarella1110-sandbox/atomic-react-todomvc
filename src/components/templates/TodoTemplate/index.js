import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 100px;
  font-weight: 100;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
`;

const Wrapper = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

  ${Title} {
    position: absolute;
    top: -155px;
    width: 100%;
    text-align: center;
  }
`;

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
