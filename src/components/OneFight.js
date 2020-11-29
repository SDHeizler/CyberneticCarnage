import React from 'react';
import RobotFightCard from './RobotFightCard';
import EnemyFightCard from './EnemyFightCard';
import YourRobotPic from '../pictures/YourRobotPic.jpg';
import Robot1 from '../pictures/Robot1.jpg';
import NavBar from './NavBar';
class OneFight extends React.Component {



    render() { 
        return ( 
            <div className='FightPage' style={FightPageStyle}>
                <NavBar
                onClick={this.props.onClick} 
                onPointerLeave={this.props.onPointerLeave} 
                onPointerEnter={this.props.onPointerEnter} 
                GitHubLinkStyle={this.props.GitHubLinkStyle}></NavBar>
                <header>
                <h1 style={{fontSize:'60px', fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'}}>Battle!</h1>
                </header>
                <div style={containerStyle}>
                {this.props.YourRobot.map((ele) => {
                        return(
                        <RobotFightCard key={ele._id} 
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
                            key={ele._id}
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
    height:'100%',
    color:'White'
}
export default OneFight;