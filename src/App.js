import React from 'react';
import './App.css';
import {Switch, Route,} from 'react-router-dom';
import Robots from './RobotsDatabasetest';
import NavBar from './components/NavBar';
import Home from './components/Home';
import YourRobot from './components/YourRobot';
import OneFight from './components/OneFight'

class App extends React.Component {
  constructor(){
    super()
    this.state={
        Robots:[],
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
},
        EnemyAttackStyle: {
            width:'450px',
            marginLeft:'0',
            border:'1px solid black',
            display:'inline-block',
            position:'relative',
        },
      
    }
  }
async componentDidMount(){
  const getEnemyRobots = await Robots.filter((ele) => {
    if(ele.PlayerRobot === false){
      return ele
    }
    return null
  })
    this.setState({
      Robots:[...Robots],
      EnemyRobots:getEnemyRobots
    })
    let enemyNum = await Math.floor(Math.random() * Math.floor(this.state.EnemyRobots.length))
    let findEnemyRobot = await this.state.EnemyRobots.find((ele,index) => {
        if(index === enemyNum){
          return ele
        }
        return null
      })
    let findYourRobot = await this.state.Robots.filter((ele) => {
        if(ele.PlayerRobot === true){
          return ele
        }else{
          return null
        }
      })
    this.setState({
      EnemyRobot:[findEnemyRobot],
      YourRobot:findYourRobot
    })
    
  }



  onSubmit = async (e, prop) => {
    e.preventDefault();
     let enemyChoice = Math.floor(Math.random() * Math.floor(2));
    if(this.state.PlayerAttack === 'Heal'){
         let newPlayerHealth = this.state.YourRobot.map((ele) => {
        ele.Health = 100
        return ele
      })
      this.setState({
        YourRobot:newPlayerHealth,
        Disabled:true,
        PlayerAttack:'',
        Checked:NaN,
      })
      
      this.setState({
        PlayerAttack:'',
        Checked:NaN,
        Disabled:true,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
        },
        EnemyAttackStyle: {
            width:'450px',
            marginLeft:'0',
            border:'1px solid black',
            display:'inline-block',
            position:'relative',
        }
      })
      
      setTimeout( async() => {
        console.log(enemyChoice)
        setTimeout( () => {
        let updatePlayer =  this.state.YourRobot.map((ele) => {
          if(enemyChoice === 0){
            ele.Health -= 10;
          }
          return ele
        })
        let healEnemy = this.state.EnemyRobot.map((ele) => {
          if(enemyChoice === 1 && ele.Health < 100){
            ele.Health += 5
          }
          return ele
        })
        if(enemyChoice === 1){
          this.setState({
        YourRobot:updatePlayer,
        EnemyRobot: healEnemy,
        EnemyAttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'5px solid Green',
          display:'inline-block',
          position:'relative',
        }
        })
        }else{
          this.setState({
        YourRobot:updatePlayer,
        })
        }
      }, 1000)
        if(enemyChoice === 0){
        this.setState({
        Disabled:false,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          },
          EnemyAttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'EnemyAttack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in'
          }
      })
        }else{
          this.setState({
        Disabled:false,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          },
      })
        }
        
       

        if(this.state.EnemyRobot[0].Health === 'Dead'){
      let newEnemyRobot = await this.state.EnemyRobots.find((ele) => {
        if(ele.id !== this.state.EnemyRobot[0].id){
          return ele
        }
        return null
      })
      this.setState({
        EnemyRobot:[newEnemyRobot],
        Disabled:false,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          }
      })
    }
      }, 2000)
    }else if(this.state.PlayerAttack === 'Defend'){
      this.setState({
        AttackStyle:{
        width:'450px',
        marginLeft:'0',
        border:'5px solid Gold',
        display:'inline-block',
        position:'relative',
        },
        PlayerAttack:'',
        Checked:NaN,
        Disabled:true,
        EnemyAttackStyle: {
            width:'450px',
            marginLeft:'0',
            border:'1px solid black',
            display:'inline-block',
            position:'relative',
        },
      })

      setTimeout(() => {
        this.setState({
          Disabled:false,
          EnemyAttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'EnemyAttack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in'
          }
      })
      setTimeout(() => {
        this.setState({
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          },
        EnemyAttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          }
      })
      }, 1000)
      }, 2000)
    }else{
      console.log('Attack!', this.state.PlayerAttack)
      setTimeout(() => {
        let updateEnemy = this.state.EnemyRobot.map((ele) => {
        if(ele.Health > 0){
          ele.Health -= 10
        }
        if(ele.Health <= 0){
          ele.Health = 'Dead'
        }
        return ele
      })

        this.setState({
            EnemyRobot:updateEnemy,
        })
      }, 1000)
      
      this.setState({
        PlayerAttack:'',
        Checked:NaN,
        Disabled:true,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'Attack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in'
        },
        EnemyAttackStyle: {
            width:'450px',
            marginLeft:'0',
            border:'1px solid black',
            display:'inline-block',
            position:'relative',
        }
      })
      
      setTimeout( async() => {
        console.log(enemyChoice)
        setTimeout( () => {
        let updatePlayer =  this.state.YourRobot.map((ele) => {
          if(enemyChoice === 0){
            ele.Health -= 10;
          }
          return ele
        })
        let healEnemy = this.state.EnemyRobot.map((ele) => {
          if(enemyChoice === 1 && ele.Health < 100){
            ele.Health += 5
          }
          return ele
        })
        if(enemyChoice === 1){
          this.setState({
        YourRobot:updatePlayer,
        EnemyRobot: healEnemy,
        EnemyAttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'5px solid Green',
          display:'inline-block',
          position:'relative',
        }
        })
        }else{
          this.setState({
        YourRobot:updatePlayer,
        })
        }
      }, 1000)
        if(enemyChoice === 0){
        this.setState({
        Disabled:false,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          },
          EnemyAttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'EnemyAttack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in'
          }
      })
        }else{
          this.setState({
        Disabled:false,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          },
      })
        }
        
       

        if(this.state.EnemyRobot[0].Health === 'Dead'){
      let newEnemyRobot = await this.state.EnemyRobots.find((ele) => {
        if(ele.id !== this.state.EnemyRobot[0].id){
          return ele
        }
        return null
      })
      this.setState({
        EnemyRobot:[newEnemyRobot],
        Disabled:false,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          }
      })
    }
      }, 2000)
      

    
    }
  }
    


  onChange = (e) => {
    this.setState({
      PlayerAttack:e.target.value,
      Checked:e.target.id
    })
    
  }
  render(){
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/YourRobot'>
          <YourRobot 
          YourRobot={this.state.YourRobot}></YourRobot></Route>
        <Route path='/SingleBattle'>
          <OneFight 
        YourRobot={this.state.YourRobot} 
        EnemyRobot={this.state.EnemyRobot} 
        onSubmit={this.onSubmit} onChange={this.onChange}
        PlayerAttackValue={this.state.PlayerAttack}
        Checked={this.state.Checked}
        disabled={this.state.Disabled}
        AttackStyle={this.state.AttackStyle}
        EnemyStyle={this.state.EnemyAttackStyle}
        ></OneFight></Route>
      </Switch>
    </div>
  );
  }
}

export default App;
