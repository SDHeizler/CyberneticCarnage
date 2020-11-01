import React from 'react';
import YourRobotStats from './YourRobotStats'
import Robot1 from '../pictures/Robot1.jpg'
class YourRobot extends React.Component {
    render() { 
        return ( 
            <div>
                <h1>YourRobot</h1>
                {this.props.YourRobot.map((ele) => {
                        return(
                            <YourRobotStats
                            key={ele.id}
                            name={ele.name}
                            health={ele.Health}
                            attacks={ele.Attacks}
                            RobotImage={Robot1}
                            ></YourRobotStats>
                        )
                })}
            </div>
         );
    }
}

export default YourRobot;