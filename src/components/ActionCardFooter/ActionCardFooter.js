import React from 'react';

const ActionCardFooter = ({
    className = '',
    style = {},
    children
}) => (
  <div style={style} className={`action-card-footer ${className}`}>
    {children}
  </div>
);
export default ActionCardFooter;
