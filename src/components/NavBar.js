import React from 'react';
import {Link} from 'react-router-dom'
import Menu from '../pictures/menu.svg'
class NavBar extends React.Component {

    render() { 
        return ( 
            <div className='bg-dark text-white' style={NavBarStyle}>
                <button onClick={this.props.onClick} className='btn-danger' style={NavBarResetStyle}>Reset</button>
                <h4 style={TitleStyle}>Cybernetic Carnage</h4>
                <div style={LinkContainerStyle}>
                <div>
                    <Link className='LinkHover' style={NavBarLinkStyle} to='/'>Home</Link>
                </div>
                <div style={containerHamburgerMenu}>
                    <img onPointerLeave={this.props.onPointerLeave} onPointerEnter={this.props.onPointerEnter} style={imgStyle} src={Menu} alt=''></img>
                    <div style={containerGitHubLink}>
                    <ul  className='bg-dark text-white' onPointerLeave={this.props.onPointerLeave} onPointerEnter={this.props.onPointerEnter} style={this.props.GitHubLinkStyle}>
                        <li style={ListItemStyle}><a target='_blank' style={hrefStyle} href='#'>Github</a></li>
                        <li style={ListItemStyle}><a style={hrefStyle} href='https://sdheizler.github.io/MyPortfolio/' target='_blank'>Portfolio</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
const NavBarStyle = {
    height:'50px',
    background:'#234691',
    display:'flex',
    justifyContent:'space-around',
    paddingTop:'10px',
    color:'White',
    width:'100%'
}; 
const NavBarLinkStyle = {
    color:'White',
    textDecoration:'none',
    fontSize:'20px',
};
const imgStyle = {
    height:'25px',
    width:'25px',
    marginRight:'2em',
    marginLeft:'2em'
};
const LinkContainerStyle ={
    display:'flex',
    
}
const containerGitHubLink = {
    position:'absolute',
    left:'0'
};
const containerHamburgerMenu = {
    position:'relative',
    marginRight:'2vw'
};
const ListItemStyle = {
    borderBottom:'1px solid black',
};
const hrefStyle={
    color:'White',
    textDecoration:'none',
    fontSize:'20px'
};
const NavBarResetStyle = {
    marginRight:'auto',
    borderRadius:'7px'
};
const TitleStyle = {
    marginRight:'60vw'
};
export default NavBar;