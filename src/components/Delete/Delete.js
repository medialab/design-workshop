import React from 'react';

const Delete = ({
    className = '',
    style = {},
    onClick,
}) => (
  <span onClick={onClick} style={style} className={`delete-el ${className}}`}>
      ×
  </span>
);
export default Delete;
