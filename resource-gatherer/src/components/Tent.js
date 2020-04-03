import React from 'react';
import tent from '../Tent.jpg'

class Tent extends React.Component {


    render() {
        return(
            <img src={tent} alt={tent} className="tent-img"/>
        )
        
    }
}

export default Tent