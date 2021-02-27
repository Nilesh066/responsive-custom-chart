import React from "react";
import './Chart.css';
import { Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
const Barchart=(props)=> {
  
    return (
        <div className="barchart shadow col-sm-10 offset-sm-1 mt-sm-5">
      <div className="col-sm-10 ">NEW CLIENTS OF {props.countrySelected} <span className="percentage">+{props.countryPercent}</span>
      <span className="float-right back">
        <FontAwesomeIcon  icon={faChevronLeft} onClick={props.showDonought}></FontAwesomeIcon></span></div>
      <div className="col-sm-10 ">
      <Bar data={{
        labels:props.barLabel,
        datasets:[
          {
            label:"NEW CLIENTS",
            data:props.barData,
            backgroundColor:'rgba(44,217,138,0.8)',
            barThickness:'50'
          }
        ]
      }} height={300} width={700} options={{maintainAspectRatio:false,legend:{display:false}}}/>
      </div>
      </div>
          );
}
export default Barchart;
