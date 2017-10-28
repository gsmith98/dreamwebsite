import React from 'react';
import Name from './Name';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{flex: 1}}>
        {this.props.users.map((user, i) => <Name key={user._id} person={user} selectUser={() => this.props.selectUser(i)}/>)}
      </div>
    )
  }
}

export default Sidebar;
