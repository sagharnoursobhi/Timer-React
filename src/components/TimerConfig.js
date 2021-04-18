import React, { Component } from 'react';

class TimerConfig extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev){
        const newBaseTime = this.props.baseTime;
        if (ev.target.id  === 'h') newBaseTime.subtract(newBaseTime.get('hour') , 'hours').add(parseInt(ev.target.value) ,'hours');
        if (ev.target.id  === 'm') newBaseTime.subtract(newBaseTime.get('minutes') , 'minutes').add(parseInt(ev.target.value) ,'minutes');
        if (ev.target.id  === 's') newBaseTime.subtract(newBaseTime.get('seconds') , 'seconds').add(parseInt(ev.target.value) ,'seconds');
        this.props.setBaseTime(newBaseTime);
    }
    
    
    render() { 
        return ( 
        <>
            <div className="col-2 d-flex justify-content-center align-items-center">
                <input type="number" id="h" 
                defaultValue={this.props.baseTime.get('hours')}
                onChange={this.handleChange}
                />
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
                <input type="number" id="m" 
                defaultValue={this.props.baseTime.get('minutes')}
                onChange={this.handleChange}
                />
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
                <input type="number" id="s" 
                defaultValue={this.props.baseTime.get('seconds')}
                onChange={this.handleChange}
                />
            </div>
        </>
         );
    }
}
 
export default TimerConfig;
