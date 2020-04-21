import React from "react";
import { Segment, Comment} from 'semantic-ui-react';
import firebase from '../../firebase';

import MessagesHeader from './MessagesHeader';
import MessagesForm from './MessagesForm';
import Message from './Message';

class Messages extends React.Component {
  state={
    messagesRef: firebase.database().ref('messages'),
    messages:[],
    messagesLoading:true,
    channel: this.props.currentChannel,
    user: this.props.currentUser
  }

  componentDidMount(){
    const {channel,user} = this.state;

    if(channel&&user){
      this.addListener(channel.id)
    }
  }

  addListener = channelId => {
    this.addMessageListener(channelId)
  }

  addMessageListener = channelId =>{
    let loadedMessage=[];
    this.state.messagesRef.child(channelId).on('child_added',snap=>{
      loadedMessage.push(snap.val());
      this.setState({
        messages:loadedMessage,
        messagesLoading:false
      })
    })
  }

  displayMessages = messages => {return (
    messages.length > 0 && messages.map(message=>(
      <Message 
        key={messages.timestamp}
        message={message}
        user={this.state.user}

      />
    ))
  )}

  render() {
    const {messagesRef, messages, channel, user} = this.state;
    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="messages">
            {this.displayMessages(messages)}
          </Comment.Group>
        </Segment>

        <MessagesForm messagesRef={messagesRef} currentChannel={channel}
          currentUser={user}
        />
      </React.Fragment>
    );
  }
}

export default Messages;
