import React from 'react';
import { Header } from 'components';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class App extends React.Component{
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){

  }

  componentDidMount(){
    function getCookie(name){
      var value = "; " + document.cookie;
      var parts = value.split("; "+name+"=");
      if(parts.length == 2)
        return parts.pop().split(";").shift();
    }

    let loginData = getCookie('key');

    if(typeof loginData === "undefined"){
      browserHistory.push('/login');
      return;
    }

    loginData = JSON.parse(atob(loginData));

    if(!loginData.isLoggedIn){
      //console.log("sfasf");
      browserHistory.push('/login');
      return;
    }

    this.props.getStatusRequest().then(
      () => {
        console.log(this.props.status);
        if(!this.props.status.valid){
          loginData = {
            isLoggedIn: false,
            username: ''
          };
          document.cookie='key= ' + btoa(JSON.stringify(loginData));

          let $toastContent = $('<span style="color: #FFB4BA">Your session is expired, please log in again</span>');
          Materialize.toast($toastContent, 4000);
        }
      }
    );
  }

  render(){

    let re = /(login|register)/;
    let isAuth = re.test(this.props.location.pathname);

    return (
      <div className='container'>
        {isAuth ? undefined : <Header/> }
        { this.props.children }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStatusRequest: () => {
      return dispatch(getStatusRequest());
    },
    logoutRequest: () => {
      return dispatch(logoutRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
