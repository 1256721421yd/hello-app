import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React1111</h1>
        </div>
        <div >
          <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
        </div>
      </div>
      );
  }
}

export default App;
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
