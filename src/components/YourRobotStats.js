import React from 'react';
class YourRobotStats extends React.Component {
    render() { 
        return ( 
            <div className='container'>
                    <h1>Name: {this.props.name}</h1>
                    <div style={DivSize}>
                    <ul style={UlListStyle}>
                        <h4>Stats:</h4>
                        <li>Health:{this.props.health}</li>
                    </ul>
                    </div>
                    <div style={DivSize}>
                    <ol style={OlListStyle}>
                        <h4>Attacks:</h4>
                        {this.props.attacks.map((ele, index) => {
                            return(
                            <li key={index}>{ele}</li>
                            )
                        })}
                    </ol>
                    </div>
            </div>
         );
    }
}
const UlListStyle = {
    listStyleType:'none',
    textAlign:'center'
}
const OlListStyle = {
    textAlign:'center',
}
const DivSize = {
    width:'30%',
    marginLeft:'auto',
    marginRight:'auto'
}
export default YourRobotStats;