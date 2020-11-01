import React from 'react';
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render() { 
        return ( 
            <div>
                <h1>Welcome to Cybernetic Carnage</h1>
                <p>Where would you like to go?</p>
                <div className='homeStyleNav' style={HomeStyleNav}>
                <Link className='LinkHover' style={LinkStyle} to='/YourRobot'>YourRobot</Link>
                <Link className="LinkHover" style={LinkStyle}  to='/SingleBattle'>Battle</Link>
                </div>
            </div>
         );
    }
}
const HomeStyleNav = {
    display:'flex',
    justifyContent:'space-around',
    fontSize:'50px'
};
const LinkStyle = {
    textDecoration:'none',
    color:'black'
}
export default Home;