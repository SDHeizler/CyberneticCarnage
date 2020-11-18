import React from 'react';
class YouWin extends React.Component {
    render() { 
        return(
        <div>
            <h1>YouWin!</h1>
            <button className='btn-primary' onClick={this.props.onClick}>Continue</button>
        </div>
    )
    }
}
 
export default YouWin;

