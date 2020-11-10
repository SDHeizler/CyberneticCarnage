import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component {
    render() { 
        return ( 
            <div className='HomePage' style={HomePageStyle}>
                <div className='jubotron jubotron-fluid'>
                    <h1 className='display-3'>Welcome to Cybernetic Carnage</h1>
                    <p className='lead'>Get ready for battle!</p>
                </div>
                <div className='homeStyleNav' style={HomeStyleNav}>
                <Link className='LinkHover' style={LinkStyle} to='/YourRobot'>YourRobot</Link>
                <Link className="LinkHover" style={LinkStyle}  to='/SingleBattle'>Battle</Link>
                </div>
                <footer style={FooterStyle}>
                    <h4 style={FooterCopyrightStyle}>&#169; 2020 Scott Heizler</h4>
                </footer>
            </div>
         );
    }
}
const HomeStyleNav = {
    display:'flex',
    justifyContent:'space-around',
    fontSize:'50px',
    marginTop:'25vh',
};
const LinkStyle = {
    textDecoration:'none',
    color:'White'
};
const HomePageStyle = {
    color:'White',
    height:'95%',
   
};
const FooterStyle = {
    backgroundColor:'#234691',
    height:'50px',
    marginBottom:'0px',
    width:'100%',
    marginTop:'100%',
    position:'absolute',
    bottom:'0'

};
const FooterCopyrightStyle = {

};
export default Home;