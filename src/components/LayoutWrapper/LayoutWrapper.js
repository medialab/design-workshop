import React from 'react';
import cs from 'classnames';

export default ({
    children,
    className = '',
    style = {},
    hasConfig,
    hasNav
}) => {
    const computedClass = cs('layout-wrapper', className, {
        'has-config': hasConfig,
        'has-nav': hasNav
    });
    return (
      <div style={style} className={computedClass}>
        {children}
      </div>
    );
};
