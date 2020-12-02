import React from 'react';
import PropTypes from 'prop-types';
class Reset extends React.Component {
    render() { 
        return ( 
            <div className='ResetPage' style={ResetPageStyle}>
                <h1 style={{fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'}}>There are no more battles left to fight</h1>
                <p style={{fontSize:'30px',fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'}}>Click the button to reset</p>
                <button style={ResetPageButtonStyle} className='btn-primary' onClick={this.props.onClick}>Reset</button>
            </div>
         );
    }
};
const ResetPageStyle = {
    height:'100%',
    color:'White'
};
const ResetPageButtonStyle = {
    paddingLeft:'40px',
    paddingRight:'40px',
    paddingTop:'20px',
    paddingBottom:'20px',
    fontSize:'20px',
    fontFamily:'Open Sans, Noto Sans, Roboto, Sans Sarif'
};

// PropTypes
Reset.propTypes = {
    onClick:PropTypes.func.isRequired
};
export default Reset;