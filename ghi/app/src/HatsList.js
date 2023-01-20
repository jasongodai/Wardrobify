import React from 'react'


function HatsList({hats}) {
    if (hats === undefined) {
        return null;
    }

    const handleDelete = async (hat) => {
        const hatUrl = `http://localhost:8090/api/locations/${hat.id}/`
        const fetchConfig = {
            method: 'delete'
        }
        await fetch(hatUrl, fetchConfig)
        window.location.reload(true)
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Fabric</th>
                    <th>Style Name</th>
                    <th>Color</th>
                    <th>Picture</th>
                    <th>Location</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {hats.map(hat => {
                    return (
                        <tr key={hat.id}>
                            <td>{ hat.fabric }</td>
                            <td>{ hat.style_name }</td>
                            <td>{ hat.color }</td>
                            <td>
                                <img
                                    src={ hat.picture_url }
                                    alt=""
                                    width="75px"
                                    height="75px"
                                />
                            </td>
                            <td>{ hat.location }</td>
                            <td>
                                <button type="button" id={hat.id} onClick={() => handleDelete(hat)} className="btn btn-danger">
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

export default HatsList;
