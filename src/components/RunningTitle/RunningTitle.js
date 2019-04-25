import React from 'react';

export default ({
    children,
    className = '',
    style = {}
}) => {
    return (
      <h2 style={style} className={`running-title ${className}`}>
        {children}
      </h2>
    );
};
