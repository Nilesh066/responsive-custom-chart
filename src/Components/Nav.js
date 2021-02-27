import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navigator=()=> {
    return (
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" >
        <Navbar.Brand href="#home" className="text-primary font-weight-bold lead mx-3">LOGO</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto ml-5 top-nav" >
                 <a href="#Dashboard" className="px-3  nav-link font-weight-bold active">DASHBOARD</a>
                 <a href="#Employees" className="px-3 nav-link font-weight-bold">EMPLOYEES</a>
                 <a href="#Appointments" className="px-3 nav-link font-weight-bold" >APPOINTMENTS</a>
                 <a href="#Calander" className="px-3 nav-link font-weight-bold">CALANDER</a>
                 <a href="#Messages" className="px-3 nav-link font-weight-bold">MESSAGES</a>
               </Nav>
               <Nav >
                 <input type="button" className="btn btn-primary btn-sm appointment" value="MAKE AN APPOINTMENT"/>
                 <div className="icon" ><FontAwesomeIcon  icon={faSignInAlt}></FontAwesomeIcon></div>
                 <div className="icon" ><FontAwesomeIcon  icon={faSignOutAlt}></FontAwesomeIcon></div>
                 <div className="icon" ><img src={'./banner.jpg'} alt="logo"className="banner"/>
                 <FontAwesomeIcon  icon={faArrowAltCircleDown}></FontAwesomeIcon></div>
               </Nav>
             </Navbar.Collapse>
           </Navbar>
          );
}
export default Navigator;
