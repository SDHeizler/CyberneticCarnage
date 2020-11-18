import React from 'react';
class Reset extends React.Component {
    render() { 
        return ( 
            <div>
                <h1>There are no more battles left to fight</h1>
                <p>Click the button to reset</p>
                <button onClick={this.props.onClick}>Reset</button>
            </div>
         );
    }
}
 
export default Reset;