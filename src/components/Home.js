import React from 'react';
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render() { 
        return ( 
            <div>
                <h1>Welcome to Cybernetic Carnage</h1>
                <p>Where would you like to go?</p>
                <div>
                <Link to='/YourRobot'>YourRobot</Link>
                </div>
                <div>
                <Link to='/SingleBattle'>Battle</Link>
                </div>
            </div>
         );
    }
}
 
export default Home;