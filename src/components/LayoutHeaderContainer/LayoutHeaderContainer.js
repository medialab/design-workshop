import React from 'react';

export default ({
    children,
    className = '',
    style = {}
}) => {
    return (
      <header style={style} className={`layout-header-container ${className}`}>
        {children}
      </header>
    );
};
