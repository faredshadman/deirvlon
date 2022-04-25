import React from 'react'
import '../Popup/Popup.css'
import axios from 'axios';
import AdressIcon from "../../../../../assets/Popupicons/adressbook.svg"
function Popup(props) {
    



  return ( props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <div className="header">
                  <div><img src={AdressIcon} alt="" /></div>
                <h2>Adress Book</h2>
            </div>
            <div className="search">
                <input placeholder='Search' type="search" name="" id="" />
            </div>
            <div className="cedvel">
                <table>
                    <thead>
                        <tr>
                            <td>Company</td>
                            <td>Location</td>
                            <td>Adress</td>
                            <td>Customer Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                          <tr>
                              <td>1</td>
                              <td>2</td>
                              <td>3</td>
                              <td>4</td>
                          </tr>
                          <tr>
                              <td>1</td>
                              <td>2</td>
                              <td>3</td>
                              <td>4</td>
                          </tr>
                          <tr>
                              <td>1</td>
                              <td>2</td>
                              <td>3</td>
                              <td>4</td>
                          </tr>

                    </tbody>
                </table>
            </div>
            <div className='button-close'>
                  <button onClick={()=>props.setTrigger(!props.trigger)} className="closeup-btn">Close</button>
            </div>
        </div>
    </div>
  ): "";
}

export default Popup