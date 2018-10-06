import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";

class Accordian extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isOpen: PropTypes.bool,
    triggerClick: PropTypes.func,
    accordianIndex: PropTypes.number,
    triggerContent: PropTypes.element
  };

  state = {
    isExpanded: this.props.isOpen
  };

  toggleIconRotation = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
    if (this.props.triggerClick)
      this.props.triggerClick(this.props.accordianIndex);
  };

  render() {
    const { children, triggerContent, isOpen } = this.props;

    const expandIcon = (
      <div className="accordian">
        <div className="panel-heading">
          <h2 className="panel-title">
            {triggerContent && triggerContent}
            <span className="down_icon">
              <div
                style={
                  this.state.isExpanded
                    ? { transform: "rotate(180deg)", color: "#b7312c" }
                    : { transform: "rotate(0deg)", color: "#dddddd" }
                }
                className={`chevron-wrapper expandCaret ${isOpen}`}
              >
                <i className="fa fa-chevron-circle-down" />
              </div>
            </span>
          </h2>
        </div>
      </div>
    );

    return (
      <Collapsible
        open={isOpen}
        trigger={expandIcon}
        onOpening={this.toggleIconRotation}
        onClosing={this.toggleIconRotation}
      >
        <br />
        {children}
      </Collapsible>
    );
  }
}

export default Accordian;
