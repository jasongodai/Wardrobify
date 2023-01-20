import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatsList from './HatsList';
import ShoesList from './ShoesList';

function App(props) {
  if (props.shoes === undefined && props.hats === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="shoes" element={<ShoesList shoes={props.shoes} />} />
          <Route path="hats" element={<HatsList hats={props.hats} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
