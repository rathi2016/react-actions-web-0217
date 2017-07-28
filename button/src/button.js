import React, { Component} from 'react';

class Button extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // initially our `ToggleButton` is
      enabled: false
    };
  }
  handleClick () {
    this.setState({
      // negate enabled
      enabled: !this.state.enabled
    });
  }
  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.enabled ? 'Enabled' : 'Disabled'}
      </button>
    );
  }
}
 export default Button;
