import React from 'react';
class Filler extends React.Component {
    render() { 
        return ( 
            <div style={{width:`${this.props.Health}%`, backgroundColor:'#B72000',  borderRadius:'50px', height:'100%', textAlign:'center'}}>
            </div>
         );
    }
}

export default Filler;