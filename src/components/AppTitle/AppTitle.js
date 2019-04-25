import React from 'react';

export default ({
    children,
    className = '',
    style = {}
}) => {
    return (
      <h1 style={style} className={`app-title ${className}`}>
        {children}
      </h1>
    );
};
