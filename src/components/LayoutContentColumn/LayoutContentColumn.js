import React from 'react';
import cs from 'classnames';

export default ({
    children,
    className = '',
    style = {},
    isConfig,
    isWorkspace,
    isNav
}) => {
    const computedClass = cs('layout-content-column', className, {
        'is-config': isConfig,
        'is-workspace': isWorkspace,
        'is-nav': isNav
    });
    return (
      <div style={style} className={computedClass}>
        {children}
      </div>
    );
};
