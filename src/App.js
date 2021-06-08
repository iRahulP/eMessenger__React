import { useState } from 'react';
import './App.css';

function App() {
  //declaring state with input initialized to empty string
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (e) => {
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger Clone</h1>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send Message</button>

      {
        messages.map(message => {
          return <p>{message}</p>
        })
      }

    </div>
  );
}

export default App;