import React from 'react';
import RobotFightCard from './RobotFightCard'
import EnemyFightCard from './EnemyFightCard'
import YourRobotPic from '../pictures/YourRobotPic.jpg';
import Robot1 from '../pictures/Robot1.jpg'
class OneFight extends React.Component {



    render() { 
        return ( 
            <div className='FightPage' style={FightPageStyle}>
                <header>
                <h1>Battle!</h1>
                </header>
                <div style={containerStyle}>
                {this.props.YourRobot.map((ele) => {
                        return(
                        <RobotFightCard key={ele.id} 
                        Name={ele.name} 
                        Attacks={ele.Attacks.map((ele, index) => {
                            return ele
                        })}
                        Health={ele.Health}
                        onSubmit={(e) => this.props.onSubmit(e)}
                        onChange={(e) => this.props.onChange(e)}
                        Checked={this.props.Checked}
                        disabled={this.props.disabled}
                        AttackStyle={this.props.AttackStyle}
                        RobotImage={YourRobotPic}
                        ></RobotFightCard>
                    )
                })}
                <div>
                </div>

                <div>
                    {this.props.EnemyRobot.map((ele, index) => {
                        return(
                            <EnemyFightCard
                            key={ele.id}
                            Health={ ele.Health}
                            Name={ ele.name }
                            EnemyStyle={this.props.EnemyStyle}
                            EnemyRobotPic={Robot1}
                            ></EnemyFightCard>
                        )
                })}
                </div>
                </div>
            </div>
            );
    }
}
const containerStyle={
    display:'flex',
    justifyContent:'center'
};
const FightPageStyle = {
    height:'1200px',
    color:'White'
}
export default OneFight;