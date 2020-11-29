import React from 'react';
class YouLose extends React.Component {
    render() { 
        return(
        <div className='YouLosePage' style={YouLosePageStyle}>
                <h1>Sorry, you Lost. Click the button to Reset and try again</h1>
                <button style={YouLoseButtonStyle} className='btn-primary' onClick={this.props.onClick}>Reset</button>
        </div>
    )
    }
};
const YouLosePageStyle = {
    height:'100%',
    color:'White',
};
const YouLoseButtonStyle = {
    paddingLeft:'40px',
    paddingRight:'40px',
    paddingTop:'20px',
    paddingBottom:'20px',
    fontSize:'20px',
    fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'
};
export default YouLose;