import React, {Component} from 'react';

export default class AccordionElement extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isCollapsed: true
      };
  }

  render() {
      const {
        title,
        subtitle,
        children,
        className = '',
        style = {},
        isSelected
      } = this.props;
      const {isCollapsed} = this.state;
      return (
        <div style={style} className={`accordion-element ${className} ${isSelected ? 'is-selected' : ''} ${isCollapsed ? 'is-collapsed' : ''}`} >
          <div className="accordion-element-header" onClick={() => this.setState({isCollapsed: !isCollapsed})}>
            <span className="title-container">{title} </span>
            <span><span className="subtitle-container">{subtitle}</span></span>
            <span>+</span>
          </div>
          <div className="accordion-element-content-container">
            {children}
          </div>
        </div>
      );
  }
}
