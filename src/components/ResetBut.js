import React, { Component } from 'react';
import MySVg4 from './MySvg4'

class ResetBut extends Component {
    state = {  }
    render() { 
        return ( 
            <button type="button" onclick={this.props.completeTimer}><MySVg4/></button>
         );
    }
}
 
export default ResetBut;