import React, { Component } from 'react';
import MySvg3 from '../MySvg3'

class PauseBut extends Component {
    
    render() { 
        return ( 
            <button type="button" onClick={this.props.stopTimer}><MySvg3/></button>
         );
    }
}
 
export default PauseBut;