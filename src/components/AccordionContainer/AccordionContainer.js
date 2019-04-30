import React from 'react';

const AccordionContainer = ({
    className = '',
    style = {},
    children
}) => (
  <div style={style} className={`accordion-container ${className}}`}>
    {children}
  </div>
);
export default AccordionContainer;
