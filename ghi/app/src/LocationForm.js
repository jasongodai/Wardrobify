import React, { useState } from 'react';

function LocationForm() {
    const [closet_name, setClosetName] = useState('')
    const [section_number, setSectionNumber] = useState('')
    const [shelf_number, setShelfNumber] = useState('')

    const handleClosetChange = (event) => {
        const value = event.target.value;
        setClosetName(value);
    }
    const handleSectionNumberChange = (event) => {
        const value = event.target.value;
        setSectionNumber(value);
    }
    const handleShelfNumberChange = (event) => {
        const value = event.target.value;
        setShelfNumber(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}
        data.closet_name = closet_name;
        data.section_number = section_number;
        data.shelf_number = shelf_number;

        console.log(data)

        const hatUrl = 'http://localhost:8100/api/locations/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const hatResponse = await fetch(hatUrl, fetchConfig)
        if (hatResponse.ok) {
            const newHat = await hatResponse.json()
            console.log(newHat)
            setClosetName('')
            setSectionNumber('')
            setShelfNumber('')
        }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new location</h1>
            <form onSubmit={handleSubmit} id="create-location-form">
              <div className="form-floating mb-3">
                <input onChange={handleClosetChange} value={closet_name} placeholder="Closet Name" required type="text" name="closet_name" id="closet_name" className="form-control"/>
                <label htmlFor="closet_name">Closet Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleSectionNumberChange} value={section_number} placeholder="Section Number" required type="number" name="section_number" id="section_number" className="form-control"/>
                <label htmlFor="section_number">Section Number</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleShelfNumberChange} value={shelf_number} placeholder="Shelf Number" required type="number" name="shelf_number" id="shelf_number" className="form-control"/>
                <label htmlFor="shelf_number">Shelf Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )

}

export default LocationForm;
