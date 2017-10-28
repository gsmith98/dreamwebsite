import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{fles: 2}}>
        <div>Name: {this.props.user.username}</div>
        <div>Hobbies: {this.props.user.hobbies}</div>
        <div>Bio: {this.props.user.bio}</div>
      </div>
    )
  }
}

export default Profile;
