import React from 'react'

function LocationsList({locations, getLocations}) {
    if (locations === undefined) {
        return null;
    }

    const handleDelete = async (location) => {
        const locationUrl = `http://localhost:8100/api/locations/${location.id}/`
        const fetchConfig = {
            method: 'delete'
        }
        const locationResponse = await fetch(locationUrl, fetchConfig)
        if (locationResponse.ok) {
            getLocations()
        }
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Closet Name</th>
                    <th>Section Number</th>
                    <th>Shelf Number</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {locations.map(location => {
                    console.log(location)
                    return (
                        <tr key={location.id}>
                            <td>{ location.closet_name }</td>
                            <td>{ location.section_number }</td>
                            <td>{ location.shelf_number }</td>
                            <td>
                                <button type="button" id={location.id} onClick={() => handleDelete(location)} className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default LocationsList;
