import React from 'react';
const io = require('socket.io-client');

// class component
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let input;
    return (
      <div>
        React is working
      </div>
    );
  }
};


/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!
==========================================================
*/
// /* At top of file: */
// import { connect } from 'react-redux';
//
// /* At bottom of file: */
// const mapStateToProps = (state) => ({
//    someStateProp: /* state.something typically */
// });
//
// const mapDispatchToProps = (dispatch) => ({
//    someDispProp: /* some function that dispatches an action */
// });
//
// App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
