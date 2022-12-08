import React, {useEffect, useState} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";

// @ts-ignore
const tg = window.Telegram.WebApp;

function App() {
  const [wishes, setWishes] = useState<string>('');
  const [gamer, setGamer] = useState<string>('');
  useEffect(() => {
    tg.ready();
  }, [])

  const setWishesState = (wishes: string) => {
    setWishes(wishes);
  }

  const setGamerState = (name: string) => {
    setGamer(name);
  }

  return (
    <div className="App">
      <Layout setWishesState={setWishesState} setGamerState={setGamerState} />
    </div>
  );
}

export default App;
