import { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
  //declaring state with input initialized to empty string
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(
    [
      { username: 'rahul', text: 'hi everyone!' },
      { username: 'chetan', text: 'Wassup!' }
    ]);
  const [username, setUsername] = useState('');

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
    setMessages([...messages, { username: username, text: input }]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger Clone! Powered by Firebase..</h1>
      <h2>Hello, {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map(message => {
          return <Message
            username={username}
            message={message}
          />
        })
      }

    </div>
  );
}

export default App;