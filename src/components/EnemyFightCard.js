import React from 'react';
import HealthBar from './HealthBar';
import PropTypes from 'prop-types';
class EnemyFightCard extends React.Component {
    
    render() { 
        
        return ( 
            <div className='bg-dark text-white' style={this.props.EnemyStyle}>
                <h3>{this.props.Name}</h3>
                <img style={EnemyImageStyle} src={this.props.EnemyRobotPic} alt=''></img>
                <h4 style={{transition:'ease-in, 200ms'}} id='EnemyRobotHealth'>Health:{this.props.Health}%</h4>
                <HealthBar Health={this.props.Health}></HealthBar>
            </div>
            );
    }
}
const EnemyImageStyle = {
    height:'auto',
    width:'9vw'
};

// PropTypes
EnemyFightCard.propTypes = {
    EnemyStyle:PropTypes.object,
    Name:PropTypes.string,
    Health:PropTypes.number,
    
};
export default EnemyFightCard;