import React, {useEffect, useState} from 'react';

function ShoeForm ({getShoes}) {
    const [manufacturer, setManufacturer] = useState('');
    const [model_name, setModelName] = useState('');
    const [color, setColor] = useState('');
    const [picture_url, setPictureUrl] = useState('');
    const [bin, setBin] = useState('');
    const [bins, setBins] = useState([]);

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const handleModelNameChange = (event) => {
        const value = event.target.value;
        setModelName(value);
    }

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    }

    const handleBinChange = (event) => {
        const value = event.target.value;
        setBin(value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.manufacturer = manufacturer;
        data.model_name = model_name;
        data.color = color;
        data.picture_url = picture_url;
        data.bin = bin;
        console.log(data);

        const shoeUrl = 'http://localhost:8080/api/bins/';
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        };
        const shoeResponse = await fetch(shoeUrl, fetchConfig);
        if (shoeResponse.ok) {
            const newShoe = await shoeResponse.json();
            console.log(newShoe);

            setManufacturer('');
            setModelName('');
            setColor('');
            setPictureUrl('');
            setBin('');
            getShoes();

        }

      }
      const fetchData = async () => {
        const binUrl = 'http://localhost:8100/api/bins/';

        const binResponse = await fetch(binUrl);

        if (binResponse.ok) {
          const data = await binResponse.json();
          setBins(data.bins);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new shoe</h1>
            <form onSubmit={handleSubmit} id="create-shoe-form">
              <div className="form-floating mb-3">
                <input onChange={handleManufacturerChange} placeholder="Manufacturer"
                required type="text" value={manufacturer} name="manufacturer" id="manufacturer"
                className="form-control"/>
                <label htmlFor="manufacturer">Manufacturer</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleModelNameChange} placeholder="Model Name"
                required type="text" value={model_name} name="model_name" id="model_name"
                className="form-control"/>
                <label htmlFor="model_name">Model Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleColorChange} placeholder="Color"
                required type="text" value={color} name="color" id="color"
                className="form-control"/>
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePictureUrlChange} placeholder="Picture URL"
                required type="url" value={picture_url} name="picture_url" id="picture_url"
                className="form-control"/>
                <label htmlFor="picture_url">Picture URL</label>
              </div>
              <div className="mb-3">
                <select onChange={handleBinChange} value={bin} required name="bin" id="bin" className="form-select">
                  <option value="">Choose a Bin</option>
                  {bins.map(bin => {
                    return (
                    <option key={bin.id} value={bin.href}>
                        {bin.closet_name}
                    </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ShoeForm;
