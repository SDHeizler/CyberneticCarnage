import React from 'react';
class YourRobotStats extends React.Component {
    render() { 
        return ( 
            <div style={DivContStyle} className='container bg-dark text-white '>
                    <h1>Name: {this.props.name}</h1>
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
    marginLeft:'auto',
    marginRight:'auto'
};
const YourRobotImageStyle = {
    height:'250px',
    width:'250px'
};
const YourRobotStatsStyle = {
    fontSize:'35px'
}
const YourRobotHealthStyle = {
    fontSize:'25px'
};
const YourRobotAttackStyle = {
    fontSize:'35px'
};
const YourRobotAttackListStyle = {
    fontSize:'25px'
};
const DivContStyle = {
    border:'1px solid black',
    backgroundColor:'rgba(211, 211, 211, 0.850)',
    width:'35%',
    color:'black',
    borderRadius:'8px',
    marginTop:'25px'
};
export default YourRobotStats;