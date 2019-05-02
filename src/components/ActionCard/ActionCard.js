import React from 'react';

const ActionCard = ({
    className = '',
    style = {},
    children
}) => (
  <div style={style} className={`action-card ${className}`}>
    {children}
  </div>
);
export default ActionCard;
