import React from 'react';

const ButtonsRow = ({
    className = '',
    style = {},
    children
}) => (
  <div style={style} className={`buttons-row ${className}`}>
    {children}
  </div>
);
export default ButtonsRow;
