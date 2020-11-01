import React from 'react';
import {Link} from 'react-router-dom'
import Menu from '../pictures/menu.svg'
class NavBar extends React.Component {

    render() { 
        return ( 
            <div style={NavBarStyle}>
                <h4>Cybernetic Carnage</h4>
                <div style={LinkContainerStyle}>
                <div>
                    <Link className='LinkHover' style={NavBarLinkStyle} to='/'>Home</Link>
                </div>
                <div>
                    <img onPointerLeave={this.props.onPointerLeave} onPointerEnter={this.props.onPointerEnter} style={imgStyle} src={Menu}></img>
                    <div>
                    <ul onPointerLeave={this.props.onPointerLeave} onPointerEnter={this.props.onPointerEnter} style={this.props.GitHubLinkStyle}>
                        <li>Link1</li>
                        <li>Link2</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
const NavBarStyle = {
    height:'100px',
    background:'lightblue',
    display:'flex',
    justifyContent:'space-between'
}; 
const NavBarLinkStyle = {
    color:'black',
    textDecoration:'none'
};
const imgStyle = {
    height:'25px',
    width:'25px',
    marginRight:'2em',
    marginLeft:'2em'
};
const LinkContainerStyle ={
    display:'flex',
    justifyContent:'space-around'
}

export default NavBar;