import React from 'react';
import YourRobotStats from './YourRobotStats'
import YourRobotPic from '../pictures/YourRobotPic.jpg'
class YourRobot extends React.Component {
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