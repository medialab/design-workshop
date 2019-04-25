import React from 'react';

export default ({
    children,
    className = '',
    style = {}
}) => {
    return (
      <div style={style} className={`layout-footer ${className}`}>
        {children}
      </div>
    );
};
