import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const Header = ({ firstName, title }) => (
  <div className="Header">
    <div className="Header__wrapper">
      <div className="Header__title">
        {title}
      </div>
      <div className="Header__user">
        {`Hello, ${firstName}!`}
      </div>
    </div>
  </div>
);

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
