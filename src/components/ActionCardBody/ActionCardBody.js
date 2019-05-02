import React from 'react';

const ActionCardBody = ({
    className = '',
    style = {},
    children
}) => (
  <div style={style} className={`action-card-body ${className}`}>
    {children}
  </div>
);
export default ActionCardBody;
