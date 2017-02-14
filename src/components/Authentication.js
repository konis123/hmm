import React from 'react';
import {link} from 'react-router';

class Authentication extends React.Component{
  constructor(props){
    super(props);

  }


  render(){
    const inputBoxes = (
      <div>
        <div className="row">
          <div className="input-field col s12">
            <input id="ID" type="text" className="validate"/>
            <label htmlFor="ID">ID</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="PW" type="password" className="validate"/>
            <label htmlFor="PW">Password</label>
          </div>
        </div>

      </div>
    );
    const loginView = (
      <div>
        <div className="row">
          <div className=" col offset-s3 s6 offset-s3 card-panel amber lighten-5">
            {inputBoxes}
            <a className="waves-effect waves-light btn col s2">Submit</a>
            <a className="col s4">페북로긴</a>
            <a className="col s6">create an account</a>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        
            {loginView}
          
      </div>
    );
  }

}

export default Authentication;
