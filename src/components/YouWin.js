import React from 'react';
class YouWin extends React.Component {
    render() { 
        return(
        <div className='YouWinPage' style={YouWinPageStyle}>
                <h1 style={{fontSize:'60px',fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'}}>You Win!</h1>
                <button style={YouWinButtonStyle} className='btn-primary' onClick={this.props.onClick}>Continue</button>
        </div>
    )
    }
};
const YouWinPageStyle = {
    height:'100%',
    color:'White',
};
const YouWinButtonStyle = {
     paddingLeft:'40px',
    paddingRight:'40px',
    paddingTop:'20px',
    paddingBottom:'20px',
    fontSize:'20px',
    fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'
};
export default YouWin;

