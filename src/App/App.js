import React from 'react';
import './App.css';
import Signup from '../components/auth/Signup'
import Header from '../components/common/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='App-main'>
         <Signup/>
      </main>
    </div>
  );
}

export default App;

