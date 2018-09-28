import React, { Component } from 'react';
import '../App.css';
import Message from './message'
import Toolbar from './toolbar'

class MessageList extends Component {
  render() {
    return (

      <div>
        {this.props.messages.map(message =>

          <Message
            key={message.id}
            id={message.id}
            subject={message.subject}
            read={message.read}
            starred={message.starred}
            selected={message.selected}
            labels={message.labels}
          />

        )}
      </div>

)
//above closes return
}
//above closes render
}
//above closes component extend

export default MessageList;
