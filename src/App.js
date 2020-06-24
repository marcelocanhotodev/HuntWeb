import React from 'react';
import Header from './components/Header/index';
import Routes from './routes';
import "./styles.css";
import Main from './pages/main';

function App() {
  return (
    <div className="App">
       <Header/>
       <Routes/>
    </div>
  );
}

export default App;
