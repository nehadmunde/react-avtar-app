import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import './style.css';
import Navbar1 from './Components/Navbar1';
import Home from './Components/Home';
import Likes from './Components/Likes';

function App() {
  return (
    <main>
      <Likes />
      {/* <Routes>
        <Switch>
          <Navbar1 />
          <Route path="/Home" element={<Home />} />
          <Route path="/Likes" element={<Likes />} />
        </Switch>
      </Routes> */}
    </main>
  );
}

export default App;
