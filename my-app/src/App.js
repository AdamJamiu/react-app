import React from "react";
import "./index.css";
import "./App.css";
import Switch from '@mui/material/Switch';


import {
  FaArrowLeft,
  FaPlane,
  FaShip,
  FaTruckMoving,
  FaUserGraduate,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaCalendar,
} from "react-icons/fa";

export function Container() {
  return <div className="container"></div>;
}

// export function ContainerFluid() {
//   return (
//     <div className="container-fluid">

//     </div>
//   )
// }
export function Navigator() {
  return (
    <div className="navigator">
      <div className="navicol">
        <FaArrowLeft className="arrow" />
      </div>
      <div className="navicol">
        <h3 className="xtit">New Booking</h3>
        <p className="txt">
          Fill in the the information below to get a quote or create a new
          booking
        </p>
      </div>
    </div>
  );
}
export function CardOne() {
  return (
    <div className="card-container ">
      <h3 className="title">Select a service</h3>
      <div className="row">
        <div className="box">
          <p>Air Freight</p>
          <FaPlane className="box-ico plane" />
        </div>
        <div className="box">
          <p>Sea Freight</p>
          <FaShip className="box-ico" />
        </div>
        <div className="box">
          <p>
            Inland <br></br> (Truck & Barge)
          </p>
          <FaTruckMoving className="box-ico" />
        </div>
        <div className="box">
          <p>
            Customer
            <br></br> Clearance
          </p>
          <FaUserGraduate className="box-ico" />
        </div>
      </div>
    </div>
  );
}

export function CardTwo() {
  return (
    <div className="card-container two">
      <FaInfoCircle className="info-icon" />

      <div className="row2">
        <div className="row-col">
          <button className=" row-btn">Import</button>
          <button className=" row-btn">Export</button>
        </div>

        <div className="row-col">
          <input
            className="row-input top"
            type="text"
            placeholder="From city or port"
          ></input>
          <FaMapMarkerAlt className="loc-icon" />
        </div>
        <div className="row-col">
          <input
            className="row-input top"
            type="text"
            placeholder="From city or port"
          ></input>
          <FaMapMarkerAlt className="loc-icon" />
        </div>
        <div className="row-col">
          <input
            className="row-input bottom"
            type="text"
            placeholder="From city or port"
          ></input>
          <FaCalendar className="cal-icon" />
        </div>
        <div className="row-col">
          <input
            className="row-input bottom"
            type="text"
            placeholder="From city or port"
          ></input>
        </div>
        <div className="row-col">
          <input
            className="row-input bottom"
            type="text"
            placeholder="From city or port"
          ></input>
        </div>
      </div>
    </div>
  );
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function CardThree() {
  return (
    <div className="card-container">
      <div className="card-nav">
        <h3 className="title">Cargo Details</h3>
        <Switch defaultChecked />
        <p className="cna-txt">   
        Dangerous Cargo (Chemicals, Battery)</p>
      </div>

      <div className="card-row">
      
      <div className="tab-switch">
        <div className="swit-one">Total Dimension</div>
        <div className="swit-two">package details</div>
      </div>

      <div className="card-row crtw">
        <div className="inp-par">
        <input type='number' className="car-inp">
        </input>
        <span className="inp-spn">Total Volume</span>
        </div>
        <div className="inp-par">
        <input type='number' className="car-inp">
        </input>
        <span className="inp-spn">Total Weight</span>
        </div>
      </div>

      </div>
    </div>
  );
}
export function CardFour () {
  return(
    <div className="card-container">
      <h3 className="title">Additional Services</h3>
      <div className='box2'>

      <div className="row2-col">
      <Switch {...label} size='medium' /> 
      <div className="rwlx">

        <h4 className="tit">Export Forwarding</h4>
        <p className="txt">We handle cudtoms clearance and documentation</p>
        </div>
      </div>
     
      <div className="row2-col">
      <Switch {...label} size='medium'  /> 
      <div className="rwlx">

        <h4 className="tit">Import Custom Clearance</h4>
        <p className="txt">We handle import customs and regulatory</p>
        </div>
      </div>
      <div className="row2-col">
      <Switch {...label} size='medium'  /> 
      <div className="rwlx">

        <h4 className="tit">Cargo Insurance</h4>
        <p className="txt">Protect you cargo from logistic risks up to its full value</p>
        </div>
      </div>
       
      <div className="row2-col">
      <Switch {...label} size='medium' /> 
      <div className="rwlx">

        <h4 className="tit">Transport / Delivery</h4>
        <p className="txt">We deliver the cargo to you door steps from the ports</p>
        </div>
      </div>
    
      </div>
     
    </div>

  )
}