import React from 'react';
class YouWin extends React.Component {
    render() { 
        return(
        <div className='YouWinPage' style={YouWinPageStyle}>
                <h1>YouWin!</h1>
                <button className='btn-primary' onClick={this.props.onClick}>Continue</button>
        </div>
    )
    }
};
const YouWinPageStyle = {
    height:'100%',
    color:'White',
};

export default YouWin;

