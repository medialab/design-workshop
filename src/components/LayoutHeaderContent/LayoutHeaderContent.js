import React from 'react';

export default ({
    children,
    className = '',
    style = {}
}) => {
    return (
      <header style={style} className={`layout-header-content ${className}`}>
        {children}
      </header>
    );
};
