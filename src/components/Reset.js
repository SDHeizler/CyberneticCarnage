import React from 'react';
class Reset extends React.Component {
    render() { 
        return ( 
            <div className='ResetPage' style={ResetPageStyle}>
                <h1>There are no more battles left to fight</h1>
                <p>Click the button to reset</p>
                <button className='btn-primary' onClick={this.props.onClick}>Reset</button>
            </div>
         );
    }
};
const ResetPageStyle = {
    height:'100%',
    color:'White'
};
 
export default Reset;