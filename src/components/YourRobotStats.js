import React from 'react';
import PropTypes from 'prop-types'
class YourRobotStats extends React.Component {
    render() { 
        return ( 
            <div style={DivContStyle} className='bg-dark text-white '>
                    <h1 id='YourRobotName' style={{fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif', fontSize:'3vw'}}>Name: {this.props.name}</h1>
                    <div style={DivSize}>
                    <img style={YourRobotImageStyle} src={this.props.RobotImage} alt=''></img>
                    <ul style={UlListStyle}>
                        <h3 style={YourRobotStatsStyle}>Stats:</h3>
                        <li style={YourRobotHealthStyle}>Health:{this.props.health}</li>
                    </ul>
                    </div>
                    <div style={DivSize}>
                    <ol style={OlListStyle}>
                        <h4 style={YourRobotAttackStyle}>Attacks:</h4>
                        {this.props.attacks.map((ele, index) => {
                            return(
                            <li style={YourRobotAttackListStyle} key={index}>{ele}</li>
                            )
                        })}
                    </ol>
                    </div>
            </div>
         );
    }
}
const UlListStyle = {
    listStyleType:'none',
    textAlign:'center'
};
const OlListStyle = {
    textAlign:'center',
};
const DivSize = {
    width:'30%',

};
const YourRobotImageStyle = {
    height:'auto',
    width:'15vw',
    fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'
};
const YourRobotStatsStyle = {
    fontSize:'3.5vh',
    fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'
};
const YourRobotHealthStyle = {
    fontSize:'2.5vh',
    fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'
};
const YourRobotAttackStyle = {
    fontSize:'3.5vh',
    fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'
};
const YourRobotAttackListStyle = {
    fontSize:'2.5vh',
    fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'
};
const DivContStyle = {
    border:'1px solid black',
    backgroundColor:'rgba(211, 211, 211, 0.850)',
    color:'black',
    borderRadius:'8px',
    marginTop:'25px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'40vw',
    height:'auto',
    marginLeft:'auto',
    marginRight:'auto'
};

// PropTypes
YourRobotStats.propTypes = {
    name:PropTypes.string,
    health:PropTypes.number,
    attacks:PropTypes.array
};
export default YourRobotStats;