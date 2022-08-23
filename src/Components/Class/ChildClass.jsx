import React, { Component } from 'react';

export default class ChildClass extends Component {
  render() {
    return (
      <div className='component'>
        <h1>Child Class</h1>
        <input
          type='text'
<<<<<<< HEAD
          value={this.props.text}
          onChange={(e) => this.props.updateText(e.target.value)}
=======
          value={this.props.name}
          onChange={(e) => this.props.setName(e.target.value)}
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
        />
      </div>
    );
  }
}
