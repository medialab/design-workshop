import React from 'react';
import cs from 'classnames';

export default ({
    children,
    className = '',
    style = {},
    isPrimary,
    isSecondary
}) => {
    const computedClass = cs('layout-footer-column', className, {
        'is-primary': isPrimary,
        'is-secondary': isSecondary,
    });
    return (
      <div style={style} className={computedClass}>
        {children}
      </div>
    );
};
