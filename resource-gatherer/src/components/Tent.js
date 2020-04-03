import React from 'react';
import tent from '../Tent.jpg'

class Tent extends React.Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
           this.props.tentCollapse(this.props.i) 
        }, 4000);
    }

    render() {
        return(
            <img src={tent} alt={tent} className="tent-img"/>
        )
        
    }
}

export default Tent