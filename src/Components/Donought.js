import React from "react";
import './Chart.css';
import { Doughnut } from 'react-chartjs-2';
const Doughnutchart=(props)=> {
    return (
        <div className="barchart shadow col-sm-10 offset-sm-1 mt-sm-5">
        <div className="row">
      <div className="col-sm-3">NEW CLIENTS <span className="total-percent row px-3">+98</span> <span className="increment-percentage row px-4">145%</span></div>
      <div className="col-sm-9 py-md-5">
      <Doughnut
      onElementsClick={elems => {if (elems[0]){
        props.countrySelectedFunc(elems[0]._chart.legend.legendItems[elems[0]._index].text)}
      }
          }
      data={{
        labels:props.donoughtLabel.slice(0,4),
        datasets:[
          {
            label:"NEW CLIENTS",
            data:props.donoughtData.slice(0,4),
            backgroundColor:['rgba(44,217,138,0.8)','rgba(245,213,114,0.8)','rgba(222,113,142,0.8)','rgba(30,171,251,0.8)',],
          }
        ]
      }} 
      height={300} 
      width={700} 
      options={
          {maintainAspectRatio:false, cutoutPercentage:95, legend:{position:"right",
           labels:{fontSize:20, padding:40}},
            }}  />
      </div>
      </div>
      </div>
          );
}
export default Doughnutchart;
