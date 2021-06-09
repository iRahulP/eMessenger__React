import { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';

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
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button variant="outlined" type='submit' onClick={sendMessage}>Send Message</Button>
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