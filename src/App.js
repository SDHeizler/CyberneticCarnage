import React from 'react';
import './App.css';
import {Switch, Route,} from 'react-router-dom';
import Robots from './RobotsDatabasetest';
import NavBar from './components/NavBar';
import Home from './components/Home';
import YourRobot from './components/YourRobot';
import OneFight from './components/OneFight';

class App extends React.Component {
  constructor(){
    super()
    this.state={
        Robots:[],
        EnemyRobots:[],
        EnemyRobot:[],
        YourRobot:[],
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
        color:'black',
        borderRadius:'8px'
},
        EnemyAttackStyle: {
            width:'450px',
            marginLeft:'0',
            border:'1px solid black',
            display:'inline-block',
            position:'relative',
            backgroundColor:'rgba(211, 211, 211, 0.850)',
            color:'black',
            borderRadius:'8px'
        },
        GitHubLinkStyle:{
          display:'none'
        },
      
    }
  }
async componentDidMount(){
  const getAllRobots = await Robots.map((ele) => {
    return ele;
  });
    this.setState({
      Robots:getAllRobots
    })
    let getYourRobot = await Robots.find((ele) => {
        if(ele.PlayerRobot === true){
          return ele
        }else{
          return null
        }
      });

    this.setState({
      YourRobot:[getYourRobot]
    });
    const getEnemyRobots = await Robots.filter((ele) => {
    if(ele.PlayerRobot === false){
        return ele
    }
    return null
    })
    this.setState({
        EnemyRobots:getEnemyRobots,
    });
         let enemyNum = await Math.floor(Math.random() * Math.floor(this.state.EnemyRobots.length));
    let findEnemyRobot = await this.state.EnemyRobots.find((ele,index) => {
        if(index === enemyNum){
            return ele
        }
        return null
        });

    this.setState({
        EnemyRobot:[findEnemyRobot]
    });
  };

  onSubmit = async (e, prop) => {
    e.preventDefault();

    this.setState({
        PlayerAttack:'',
        Checked:NaN,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
        },
        EnemyAttackStyle: {
            width:'450px',
            marginLeft:'0',
            border:'1px solid black',
            display:'inline-block',
            position:'relative',
            backgroundColor:'rgba(211, 211, 211, 0.850)',
            color:'black',
            borderRadius:'8px'
        }
      })

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
    
      setTimeout(() => {
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
          }else{
            return ele
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
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
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
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
          },
          EnemyAttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'EnemyAttack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
          }
      })
      setTimeout(() =>{
        this.setState({
          Disabled:false
        })
      }, 1000)
        }else{
          this.setState({
        Disabled:false,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
          },
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
        backgroundColor:'rgba(211, 211, 211, 0.850)',
        color:'black',
        borderRadius:'8px'
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
            backgroundColor:'rgba(211, 211, 211, 0.850)',
            color:'black',
            borderRadius:'8px'
        },
      })

      setTimeout(() => {
        this.setState({
          EnemyAttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'EnemyAttack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
          }
      })
      setTimeout(() => {
        this.setState({
        Disabled:false,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
          },
        EnemyAttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
          }
      })
      }, 1000)
      }, 2000)
    }else{
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
            Disabled:true,
        })
      }, 1000)
      
      this.setState({
        PlayerAttack:'',
        Checked:NaN,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'Attack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
        },
        EnemyAttackStyle: {
            width:'450px',
            marginLeft:'0',
            border:'1px solid black',
            display:'inline-block',
            position:'relative',
            backgroundColor:'rgba(211, 211, 211, 0.850)',
            color:'black',
            borderRadius:'8px'
        }
      })
      
      setTimeout( async() => {
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
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
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
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
          },
          EnemyAttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'EnemyAttack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
          }
      })
      setTimeout(() => {
          this.setState({
            Disabled:false,
          })
      },1000)
        }else{
          this.setState({
        Disabled:false,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'1px solid black',
          display:'inline-block',
          position:'relative',
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
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
          backgroundColor:'rgba(211, 211, 211, 0.850)',
          color:'black',
          borderRadius:'8px'
          }
      })
    }
      }, 2000)
      

    
    }
  };
    
  onChange = (e) => {
    this.setState({
      PlayerAttack:e.target.value,
      Checked:e.target.id
    })
  };

  onPointerEnter = () => {
        this.setState({
      GitHubLinkStyle:{
        listStyleType:'none',
        position:'relative',
        border:'1px solid Black',
        padding:'10px',
        backgroundColor:'#234691',

      }
    })
  };
  onPointerLeave = () => {
    this.setState({
      GitHubLinkStyle:{
        display:'none'
      }
    })
  };
  render(){
  return (
    <div className="App">
      <NavBar onPointerLeave={this.onPointerLeave} onPointerEnter={this.onPointerEnter} GitHubLinkStyle={this.state.GitHubLinkStyle}></NavBar>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/YourRobot'>
          <YourRobot 
          YourRobot={this.state.YourRobot}></YourRobot></Route>
        <Route path='/SingleBattle'>
          <OneFight 
          YourRobot={this.state.YourRobot}
          EnemyRobot={this.state.EnemyRobot}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          Checked={this.state.Checked}
          disabled={this.state.Disabled}
          AttackStyle={this.state.AttackStyle}
           EnemyStyle={this.state.EnemyAttackStyle}
        ></OneFight></Route>
      </Switch>
    </div>
  );
  }
};


export default App;
