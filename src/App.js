import { useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';

function App() {
  //declaring state with input initialized to empty string
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger Clone</h1>

      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
      </form>

      {
        messages.map(message => {
          return <p>{message}</p>
        })
      }

    </div>
  );
}

export default App;