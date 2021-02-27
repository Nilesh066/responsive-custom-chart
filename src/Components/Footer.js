import React from 'react';
import './Footer.css';
const Footers=(props)=>{
 return(<footer className=" footer mt-5 ">
     <div className="container-fluid">
         <div className="row">
             <div className="col-sm-6 float-left p-3"> @ 2021 xyz: All Rights Reserved</div>
             <div className="col-sm-6">
                 <ul className="nav float-right">
                     <li className="nav-item">
                         <a href="/legal-issue" className="nav-link">LEGAL ISSUE</a>
                     </li>
                     <li className="nav-item">
                         <a href="/careers" className="nav-link">CAREERS</a>
                     </li>
                     <li className="nav-item">
                         <a href="/reviews" className="nav-link">REVIEWS</a>
                     </li>
                     <li className="nav-item">
                         <a href="/about" className="nav-link">ABOUT</a>
                     </li>
                     <li className="nav-item">
                         <a href="/blog" className="nav-link">BLOG</a>
                     </li>
                     <li className="nav-item">
                         <a href="/update" className="nav-link">UPDATES</a>
                     </li>
                  </ul>
             </div>
         </div>
     </div>
 </footer>)
}

export default Footers;