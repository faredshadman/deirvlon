import React from "react";
import ShippingSVG from "./shipping.svg";
import "./ShipLoungeModal.css";
const ShipLoungeModal = ({ setOrderInfo }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="header">
          <div>
            <img src={ShippingSVG} alt="" />
          </div>
          <h2>Ship Lounge storage list</h2>
        </div>
        <div className="search">
          <input placeholder="Search" type="search" name="" id="" />
        </div>
        <div className="cedvel">
          <table>
            <thead>
              <tr>
                <th>SKU Code</th>
                <th>Product</th>
                <th>Count</th>
                <th>Weight</th>
                <th>GTIP Code</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>
                  <button className="select_button">Select</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>
                  <button className="select_button">Select</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>
                  <button className="select_button">Select</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>
                  <button className="select_button">Select</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-close" onClick={() => setOrderInfo("")}>
          <button className="closeup-btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ShipLoungeModal;
