import React, { useState , useEffect } from 'react';
import './App.css';
import Message from './Message';
import { FormControl, Input, InputLabel, Button } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  //declaring state with input initialized to empty string
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snap => {
      setMessages(snap.docs.map(doc => 
          ({id: doc.id, message: doc.data()}
        )))
    });
  }, [])

  useEffect(() => {
    //if blank inside [], this code runs once when the app component loads.
    setUsername(prompt('Please enter your Name'));
  }, []) //condition

  //useEffect ~ variable in terms of React
  //useEffect ~ run code on a specific condition in React
  // console.log(input);
  console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();
    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setMessages([...messages, { username: username, message: input }]);
    setInput('');
  }

  return (
    <div className="App">
      <img alt="" src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"/>
      <h1>A Messenger Clone, powered by Firebase!</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      <FlipMove>
      {
        messages.map(({id, message}) => {
          return <Message
            key={id}
            username={username}
            message={message}
          />
        })
      }
      </FlipMove>
    </div>
  );
}

export default App;