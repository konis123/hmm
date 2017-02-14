import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <nav>
                <div className="nav-wrapper">
                  <Link to="/" className="brand-logo">Logo</Link>
                  <div id="nav-mobile" className="right hide-on-med-and-down">
                    <Link to="/sass">Sass</Link>
                    <Link to="/badges">Components</Link>
                    <Link to="/logout">JavaScript</Link>
                  </div>
                </div>
              </nav>
            </div>
        );
    }
}
Header.propTypes = {

};
Header.defaultProps = {

};

export default Header;
