// import React, { useState, useEffect } from 'react';
import React from 'react';
import "./index.css";

function BinsList({bins}) {
    if (bins === undefined) {
        return null;
      }

    const handleDelete = async (bin) => {
      const binUrl = `http://localhost:8100/api/bins/${bin.id}/`
      const fetchConfig = {
        method: 'delete'
      }
    await fetch(binUrl, fetchConfig);
    }

    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Closet Name</th>
            <th>Bin Number</th>
            <th>Bin Size</th>
          </tr>
        </thead>
        <tbody>
          {bins.map(bin => {
            console.log(bin)
            return (
            <tr key={bin.id}>
              <td>{ bin.closet_name }</td>
              <td>{ bin.bin_number }</td>
              <td>{ bin.bin_size }</td>
              <td>
                <button id={ bin.id } onClick={() => handleDelete(bin)}
                  type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
            );
          })}
          </tbody>
      </table>
    );
}

export default BinsList;
