import React from 'react';
import RobotFightCard from './RobotFightCard'
import EnemyFightCard from './EnemyFightCard'
import {Redirect} from 'react-router-dom'
import Robot1 from '../pictures/Robot1.jpg'
class OneFight extends React.Component {
        

Redirect = () => {
    return <Redirect to='/'></Redirect>
}
    render() { 

        return ( 
            <div>
                <header>
                <h1>Fight</h1>
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
                        onSubmit={(e) => {this.props.onSubmit(e)}}
                        onChange={(e) => this.props.onChange(e)}
                        PlayerAttackValue={this.props.PlayerAttackValue}
                        Checked={this.props.Checked}
                        disabled={this.props.disabled}
                        AttackStyle={this.props.AttackStyle}
                        RobotImage={Robot1}
                        ></RobotFightCard>
                    )
                })}
                <div>
                </div>

                <div>
                    {this.props.EnemyRobot.map((ele, index) => {
                        if(ele.Health === 'Dead'){
                                return  this.Redirect()
                            }else{ 
                        return(
                            <EnemyFightCard
                            key={ele.id}
                            Health={ ele.Health}
                            Name={ ele.name}
                            EnemyStyle={this.props.EnemyStyle}
                            ></EnemyFightCard>
                            )
                }
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
}
export default OneFight;