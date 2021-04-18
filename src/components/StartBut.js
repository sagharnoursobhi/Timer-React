import React, { Component } from 'react';
import MySvg2 from '../MySvg2'

class StartButton extends Component {
    
    render() { 
        return ( 
            <button type="button" onClick={this.props.startTimer}><MySvg2/></button>
         );
    }
}
 
export default StartButton;