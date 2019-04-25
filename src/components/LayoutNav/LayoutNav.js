import React from 'react';
import cs from 'classnames';

export default ({
    children,
    className = '',
    style = {},
}) => {
    const computedClass = cs('layout-nav', className);
    return (
      <div style={style} className={computedClass}>
        {children}
      </div>
    );
};
