import React from 'react';
import HealthBar from './HealthBar'
class EnemyFightCard extends React.Component {
    
    render() { 
        
        return ( 
            <div style={this.props.EnemyStyle}>
                <h3>{this.props.Name}</h3>
                <img style={EnemyImageStyle} src={this.props.EnemyRobotPic} alt=''></img>
                <h4>Health:{this.props.Health}%</h4>
                <HealthBar Health={this.props.Health}></HealthBar>
            </div>
            );
    }
}
const EnemyImageStyle = {
    height:'250px',
    width:'250px'
}
export default EnemyFightCard;