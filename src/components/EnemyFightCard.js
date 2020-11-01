import React from 'react';
import HealthBar from './HealthBar'
class EnemyFightCard extends React.Component {
    
    render() { 
       
        return ( 
            <div style={this.props.EnemyStyle}>
                <h4>{this.props.Name}</h4>
                <h5>Health:{this.props.Health}%</h5>
                <HealthBar Health={this.props.Health}></HealthBar>
            </div>
         );
    }
}

export default EnemyFightCard;