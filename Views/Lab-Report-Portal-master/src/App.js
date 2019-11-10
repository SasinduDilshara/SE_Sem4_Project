import React from 'react';

import './App.css';
import Landing from './components/auth/Landing';

function App() {
  return (
    <div className="App">
      <div style={{
        height: '100vh',
        backgroundImage: "url('https://c7.uihere.com/files/489/607/701/medical-background-vector.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>

        <Landing />
      </div>

    </div>
  );
}

export default App;
