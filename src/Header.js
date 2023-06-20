import React from 'react';
import PropTypes from 'prop-types';

export const Header = () => {
  return (
    <div>Header</div>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}
