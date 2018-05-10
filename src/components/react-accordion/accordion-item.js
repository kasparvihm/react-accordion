import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionItem extends Component {
  componentDidMount() {
    this.setState(this.content && { elementHeight: this.content.scrollHeight });
  }

  render() {
    const {
      name,
      caption,
      children,
      toggleItem,
      expanded,
      isAnimated
    } = this.props;

    const className = 'accordion__item';
    const openClassName = `${className}--is-open`;
    const contentClassName = 'accordion__content';
    const inner = 'inner';

    const contentStyle = {
      height: expanded ? this.state && this.state.elementHeight : 0,
    };

    return (
      <div className={expanded ? `${className} ${openClassName}` : `${className}`}>
        <span onClick={() => toggleItem(name)}>{caption}</span>
        {isAnimated
          ? <div ref={element => this.content = element} style={contentStyle} className={contentClassName}>
            <div className={inner}>{children}</div>
          </div>
          : expanded &&
          <div className={contentClassName}>
            <div className={inner}>{children}</div>
          </div>
        }
      </div>
    );
  }
}

export default AccordionItem;

AccordionItem.defaultProps = {
  toggleItem: () => { },
  expanded: false,
};

AccordionItem.propTypes = {
  name: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toggleItem: PropTypes.func,
  expanded: PropTypes.bool,
};
