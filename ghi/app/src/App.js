import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatsList from './HatsList';
import HatForm from './HatForm';
import ShoesList from './ShoesList';
import ShoeForm from './ShoeForm';
import BinsList from './BinsList';
import BinForm from './BinForm';
import LocationsList from './LocationList';
import LocationForm from './LocationForm';

function App() {
  const [shoes, setShoes] = useState([])
  const [hats, setHats] = useState([])
  const [bins, setBins] = useState([])
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

  const getBins = async () => {
    const binUrl = 'http://localhost:8100/api/bins'
    const binResponse = await fetch(binUrl);

    if (binResponse.ok) {
      const data = await binResponse.json();
      const bins = data.bins
      setBins(bins)
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

  useEffect( () => {
    getShoes();
    getHats();
    getBins();
    getLocations();
  }, [
    setShoes,
    setHats,
    setBins,
    setLocations,
  ]
  )
  console.log("These are the shoes", shoes);
  console.log("These are the hats", hats);
  console.log("These are the bins", bins)
  console.log("These are the locations", locations)

  if (shoes === undefined && hats === undefined && bins === undefined) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="shoes">
            <Route path="" element={<ShoesList shoes={shoes} getShoes={getShoes}/>} />
            <Route path="new" element={<ShoeForm />} />
          </Route>
          <Route path="hats">
            <Route path="" element={<HatsList hats={hats} getHats={getHats} />}/>
            <Route path="new" element={<HatForm />} getHats={getHats} />
          </Route>
          <Route path="bins">
            <Route path="" element={<BinsList bins={bins} getBins={getBins} />} />
            <Route path="new" element={<BinForm />} />
          </Route>
          <Route path="locations">
            <Route path="" element={<LocationsList locations={locations} getLocations={getLocations} />} />
            <Route path="new" element={<LocationForm />} getLocations={getLocations} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
