import React from 'react';
import YourRobotStats from './YourRobotStats'
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
                            ></YourRobotStats>
                        )
                })}
            </div>
         );
    }
}

export default YourRobot;