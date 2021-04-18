import React, { Component } from 'react';
import MySvg5 from '../MySvg5'

class StopBut extends Component {
    
    render() { 
        return ( 
            <button type="button" onClick={this.props.stopTimer}><MySvg5/></button>
         );
    }
}
 
export default StopBut;