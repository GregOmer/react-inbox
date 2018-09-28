import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/toolbar'
import MessageList from './components/messageList'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
 }
}

async componentDidMount() {
 const response = await fetch(`http://localhost:8082/api/messages`)
 const json = await response.json()
 this.setState({
   messages: json,

 })
}

  render() {
    return (
      <div className="container">
        <Toolbar

        />
        <MessageList
          messages = { this.state.messages }
        />
      </div>
    );
  }
}

export default App;
