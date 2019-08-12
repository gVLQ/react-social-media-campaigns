import React, { Component } from "react";

import SlidingNavStyles from "./sliding-nav-styles";

class SlidingNav extends Component {
  constructor(props) {
    super(props);
    this.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    let left = props.children.map(o => this.width);
    if (left.length > 0) {
      left[0] = 0;
    }
    this.state = { page: 0, left: left };
  }

  move(direction) {
    const left = this.state.left.slice();
    let newPage = this.state.page;

    if (direction === 0) {
      // Go left
      if (newPage !== 0 ) {
        newPage = newPage - 1;
        left[newPage + 1] = this.width
        left[newPage] = 0;
      }

    } else if (direction === 1) {
      // Go right
      if (newPage+1 < left.length ) {
        newPage++
        left[newPage - 1] = -this.width;
        left[newPage] = 0;
      }
    }
    console.log(newPage);
    
    this.setState({ left: left, page: newPage });
  }

  render() {
    const pageElements = React.Children.map(this.props.children, (page, idx) =>
        React.cloneElement(page, { left: this.state.left[idx] })); 
    const buttonElements = React.Children.map(this.props.buttons, (button, idx) => {
        let newButton = React.cloneElement(button , { onClick: () => this.move(idx), ...button.props});
        return newButton;
    });
    return (
        <SlidingNavStyles>
            <h4 className="steps">Step {this.state.page+1} of {this.state.left.length}</h4>
            <div>
                {buttonElements}
            </div>
            <div>
                {pageElements}
            </div>
        </SlidingNavStyles>
    );
}
}

export default SlidingNav;
