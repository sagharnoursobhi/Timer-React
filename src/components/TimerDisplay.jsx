import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const leftPad = (val)=>{

    if (val < 10) return `0${val}`;
    else return`${val}`
}
const TimerDisplay = (props) => (
    
<h3 className="text-white">

    {`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}

</h3>

);


export default TimerDisplay;