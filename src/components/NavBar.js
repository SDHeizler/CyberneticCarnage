import React from 'react';
import {Link} from 'react-router-dom'
class NavBar extends React.Component {

    render() { 
        return ( 
            <div style={NavBarStyle}>
                <h4>NavBar</h4>
                <div>
                    <Link to='/'>Home</Link>
                </div>
            </div>
         );
    }
}
const NavBarStyle = {
    height:'100px',
    background:'lightblue'
}; 
export default NavBar;