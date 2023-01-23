import React, {useState} from 'react';

function BinForm ({getBins}) {
    const [closet_name, setClosetName] = useState('');
    const [bin_number, setBinNumber] = useState('');
    const [bin_size, setBinSize] = useState('');

    const handleClosetNameChange = (event) => {
        const value = event.target.value;
        setClosetName(value);
    }

    const handleBinNumberChange = (event) => {
        const value = event.target.value;
        setBinNumber(value);
    }

    const handleBinSizeChange = (event) => {
        const value = event.target.value;
        setBinSize(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.closet_name = closet_name;
        data.bin_number = bin_number;
        data.bin_size = bin_size;
        console.log(data);

        const binUrl = 'http://localhost:8100/api/bins/';
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        };
        const binResponse = await fetch(binUrl, fetchConfig);
        if (binResponse.ok) {
            const newBin = await binResponse.json();
            console.log(newBin);

            setClosetName('');
            setBinNumber('');
            setBinSize('');
            getBins();

        }

      }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a New Bin</h1>
            <form onSubmit={handleSubmit} id="create-shoe-form">
              <div className="form-floating mb-3">
                <input onChange={handleClosetNameChange} placeholder="Closet Name"
                required type="text" value={closet_name} name="closet_name" id="closet_name"
                className="form-control"/>
                <label htmlFor="closet_name">Closet Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleBinNumberChange} placeholder="Bin Number"
                required type="number" value={bin_number} name="bin_number" id="bin_number"
                className="form-control"/>
                <label htmlFor="bin_number">Bin Number</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleBinSizeChange} placeholder="Bin Size"
                required type="number" value={bin_size} name="bin_size" id="bin_size"
                className="form-control"/>
                <label htmlFor="color">Bin Size</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default BinForm;
