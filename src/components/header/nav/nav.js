import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import PropTypes from 'prop-types';

const Nav = ({ portfolio }) => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href={portfolio}>GitHub</a>
      </li>
    </ul>
  </Container>
);

Nav.propTypes = {
  portfolio: PropTypes.string.isRequired,
};

export default Nav;
