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
            EnemyRobot:[]
        };
    };
    async componentDidMount(){
    const getEnemyRobots = await this.props.Robots.filter((ele) => {
    if(ele.PlayerRobot === false){
      return ele
    }
    return null
  })
    this.setState({
      EnemyRobots:getEnemyRobots,
    });

    
        let getYourRobot = await this.props.Robots.find((ele) => {
        if(ele.PlayerRobot === true){
            return ele
        }else{
            return null
        }
        });



         let enemyNum = await Math.floor(Math.random() * Math.floor(this.state.EnemyRobots.length));
    let findEnemyRobot = await this.state.EnemyRobots.find((ele,index) => {
        if(index === enemyNum){
          return ele
        }
        return null
      });

    this.setState({
        YourRobot:[getYourRobot],
        EnemyRobot:[findEnemyRobot]
    });
    }
        

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
                {this.state.YourRobot.map((ele) => {
                    return(
                        <RobotFightCard key={ele.id} 
                        Name={ele.name} 
                        Attacks={ele.Attacks.map((ele, index) => {
                            return ele
                        })}
                        Health={ele.Health}
                        onSubmit={(e) => {this.props.onSubmit(e)}}
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
                    {this.state.EnemyRobot.map((ele, index) => {
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