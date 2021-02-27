import React from "react";

import './Header.css';


class Header extends React.Component {
 
  render() {
    return (
      <div className="container-fluid second-head">
      <div className="row p-3">
        <div className="col-sm-6 text-primary "><h3>Hello,welcome here,</h3></div>
        <div className="col-sm-6">
        <button className="btn btn-outline-primary float-right order-1">{"01.04.2021 to 30.04.2021"}</button>
          <div className=" font-weight-bold mr-3 mt-2 float-right date order-2">DATE</div>
        </div>
      </div>
      </div>
          );
        }
}
export default Header;