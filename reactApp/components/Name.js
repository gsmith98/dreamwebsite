import React from 'react';

class Name extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={() => this.props.selectUser()}>{this.props.person.username}</div>
    )
  }
}

export default Name;
