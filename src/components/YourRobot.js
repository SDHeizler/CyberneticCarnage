import React from 'react';
import YourRobotStats from './YourRobotStats';
import YourRobotPic from '../pictures/YourRobotPic.jpg';
import NavBar from './NavBar';
import PropTypes from 'prop-types'
class YourRobot extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            YourRobot:[]
        }
    };
    render() { 
        return ( 
            <div className='YourRobotPage' style={YourRobotPageStyle}>
                <NavBar
                onClick={this.props.onClick} 
                onPointerLeave={this.props.onPointerLeave} 
                onPointerEnter={this.props.onPointerEnter} 
                GitHubLinkStyle={this.props.GitHubLinkStyle}
                ></NavBar>
                {this.props.YourRobot.map((ele) => {
                        return(
                            <YourRobotStats
                            key={ele._id}
                            name={ele.name}
                            health={ele.Health}
                            attacks={ele.Attacks}
                            RobotImage={YourRobotPic}
                            ></YourRobotStats>
                        )
                })}
            </div>
         );
    }
}
const YourRobotPageStyle = {
    height:'100vh',
    color:'White',
};

// PropTypes
YourRobot.propTypes = {
    onClick:PropTypes.func.isRequired,
    onPointerEnter:PropTypes.func.isRequired,
    onPointerLeave:PropTypes.func.isRequired,
    YourRobot:PropTypes.array
};
export default YourRobot;