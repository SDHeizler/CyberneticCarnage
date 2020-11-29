import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom';
import Robots from './RobotsDatabasetest';
import Home from './components/Home';
import YourRobot from './components/YourRobot';
import OneFight from './components/OneFight';
import Error from './components/404';
import YouLose from './components/YouLose';
import YouWin from './components/YouWin';
import Reset from './components/Reset';
import axios from 'axios';


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
        width:'350px',
        marginLeft:'0',
        border:'5px solid black',
        display:'inline-block',
        position:'relative',
        borderRadius:'8px'
},
        EnemyAttackStyle: {
            width:'350px',
            marginLeft:'0',
            border:'5px solid black',
            display:'inline-block',
            position:'relative',
            borderRadius:'8px'
        },
        GitHubLinkStyle:{
          display:'none'
        },
        buttonText:'Continue',
      
    }
  }
async componentDidMount(){
  const getAllRobots = await 
  axios.get('http://localhost:8000/')
  .then((res) => {
    return res.data
  })
  .catch((err) => {console.log(err)});

  this.setState({
    ...this.state,
    Robots:getAllRobots
  });


    let getYourRobot = await this.state.Robots.find((ele) => {
        if(ele.PlayerRobot === true){
          return ele
        }else{
          return null
        }
      });

    this.setState({ ...this.state,
      YourRobot:[getYourRobot]
    });
    const getEnemyRobots = await this.state.Robots.filter((ele) => {
    if(ele.PlayerRobot === false){
        return ele
    }
    return null
    })
    this.setState({ ...this.state,
        EnemyRobots:getEnemyRobots,
    });
         let enemyNum = await Math.floor(Math.random() * Math.floor(this.state.EnemyRobots.length));
      if(this.state.EnemyRobot.length < 1){
        
      }
    let findEnemyRobot = await this.state.EnemyRobots.find((ele,index) => {
        if(index === enemyNum){
            return ele
        }
        return null
        });

    this.setState({...this.state,
        EnemyRobot:[findEnemyRobot]
    });
  };

  onSubmit = async (e, prop) => {
    e.preventDefault();

    // Resetting the stored css style in state
    this.setState({ ...this.state,
        PlayerAttack:'',
        Checked:NaN,
        AttackStyle:{
          width:'350px',
          marginLeft:'0',
          border:'5px solid black',
          display:'inline-block',
          position:'relative',
          borderRadius:'8px'
        },
        EnemyAttackStyle: {
            width:'350px',
            marginLeft:'0',
            border:'5px solid black',
            display:'inline-block',
            position:'relative',
            borderRadius:'8px'
        }
      });
      // Declairing and storing the enemy choice for the turn
     let enemyChoice = Math.floor(Math.random() * Math.floor(2));
    //  Playing out if player chooses to heal
    if(this.state.PlayerAttack === 'Heal'){
      // Declaired and stored the update to the player health
        let newPlayerHealth = this.state.YourRobot.map((ele) => {
          if(ele.Health !== 100){
              ele.Health = 100
          }
          return ele
      });
      // Updated state to show new player health
      this.setState({...this.state,
        YourRobot:newPlayerHealth,
        Disabled:true,
        PlayerAttack:'',
        Checked:NaN,
      })
    // Starting enemy turn
      setTimeout(() => {
        setTimeout( () => {
          if(enemyChoice === 1){
        let healEnemy = this.state.EnemyRobot.map((ele) => {
            if(ele.Health < 100){
              ele.Health += 5
            }
            return ele;
          })
            this.setState({...this.state,
            EnemyRobot: healEnemy,
            EnemyAttackStyle:{
            width:'350px',
            marginLeft:'0',
            border:'5px solid Green',
            display:'inline-block',
            position:'relative',
            borderRadius:'8px'
          },
          Disabled:false
            })
        }
      }, 1000)

        if(enemyChoice === 0){
        this.setState({...this.state,
        AttackStyle:{
          width:'350px',
          marginLeft:'0',
          border:'5px solid black',
          display:'inline-block',
          position:'relative',
          borderRadius:'8px'
          },
          EnemyAttackStyle:{
          width:'350px',
          marginLeft:'0',
          border:'5px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'EnemyAttack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in',
          borderRadius:'8px'
          }
      })
      setTimeout(() =>{
        let updatePlayer =  this.state.YourRobot.map((ele) => {
            if(ele.Health > 0){
            ele.Health -= 10
          }
            return ele
          });
        this.setState({...this.state,
          Disabled:false,
          YourRobot:updatePlayer,
            EnemyAttackStyle: {
            width:'350px',
            marginLeft:'0',
            border:'5px solid black',
            display:'inline-block',
            position:'relative',
            borderRadius:'8px'
        }
        })
      }, 1000)
        }
      }, 2000)
    }else if(this.state.PlayerAttack === 'Defend'){
      this.setState({...this.state,
        AttackStyle:{
        width:'350px',
        marginLeft:'0',
        border:'5px solid Gold',
        display:'inline-block',
        position:'relative',
        borderRadius:'8px'
        },
        PlayerAttack:'',
        Checked:NaN,
        Disabled:true,
        EnemyAttackStyle: {
            width:'350px',
            marginLeft:'0',
            border:'5px solid black',
            display:'inline-block',
            position:'relative',
            borderRadius:'8px'
        },
      })

      setTimeout(() => {
        this.setState({...this.state,
          EnemyAttackStyle:{
          width:'350px',
          marginLeft:'0',
          border:'5px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'EnemyAttack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in',
          borderRadius:'8px'
          }
      })
      setTimeout(() => {
        this.setState({...this.state,
        Disabled:false,
        AttackStyle:{
          width:'350px',
          marginLeft:'0',
          border:'5px solid black',
          display:'inline-block',
          position:'relative',
          borderRadius:'8px'
          },
        EnemyAttackStyle:{
          width:'350px',
          marginLeft:'0',
          border:'5px solid black',
          display:'inline-block',
          position:'relative',
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
        return ele
      })

        this.setState({...this.state,
            EnemyRobot:updateEnemy,
            Disabled:true,
        })
      }, 1000)
      
      this.setState({...this.state,
        PlayerAttack:'',
        Checked:NaN,
        AttackStyle:{
          width:'350px',
          marginLeft:'0',
          border:'5px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'Attack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in',
          borderRadius:'8px'
        },
        EnemyAttackStyle: {
            width:'350px',
            marginLeft:'0',
            border:'5px solid black',
            display:'inline-block',
            position:'relative',
            borderRadius:'8px'
        }
      });
      
          setTimeout(() => {
            if(this.state.EnemyRobot[0].Health <= 0){
              this.setState({
                  AttackStyle:{
                    width:'350px',
                    marginLeft:'0',
                    border:'5px solid black',
                    display:'inline-block',
                    position:'relative',
                    borderRadius:'8px'
                  },
                  EnemyAttackStyle: {
                    width:'350px',
                    marginLeft:'0',
                    border:'5px solid black',
                    display:'inline-block',
                    position:'relative',
                    borderRadius:'8px'
                  },
              });
              this.props.history.push('/YouWin');
            }else{
              setTimeout( () => {
          if(enemyChoice === 1){
        let healEnemy = this.state.EnemyRobot.map((ele) => {
            if(ele.Health < 100){
              ele.Health += 5
            }
            return ele;
          })
            this.setState({...this.state,
            EnemyRobot: healEnemy,
            EnemyAttackStyle:{
            width:'350px',
            marginLeft:'0',
            border:'5px solid Green',
            display:'inline-block',
            position:'relative',
            borderRadius:'8px'
          },
          Disabled:false
            })
        }
      }, 1000)

        if(enemyChoice === 0){
        this.setState({...this.state,
        AttackStyle:{
          width:'350px',
          marginLeft:'0',
          border:'5px solid black',
          display:'inline-block',
          position:'relative',
          borderRadius:'8px'
          },
          EnemyAttackStyle:{
          width:'350px',
          marginLeft:'0',
          border:'5px solid black',
          display:'inline-block',
          position:'relative',
          animationName:'EnemyAttack',
          animationDuration:'1s',
          animationTimingFunction:'ease-in',
          borderRadius:'8px'
          }
      })
      setTimeout(() =>{
        let updatePlayer =  this.state.YourRobot.map((ele) => {
            if(ele.Health > 0){
            ele.Health -= 10
          }
            return ele
          });
        this.setState({...this.state,
          Disabled:false,
          YourRobot:updatePlayer,
            EnemyAttackStyle: {
            width:'350px',
            marginLeft:'0',
            border:'5px solid black',
            display:'inline-block',
            position:'relative',
            borderRadius:'8px'
        }
        })
      }, 1000)
        }
            }
        
      }, 2000)
       
    }
  };
    
  onChange = (e) => {
    this.setState({...this.state,
      PlayerAttack:e.target.value,
      Checked:e.target.id
    })
  };

  onPointerEnter = () => {
        this.setState({...this.state,
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
    this.setState({...this.state,
      GitHubLinkStyle:{
        display:'none'
      }
    })
  };

  youWinButton = async () => {
      let newPlayerHealth = this.state.YourRobot.map((ele) => {
        ele.Health = 100
        return ele
      });
        let enemyId = this.state.EnemyRobot[0]._id;
          let newEnemyRobot = await axios.delete(`http://localhost:8000/${enemyId}`)
          .then((response) => {
            console.log(response.data)
            return response.data;
          })
          .catch((err) => console.log(err));
        if(!newEnemyRobot || newEnemyRobot.length < 1){
          this.props.history.push('/Reset')
        }else{
            this.setState({...this.state,
        YourRobot:newPlayerHealth,
        EnemyRobot:newEnemyRobot,
        Disabled:false,
        AttackStyle:{
          width:'450px',
          marginLeft:'0',
          border:'5px solid black',
          display:'inline-block',
          position:'relative',
          borderRadius:'8px'
          },
          EnemyAttackStyle: {
            width:'450px',
            marginLeft:'0',
            border:'5px solid black',
            display:'inline-block',
            position:'relative',
            borderRadius:'8px'
        },
      });
      this.props.history.push('/');
        };  
  };
  resetButton = async () => {
    let resetRobots = await axios.post('http://localhost:8000/',
    {
      Robots
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err)
    });
    this.setState({
      ...this.state,
      Robots:resetRobots
    });
   let getEnemyRobot =  this.state.Robots.find((ele) => {
      if(ele.PlayerRobot === false){
        return ele
      }
    });
    this.setState({
      EnemyRobot:[getEnemyRobot]
    });
    this.props.history.push('/');
  };
  render(){
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
        <Home
        onClick={this.resetButton} 
        onPointerLeave={this.onPointerLeave} 
        onPointerEnter={this.onPointerEnter} 
        GitHubLinkStyle={this.state.GitHubLinkStyle}
        ></Home></Route>
        <Route path='/YourRobot'>
          <YourRobot
          onClick={this.resetButton} 
          onPointerLeave={this.onPointerLeave} 
          onPointerEnter={this.onPointerEnter} 
          GitHubLinkStyle={this.state.GitHubLinkStyle} 
          YourRobot={this.state.YourRobot}></YourRobot></Route>
        <Route path='/SingleBattle'>
            <OneFight 
              onClick={this.resetButton} 
              onPointerLeave={this.onPointerLeave} 
              onPointerEnter={this.onPointerEnter} 
              GitHubLinkStyle={this.state.GitHubLinkStyle}
              YourRobot={this.state.YourRobot}
              EnemyRobot={this.state.EnemyRobot}
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              Checked={this.state.Checked}
              disabled={this.state.Disabled}
              AttackStyle={this.state.AttackStyle}
              EnemyStyle={this.state.EnemyAttackStyle}
            ></OneFight>
          </Route>
          <Route path='/YouLose'><YouLose onClick={this.resetButton}></YouLose></Route>
          <Route path='/YouWin'>
            <YouWin
            onClick={this.youWinButton}
            ></YouWin></Route>
            <Route path='/Reset'><Reset onClick={this.resetButton}></Reset></Route>
        <Route  path=''><Error></Error></Route>
      </Switch>
    </div>
  );
  }
};


export default withRouter(App);
