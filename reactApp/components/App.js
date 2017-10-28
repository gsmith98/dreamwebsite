import React from 'react';
// const io = require('socket.io-client');
import Sidebar from './Sidebar';
import Profile from './Profile';

// class component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUser: null
    };
  }

  selectUser(index) {
    this.setState({selectedUser: index});
  }

  componentDidMount() {
    fetch('http://localhost:3000/getAllUsers')
    .then(resp => resp.json())
    .then(users => {
      this.setState({ users: users });
    })
    .catch(err => console.log(err));
  }


  render() {
    let input;
    return (
      <div style={{display: 'flex', flexDirection: "row"}}>
        <Sidebar selectUser={(index) => this.selectUser(index)} users={this.state.users} />
        {this.state.selectedUser !== null  ? <Profile user={this.state.users[this.state.selectedUser]} /> : "Pick a User!"}
      </div>
    );
  }
};


export default App;
