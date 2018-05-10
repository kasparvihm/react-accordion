import React, { Component, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './accordion-item';
import './styles.css';

class Accordion extends Component {
  constructor(props) {
    super(props);

    const state = { isOpen: {} };
    const { children } = props;

    Children.toArray(children).forEach((child) => {
      if (child) {
        state.isOpen[child.props.name] = !!child.props.defaultOpen;
      }
    });

    this.state = state;
  }

  toggleItem = name => {
    const { isOpen } = this.state;
    const { allowMultiple } = this.props;

    if (!allowMultiple && !isOpen[name]) {
      Object.keys(isOpen).forEach((element) => {
        isOpen[element] = false;
      });
      this.setState({ isOpen });
    }

    this.setState({ isOpen: { ...isOpen, [name]: !isOpen[name] } });
  }

  render() {
    const { isOpen } = this.state;
    const children = Children.toArray(this.props.children);
    console.log(this.props);

    return (
      <div className="accordion">
        {children.map((child) => {
          if (child.type === AccordionItem) {
            return cloneElement(child, {
              expanded: isOpen[child.props.name],
              toggleItem: this.toggleItem,
              isAnimated: this.props.isAnimated,
            });
          }
          return child;
        })}
      </div>
    );
  }
}

Accordion.defaultProps = {
  allowMultiple: false,
  isAnimated: false,
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  allowMultiple: PropTypes.bool,
  isAnimated: PropTypes.bool,

};
export default Accordion;
