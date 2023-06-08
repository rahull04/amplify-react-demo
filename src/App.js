import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';


function App() {
  useEffect(() => {
    const fetchApi = async () => {
      const data = await axios.get('https://ivku4mpd30.execute-api.ap-south-1.amazonaws.com/dev/todo/id');
      console.log('data', data);
    }
    fetchApi();
  }, [])
  return (
    <header className="App-header">
        <h2>My App Content</h2>
    </header>
  );
}

export default App;
