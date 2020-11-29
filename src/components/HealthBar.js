import React from 'react';
import Filler from './Filler'
class HealthBar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <div style={progressBar}>
                  <Filler Health={this.props.Health}></Filler>
              </div>
            </div>
         );
    }
}
const progressBar={
    marginLeft:'auto',
    marginRight:'auto',
    height:'30px',
    width:'100%',
    borderRadius:'50px',
    border:'1px solid black',
    position:'relative'
}
export default HealthBar;