import React, { Component } from 'react';
import '../App.css';
import Toolbar from './toolbar'
import MessageList from './messageList'

class Message extends Component {
  render() {
    return (

<div className={`row message ${this.props.read ? 'read' : 'unread'}
                     message ${this.props.selected ? 'selected' : 'unselected'}
                     message ${this.props.label}


                `}>

  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox"/>
      </div>
      <div className="col-xs-2">

        <i className={`star fa ${this.props.starred ? "fa-star" : "fa-star-o"}`}></i>

      </div>
    </div>
  </div>
  <div className="col-xs-11">

    {this.props.labels.map(label => {
      return (
        <span className="label label-warning">{label}</span>
      )}
    )}
    <a href="#">
    {this.props.subject}
    </a>
  </div>
</div>
)
//above closes return
}
//above closes render
}
//above closes component extend
export default Message;
