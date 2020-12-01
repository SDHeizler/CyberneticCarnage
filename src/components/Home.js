import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar'
class Home extends React.Component {
    render() { 
        return ( 
            <div className='HomePage' style={HomePageStyle}>
                <NavBar onClick={this.props.onClick} onPointerLeave={this.props.onPointerLeave} onPointerEnter={this.props.onPointerEnter} GitHubLinkStyle={this.props.GitHubLinkStyle}></NavBar>
                <div className='jubotron jubotron-fluid'>
                    <h1 className='display-3'>Welcome to Cybernetic Carnage</h1>
                    <p className='lead' style={{fontSize:'30px'}}>Get ready for battle!</p>
                </div>
                <div className='homeStyleNav' style={HomeStyleNav}>
                <Link className='LinkHover' style={LinkStyle} to='/YourRobot'>YourRobot</Link>
                <Link className="LinkHover" style={LinkStyle}  to='/SingleBattle'>Battle</Link>
                </div>
                <footer className='bg-dark text-white' style={FooterStyle}>
                    <h4>&#169; 2020 Scott Heizler</h4>
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
    color:'White',
    fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'
};
const HomePageStyle = {
    color:'White',
    height:'95%',
   
};
const FooterStyle = {
    height:'55px',
    width:'100%',
    position:'absolute',
    bottom:'0'

};

export default Home;