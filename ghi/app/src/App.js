import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import HatsList from './HatsList';
import ShoesList from './ShoesList';

import HatForm from './HatForm';
import LocationsList from './LocationList';
import LocationForm from './LocationForm';


function App(props) {
  // if (props.shoes === undefined && props.hats === undefined) {
  //   return null;
  // }
  const [shoes, setShoes] = useState([])
  const [hats, setHats] = useState([])
  const [locations, setLocations] = useState([])

  const getShoes = async () => {
    const shoeUrl = 'http://localhost:8080/api/bins'
    const shoeResponse = await fetch(shoeUrl);

    if (shoeResponse.ok) {
      const data = await shoeResponse.json();
      const shoes = data.shoes
      setShoes(shoes)
    }
  }
  const getHats = async () => {
    const hatUrl = 'http://localhost:8090/api/locations'
    const hatResponse = await fetch(hatUrl);

    if (hatResponse.ok) {
      const data = await hatResponse.json();
      const hats = data.hats
      setHats(hats)
    }
  }
  const getLocations = async () => {
    const locationUrl = 'http://localhost:8100/api/locations'
    const locationResponse = await fetch(locationUrl);

    if (locationResponse.ok) {
      const data = await locationResponse.json();
      const locations = data.locations
      setLocations(locations)
    }
  }

  useEffect( () => {getShoes(); getHats(); getLocations();}, [setShoes, setHats, setLocations] )

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="shoes" element={<ShoesList shoes={shoes} />} />
          <Route path="hats" element={<HatsList hats={hats} />}/>
          <Route path="/hats/new" element={<HatForm />}></Route>
          <Route path="locations" element={<LocationsList locations={locations} />}/>
          <Route path="/locations/new" element={<LocationForm />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
