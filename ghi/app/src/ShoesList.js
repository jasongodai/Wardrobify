// import React, { useState, useEffect } from 'react';
import React from 'react';
import "./index.css";

function ShoesList(props) {
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Manufucturer</th>
            <th>Model Name</th>
            <th>Color</th>
            <th>Picture</th>
            <th>Bin</th>
          </tr>
        </thead>
        <tbody>
          {props.shoes.map(shoe => {
            return (
            <tr key = {shoe.id}>
              <td>{ shoe.manufacturer }</td>
              <td>{ shoe.model_name }</td>
              <td>{ shoe.color }</td>
              <td>
                <img
                    src={shoe.picture_url}
                    alt=""
                    width="75px"
                    height="75px"
                />
              </td>
              <td>{ shoe.bin }</td>
            </tr>
            );
          })}
          </tbody>
      </table>
    );
}

export default ShoesList;
