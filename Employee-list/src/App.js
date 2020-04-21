import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/employee-display/TodoApp'
import './App.css';
import './bootstrap.css';

//root component
class App extends Component {


  render() {

    return (
      <div className="App"> {
        <TodoApp />
      }
      </div>

    )

  }

}









export default App;
