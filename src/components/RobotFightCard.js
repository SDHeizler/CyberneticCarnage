import React from 'react';
import HealthBar from './HealthBar'
class RobotFightCard extends React.Component {
    
    
    render() { 
        return ( 
            <div className='YourRobot bg-dark text-white' style={this.props.AttackStyle}>
                <h3>{this.props.Name}</h3>
                <img style={RobotImageStyle} src={this.props.RobotImage} alt=''></img>
                <h4>Health: {this.props.Health}%</h4>
                <HealthBar Health={this.props.Health}></HealthBar>
                <form className='form' style={formStyle}
                target='input'
                    onSubmit={(e) => {this.props.onSubmit(e)}}>
                        
                    {this.props.Attacks.map((ele, index) => {
                        return(
                                <label
                                    style={LabelInputStyle}
                                    key={index} 
                                    htmlFor='Attacks'>
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

                    <button disabled={this.props.disabled} className='btn btn-primary btn-lg' type='Submit'>End Turn</button>
                </form>
                
            </div>
         );
    }
}
 
const formStyle={
    display:'flex',
    flexDirection:'column',
    
};
const RobotImageStyle = {
    height:'250px',
    width:'250px'
};
const LabelInputStyle = {
    fontSize:'20px',
    marginTop:'10px'
}
export default RobotFightCard;