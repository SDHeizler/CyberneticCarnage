import React from 'react';
import Robot1 from '../pictures/Robot1.jpg'
class YourRobotStats extends React.Component {
    render() { 
        return ( 
            <div className='container'>
                    <h1>Name: {this.props.name}</h1>
                    <div style={DivSize}>
                    <img style={YourRobotImageStyle} src={this.props.RobotImage}></img>
                    <ul style={UlListStyle}>
                        <h4>Stats:</h4>
                        <li>Health:{this.props.health}</li>
                    </ul>
                    </div>
                    <div style={DivSize}>
                    <ol style={OlListStyle}>
                        <h4>Attacks:</h4>
                        {this.props.attacks.map((ele, index) => {
                            return(
                            <li key={index}>{ele}</li>
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
}
export default YourRobotStats;