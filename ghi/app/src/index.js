import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadHats() {
  const hatResponse = await fetch('http://localhost:8090/api/locations');
  console.log(hatResponse)
  if (!hatResponse.ok) {
    console.error(hatResponse)
  } else {
    const data = await hatResponse.json()
    root.render(
      <React.StrictMode>
          <App hats={data.hats} />
      </React.StrictMode>
    )
  }
}
loadHats();

async function loadShoes() {
  const shoeResponse = await fetch('http://localhost:8080/api/bins/');
  if (!shoeResponse.ok) {
    console.error(shoeResponse);
  } else {
    const data = await shoeResponse.json();
    console.log(data);
    root.render(
      <React.StrictMode>
        <App shoes={data.shoes} />
      </React.StrictMode>
    );
  }
}
loadShoes();
