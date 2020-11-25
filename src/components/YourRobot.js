import React from 'react';
import YourRobotStats from './YourRobotStats';
import YourRobotPic from '../pictures/YourRobotPic.jpg';
import NavBar from './NavBar';
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
}
export default YourRobot;