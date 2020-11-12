import React from 'react';
import RobotFightCard from './RobotFightCard'
import EnemyFightCard from './EnemyFightCard'
import {Redirect} from 'react-router-dom'
import YourRobotPic from '../pictures/YourRobotPic.jpg';
import Robot1 from '../pictures/Robot1.jpg'
class OneFight extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            YourRobot:[],
            EnemyRobots:[],
            EnemyRobot:[],
            PlayerAttack:'',
            Checked:NaN,
            PlayerHealthPer:'',
            Disabled:false,
            AttackStyle:{
            width:'450px',
            marginLeft:'0',
            border:'1px solid black',
            display:'inline-block',
            position:'relative',
            backgroundColor:'rgba(211, 211, 211, 0.850)',
            color:'black'
},
        EnemyAttackStyle: {
            width:'450px',
            marginLeft:'0',
            border:'1px solid black',
            display:'inline-block',
            position:'relative',
            backgroundColor:'rgba(211, 211, 211, 0.850)',
            color:'black'
        },
        };
    };

Redirect = () => {
    return <Redirect to='/'></Redirect>
}
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
                        if(ele.Health === 'Dead'){
                                return  this.Redirect()
                            }else{ 
                        return(
                            <EnemyFightCard
                            key={ele.id}
                            Health={ ele.Health}
                            Name={ ele.name}
                            EnemyStyle={this.props.EnemyStyle}
                            EnemyRobotPic={Robot1}
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
};
const FightPageStyle = {
    height:'1200px',
    color:'White'
}
export default OneFight;