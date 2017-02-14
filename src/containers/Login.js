import React from 'react';
import { Authentication } from 'components';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              
                  <Authentication/>
                
            </div>
        );
    }
}
Login.propTypes = {

};
Login.defaultProps = {

};

export default Login;
