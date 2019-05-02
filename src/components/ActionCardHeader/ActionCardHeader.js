import React from 'react';

const ActionCardHeader = ({
    className = '',
    style = {},
    children
}) => (
  <div style={style} className={`action-card-header ${className}`}>
    {children}
  </div>
);
export default ActionCardHeader;
