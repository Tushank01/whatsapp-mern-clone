import React from 'react'
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import './App.css'

function App() {
  
  return (
      <div className='container'>
        <Sidebar />
        <Chat name={""} />
      </div>
  );
}

export default App;
