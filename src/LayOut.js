import React from 'react'
import moment from 'moment'
import TimerDisplay from './components/TimerDisplay'
import TimerConfig from './components/TimerConfig'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import StartButton from './components/StartBut';
import PauseBut from './components/PauseBut';
import StopBut from './components/StopBut';

import MySvg1 from './MySvg1'
import * as TimerStates from './components/TimerStates'
class LayOut extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentTime : moment.duration( 25 , 'minutes'),
            baseTime : moment.duration(25 , 'minutes'),
            timerState : TimerStates.NOT_SET,
            activePause: false,
            timer : null,
                    }

            this.setBaseTime = this.setBaseTime.bind(this);
            this.startTimer = this.startTimer.bind(this);
            this.reducedTimer = this.reducedTimer.bind(this);
            // this.pauseTimer = this.pauseTimer.bind(this);
            this.stopTimer = this.stopTimer.bind(this);
            this.completeTimer = this.completeTimer.bind(this);
        }

        setBaseTime(newBaseTime){
            this.setState({
                baseTime : newBaseTime,
                currentTime :newBaseTime,
            })
        }

        startTimer(){
            this.setState({
                timerState : TimerStates.RUNNING,
                timer : setInterval(this.reducedTimer, 1000),
                activePause:true,
            });
        }

        reducedTimer(){
            const newTime = moment.duration(this.state.currentTime);
            newTime.subtract(1 , 'second');
            this.setState({
                currentTime: newTime,
            })
        }

        // pauseTimer(){
        //     this.setState({
        //         timerState: TimerStates.NOT_SET,
        //         activePause :false,
        //         timer: setInterval(this.reducedTimer, 1000),
        //     })
        // }

        stopTimer(){
            if(this.state.timer){
                clearInterval(this.state.timer);
            }
            this.setState({
                timerState: TimerStates.NOT_SET,
                timer : null,
                currentTime : moment.duration(this.state.baseTime)
            })
        }

        completeTimer(){

        }

    render(){
        return( <>
                    <div className="container border border-dark">
                        <div className="row">
                            <div className="item1 col-6 d-flex align-items-center">
                                <p className="mb-auto mt-auto text-white">Pomodoro Timer</p>
                            </div>
                            <div className="item2 col-6 d-flex justify-content-around align-items-center">
                                <MySvg1/>
                            </div>
                            <div className="item3 col-12">
                                <TimerDisplay currentTime={this.state.currentTime}/>
                            </div>
                            <div className="item4 col-12 ">
                                {
                                    (this.state.timerState !== TimerStates.RUNNING)
                                    &&
                                    <TimerConfig 
                                    baseTime ={this.state.baseTime}
                                    setBaseTime={this.setBaseTime}
                                    />
                            }
                            </div>
                        </div>
                        <div className="row margin">
                            <div className="item5 col-3 extra">
                                <StartButton startTimer={this.startTimer}/>
                            </div>
                            <div className="item6 col-3 extra">
                                <PauseBut pauseTimer={this.stopTimer}/>
                            </div>
                            <div className="item7 col-3 extra">
                                
                            </div>
                            <div className="item8 col-3 extra">
                                <StopBut stopTimer={this.stopTimer}/>
                            </div>
                        </div>
                    </div> 
            </>
        )
    }
}

export default LayOut;