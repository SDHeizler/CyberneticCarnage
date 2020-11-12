import React from 'react';
import YourRobotStats from './YourRobotStats'
import YourRobotPic from '../pictures/YourRobotPic.jpg'
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
                <h1>YourRobot</h1>
                {this.props.YourRobot.map((ele) => {
                        return(
                            <YourRobotStats
                            key={ele.id}
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