import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { Header } from './Header';


function App() {
  useEffect(() => {
    const fetchApi = async () => {
      const data = await axios.get('https://ivku4mpd30.execute-api.ap-south-1.amazonaws.com/dev/todo/1');
      console.log('data', data);
    }
    fetchApi();
  }, [])
  return (
    <header className="App-header">
      <Header title='Hii' />
        <h2>My App Content</h2>
    </header>
  );
}

export default App;
