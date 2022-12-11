import React, {useEffect} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {useTelegram} from "./shared/hooks/useTelegram";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
