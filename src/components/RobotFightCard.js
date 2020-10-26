import React from 'react';
import HealthBar from './HealthBar'
class RobotFightCard extends React.Component {
    
    
    render() { 
        return ( 
            <div className='YourRobot' style={this.props.AttackStyle}>
                <h4>{this.props.Name}</h4>
                <h5>Health: {this.props.Health}%</h5>
                <HealthBar Health={this.props.Health}></HealthBar>
                <form className='form' style={formStyle}
                target='input'
                    onSubmit={(e) => {this.props.onSubmit(e)}}>
                        
                    {this.props.Attacks.map((ele, index) => {
                        return(
                                <label  key={index} htmlFor='Attacks'>
                                    {ele} {' '}
                                    <input onChange={(e) => this.props.onChange(e)}
                                        name="Attacks" 
                                        type='radio' 
                                        value={ele} 
                                        id={index}
                                        checked={Number(this.props.Checked) === index}
                                        required
                                        ></input>
                                </label>
                        )
                    })}

                    <button disabled={this.props.disabled} className='btn-primary' type='Submit'>End Turn</button>
                </form>
                
            </div>
         );
    }
}
 
const formStyle={
    display:'flex',
    flexDirection:'column'
}


export default RobotFightCard;