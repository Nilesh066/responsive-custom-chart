import React, { useState,useEffect } from "react";
import Navigator from './Components/Nav';
import Header from './Components/Header';
import Barchart from './Components/BarChart';
import Donoughtchart from './Components/Donought';
import Footers from './Components/Footer';
import data from './data';
import {BrowserRouter} from 'react-router-dom';


const App=(props)=> {

//declaring states of app component
     const [showBarChart,setShow]=useState(false);
     const [countrySelected, setCountry]=useState();
     const [list, setList]=useState();
     const [donoughtLabel]=useState([]);
     const [donoughtData]=useState([]);
     const [countryPercent,setCountryPercent]=useState([]);
     const [barLabel,setBarLabel]=useState([]);
     const [barData,setBarData]=useState([]);

//fetch data from source 
useEffect(()=>{
  setList(data);
  for(let i=0;i<data.length;i++){
    donoughtLabel.push(data[i].country);
    donoughtData.push(data[i].percent);
  }
},[donoughtLabel,donoughtData])

//function to be called to show donought chart
const showDonought=()=>{
    setShow(false);
  }

//function called when country is selected from donought chart and set bar chart datas 
const countrySelectedFunc=(country)=>{
 setCountry(country);
 setShow(true);
 for (let i=0;i<list.length;i++){
   if(list[i].country===country){
     setBarLabel(list[i].states);
     setBarData(list[i].barData);
     setCountryPercent(list[i].percent);
   }
   else{
     console.log("Nothing selected");
   }
 }
}

//conditional rendering which chart needs to be shown.
    if (showBarChart){
      return(<BrowserRouter>
        <Navigator/>
        <Header/>
        <Barchart 
        countryPercent={countryPercent} 
        barLabel={barLabel} 
        barData={barData} 
        showDonought={showDonought}  
        countrySelected={countrySelected} 
        countrySelectedFunc={countrySelectedFunc}/>
        <Footers/>
        </BrowserRouter>)
    }
    else{
      return(<BrowserRouter>
        <Navigator/>
        <Header/>
        <Donoughtchart 
        donoughtData={donoughtData} 
        donoughtLabel={donoughtLabel}  
        countrySelected={countrySelected} 
        countrySelectedFunc={countrySelectedFunc}/>
        <Footers/>
        </BrowserRouter>)
    }
   
}
export default App;
